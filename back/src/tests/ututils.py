#! /usr/bin/env python3

import json
import random
import secrets
import string
# import unittest

from __future__ import annotations
from http.client import HTTPConnection
from http import HTTPStatus
from pathlib import Path
from uuid import uuid4
from typing import Tuple


random.seed()


class Identity(object):
    """웹사이트에 로그인하거나 또는 하지 않은 사용자입니다."""
    nickname: str
    email: str
    password: str
    userId: str
    token: str
    headers: str
    registered: bool = False
    loggedin: bool = False
    connection: HTTPConnection

    id_chars: str = (
        string.ascii_letters + string.digits + "!#$%&'*+-/=?^_`{|}~"
    )
    pw_chars: str = (
        string.ascii_letters + string.digits + "!#$%&'*+-/=?^_`{|}~"
    )
    domain_chars: str = string.ascii_lowercase + string.digits
    token_chars: str = string.ascii_letters + string.digits
    nickname_len: Tuple[int, int] = (4, 12)
    email_id_len: Tuple[int, int] = (4, 12)
    domain_len: Tuple[int, int] = (4, 12)
    domain_ext_len: Tuple[int, int] = (2, 4)
    pw_len: Tuple[int, int] = (8, 16)

    with (Path(__file__).parent / 'domain.json').open() as json_in:
        config: dict = json.load(json_in)
        host: str = config['host']
        port: int = config['port']
        root: str = f'http://{host}:{port}/users'

    def __init__(self, nickname=None, email=None, password=None) -> None:
        """회원 정보는 제공하지 않으면 자동으로 생성합니다."""
        if nickname is None:
            self.nickname = ''.join(
                secrets.choice(self.id_chars)
                for _ in range(random.randint(self.nickname_len))
            )
        else:
            self.nickname = nickname

        if email is None:
            email_id = ''.join(
                secrets.choice(self.id_chars)
                for _ in range(random.randing(self.email_id_len))
            )
            domain = ''.join(
                secrets.choice(self.domain_chars)
                for _ in range(random.randint(self.domain_len))
            )
            domain_ext = ''.join(
                secrets.choice(self.domain_chars)
                for _ in range(random.randint(self.domain_ext_len))
            )
            self.email = f'{email_id}@{domain}.{domain_ext}'
        else:
            self.email = email

        if password is None:
            self.password = ''.join(
                secrets.choice(self.pw_chars)
                for _ in range(random.randint(self.pw_len))
            )
        else:
            self.nickname = nickname

        self.userId = uuid4()
        self.token = '.'.join(
            [
                secrets.token_urlsafe(36),
                secrets.token_urlsafe(66),
                secrets.token_urlsafe(43),
            ]
        )
        self.headers = json.dumps({'Content-Type': 'application/json'})
        self.connection = HTTPConnection(self.host, self.port)

    def register(self) -> Identity:
        self.connection.request(
            'POST',
            f'{self.root}/register',
            body=json.dumps(
                {
                    'nickname': self.nickname,
                    'email': self.email,
                    'password': self.password
                }
            ),
            headers=self.headers,
        )
        res = self.connection.getresponse()
        if res.status != HTTPStatus.CREATED:
            raise AssertionError(f'Registration fail, got {res.status}')
        self.registered = True
        self.userId = json.loads(res.read()).data['userId']
        return self

    def unregister(self) -> Identity:
        self.connection.request(
            'DELETE',
            f'{self.root}/{self.userId}',
            headers=self.headers,
        )
        res = self.connection.getresponse()
        if res.status != HTTPStatus.NO_CONTENT:
            raise AssertionError(f'Unregistration fail, got {res.status}')
        self.registered = self.loggedin = False
        return self

    def login(self) -> Identity:
        self.connection.request(
            'POST',
            f'{self.root}/login',
            body=json.dumps({'email': self.email, 'password': self.password}),
            headers=self.headers,
        )
        res = self.connection.getresponse()
        if res.status != HTTPStatus.OK:
            raise AssertionError(f'Logging in fail, got {res.status}')
        self.loggedin = True
        self.token = json.loads(res.read()).data['token']
        self.headers = json.dumps(
            {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {self.token}',
            }
        )


class ConfigMixin(object):
    jsonpath: str
    config: dict
    root: str
    headers: str
    myself: Identity
    somebody: Identity
    nobody: Identity

    def setUp(self):
        with Path(self.jsonpath).open() as json_in:
            self.config = json.load(json_in)

        self.root = f"{self.config['host']}:{self.config['port']}"

        # Identity 세 가지를 만듭니다. (자기 자신, 다른 사용자, 로그인하지 않은 사용자)
        self.myself = Identity().register().login()
        self.somebody = Identity().register().login()
        self.nobody = Identity()

    def tearDown(self):
        pass


class AuthMixin(object):
    """로그인이 필요한 서비스 접근을 위해 회원가입/탈퇴를 합니다."""
    connection: HTTPConnection
    nickname: str
    email: str
    password: str
    userId: str
    token: str
    headers: str
    registered: bool = False
    loggedin: bool = False

    def setUp(self) -> None:
        self.connection = HTTPConnection(
            self.config['host'], self.config['port']
        )

        # 회원 가입을 시도합니다.
        authdata = self.config['auth']
        body = json.dumps(
            {
                'nickname': authdata['nickname'],
                'email': authdata['email'],
                'password': authdata['password'],
            }
        )

        self.connection.request(
            'POST',
            f'{self.root}/users/register',
            body=body,
            headers=self.headers
        )
        res = self.connection.getresponse()
        self.assertEqual(
            res.status, HTTPStatus.CREATED, 'Registration failed'
        )
        self.registered = True

        data = json.loads(res.read())['data']
        self.nickname = data['nickname']
        self.email = data['email']
        self.userId = data['userId']
        self.headers = json.dumps(
            {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {self.token}'
            }
        )

        # 로그인을 시도합니다.
        body = json.dumps(
            {
                'email': self.email,
                'password': self.password
            }
        )
        self.connection.request(
            'POST',
            f'{self.root}/users/login',
            body=body,
            headers=self.headers
        )

        res = self.connection.getresponse()
        self.assertEqual(
            res.status, HTTPStatus.OK, 'Login failed'
        )
        self.loggedin = True
        data = json.loads(res.read())['data']
        self.token = data['token']

    def tearDown(self) -> None:
        self.connection.request(
            'DELETE',
            f'{self.root}/users/{self.userId}',
            headers=self.headers
        )

        res = self.connection.getresponse()
        self.connection.close()
        self.assertEqual(
            res.status,
            HTTPStatus.NO_CONTENT,
            'Unregistration failed'
        )

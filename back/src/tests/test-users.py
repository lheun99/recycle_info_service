#! /usr/bin/env python3

import json
import unittest

from http import HTTPStatus
from ututils import ConfigMixin, Identity


class TestUsers(unittest.TestCase, ConfigMixin):
    """``users`` api를 검사합니다."""
    name = 'users'

    def _update_profile(self, imposter: Identity):
        conn = imposter.connection
        cfg = self.config['update_profile']

        conn.request(
            'PATCH',
            f'{self.root}/{cfg["path"]}'.format(**vars(self.myself)),
            body=json.dumps(cfg['body']),
            headers=imposter.headers,
        )
        res = conn.getresponse()
        self.assertEqual(res.status, HTTPStatus.OK)

    def _update_password(self, imposter: Identity):
        conn = imposter.connection
        cfg = self.config['update_password']

        password = cfg['body']['password']
        conn.request(
            'PATCH',
            f'{self.root}/{cfg["path"]}'.format(**vars(self.myself)),
            body=json.dumps(cfg['body']),
            headers=imposter.headers,
        )
        res = conn.getresponse()
        self.assertEqual(res.status, HTTPStatus.OK)

        # 비밀번호 변경에 성공하면 로그인을 해봅니다.
        # 로그인에 실패하면 AssertionError가 전파됩니다.
        self.myself.password = password
        self.myself.login()

    def _get_mypage(self, imposter: Identity):
        conn = imposter.connection
        cfg = self.config['get_mypage']

        conn.request(
            'GET',
            f'{self.root}/{cfg["path"]}'.format(**vars(self.myself)),
            headers=imposter.headers,
        )
        res = conn.getresponse()
        self.assertEqual(res.status, HTTPStatus.OK)

        data = json.loads(res.read())['data']
        self.assertTrue(
            self.myself.email == data['email']
            and self.myself.nickname == data['nickname']
        )

    def test_1_update_password(self):
        """자기 자신만 비밀번호를 바꿀 수 있어야 합니다."""
        with self.subTest('자기 자신의 비밀번호 바꾸기'):
            self._update_password(self.myself)
        with self.subTest('로그인하지 않은 사용자가 비밀번호 바꾸기'):
            unittest.expectedFailure(self._update_password(self.nobody))
        with self.subTest('로그인한 다른 사용자가 비밀번호 바꾸기'):
            unittest.expectedFailure(self._update_password(self.somebody))

    def test_illegal_modification(self):
        conn = self.myself.connection
        cfg = self.config['update_password']

        conn.request(
            'PATCH',
            f'{self.root}/{cfg["path"]}'.format(**vars(self.myself)),
            body=json.dumps(cfg['body']),
            headers=self.myself.headers,
        )
        res = conn.getresponse()
        self.assertEqual(res.status, HTTPStatus.OK)


if __name__ == '__main__':
    unittest.main()

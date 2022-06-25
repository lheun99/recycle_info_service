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
            headers=imposter.headers
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
            headers=imposter.headers
        )
        res = conn.getresponse()
        self.assertEqual(res.status, HTTPStatus.OK)

        # 비밀번호 변경에 성공하면 로그인을 해봅니다.
        # 로그인에 실패하면 AssertionError가 전파됩니다.
        self.myself.password = password
        self.myself.login()

    def test_illegal_modification(self):
        conn = self.connection
        cfg = self.config['illegal_modification']


if __name__ == '__main__':
    unittest.main()

#! /usr/bin/env python3

import json
import unittest

from http import HTTPStatus
from ututils import ConfigMixin, Identity


class TestUsers(unittest.TestCase, ConfigMixin):
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
        conn = self.myself.connection
        cfg = self.config['update_password']

    def test_illegal_modification(self):
        conn = self.connection
        cfg = self.config['illegal_modification']


if __name__ == '__main__':
    unittest.main()

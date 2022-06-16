#! /usr/bin/env python3

from typing import (
    Optional,
    Tuple
)


class Box(object):
    '''객체 탐지 시 바운딩 박스 한개입니다. 좌표를 분율로 저장합니다.'''

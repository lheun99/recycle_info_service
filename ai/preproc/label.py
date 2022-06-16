#! /usr/bin/env python3

from typing import (
    NamedTuple,
    NewType,
    Optional,
    Tuple
)


Number = NewType('Number', [int | float])


class Coord(NamedTuple):
    x: Number
    y: Number


class Rect(NamedTuple):
    min: Coord
    max: Coord

    def tuple(self):
        '''``pillow`` 형식 박스 튜플로 변환합니다.'''
        return (*self.min, *self.max)


class Box(object):
    '''객체 탐지 시 바운딩 박스 한개입니다. 좌표를 분율로 저장합니다.'''
    classid: int
    center: Coord

    def __init__(self) -> None:
        pass

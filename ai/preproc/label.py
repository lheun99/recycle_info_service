#! /usr/bin/env python3

from typing import (
    NamedTuple,
    NewType,
    Optional,
    Tuple,
    Union,
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


class Resolution(NamedTuple):
    width: Number
    height: Number

    @property.getter
    def w(self):
        return self.width

    @property.getter
    def h(self):
        return self.height


class Box(object):
    '''객체 탐지 시 바운딩 박스 한개입니다. 좌표를 분율로 저장합니다.'''
    classid: int
    center: Coord
    res: Resolution
    rect: Rect

    def __init__(
        self, classid: int, center: Coord, res: Resolution, rect: Rect
    ) -> None:
        self.classid = classid
        self.center = center
        self.res = res
        self.rect = rect

    @classmethod
    def from_centerbox(
        cls, center: Tuple[Number, Number], res: Tuple[Number, Number]
    ):
        pass

    @classmethod
    def from_rect(cls, rect: Tuple[Number, Number, Number, Number]):
        raise NotImplementedError('Not needed yet, so not implemented yet')

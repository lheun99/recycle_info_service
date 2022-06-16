#! /usr/bin/env python3

from typing import (
    NamedTuple,
    NewType,
    Optional,
    Tuple,
    Union,
)


# Number = NewType('Number', [int | float])


class Coord(NamedTuple):
    x: float
    y: float


class Rect(NamedTuple):
    min: Coord
    max: Coord

    def tuple(self):
        '''``pillow`` 형식 박스 튜플로 변환합니다.'''
        return (*self.min, *self.max)


class ImageSize(NamedTuple):
    width: float
    height: float

    @property
    def w(self):
        return self.width

    @property
    def h(self):
        return self.height


class Box(object):
    '''객체 탐지 시 바운딩 박스 한개입니다. 좌표는 모두 분율입니다.'''
    classid: int
    center: Coord
    size: ImageSize
    rect: Rect

    def __init__(
        self, classid: int, center: Coord, size: ImageSize, rect: Rect
    ) -> None:
        self.classid = classid
        self.center = center
        self.size = size
        self.rect = rect

    @classmethod
    def from_centerbox(
        cls, classid: int, center: Tuple[float, float], size: Tuple[float, float]
    ):
        center_ = Coord(*center)
        size_ = ImageSize(*size)

        halfw = size_.width / 2.0
        halfh = size_.height / 2.0
        xmin = center_.x - halfw
        xmax = center_.x + halfw
        ymin = center_.y - halfh
        ymax = center_.y + halfh
        rect_ = Rect(Coord(xmin, ymin), Coord(xmax, ymax))

        box = cls(classid, center_, size_, rect_)
        return box

    @classmethod
    def from_rect(cls, rect: Tuple[float, float, float, float]):
        raise NotImplementedError('Not needed yet, so not implemented yet')

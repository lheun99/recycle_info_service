#! /usr/bin/env python3

import argparse
import json
from os import path
import os

from concurrent import futures
# import threading

from typing import Any, Callable, Iterable, Mapping


class Present(object):
    '''Future 타입을 흉내내는 더미입니다.'''

    def __init__(self, data) -> None:
        self._data = data

    def result(self) -> Any:
        return self._data


class SerialExecutor(object):
    '''Executor 타입을 흉내내는 직렬 코드용 더미입니다.'''

    def __init__(self, max_workers: int | None = None) -> None:
        self._max_workers = 0

    def submit(self, fn: Callable, /, *args, **kwargs) -> Present:
        return Present(fn(*args, **kwargs))

    def map(self, func: Callable, *iterables: Iterable) -> map:
        '''``map`` 객체를 반환합니다.

        ``iterables``의 소모 방식이 기존 ``Executor.map`` 메서드와 다릅니다.
        '''
        return map(func, *iterables)


def whtuple(whstr: str) -> tuple[int, int]:
    '''``WxH`` 형식 문자열을 튜플로 변환해 반환합니다.'''
    return tuple(map(int, whstr.split('x')))


def parse_json(
    pathname: str, dim: tuple[int, int], label_output_type: str
) -> dict[str, int | str]:
    '''json annotation 파일을 읽어 워크로드를 생성합니다.'''
    workload = {'image': '', 'dim': (), 'boxes': []}
    label = json.load(pathname)
    res_old = tuple(map(int, label['RESOLUTION'].split('*')))

    for box_n in range(label['BoundingCount']):
        box_old = label['Bounding'][box_n]

        # .. todo:: 분류 방식을 바꿀 경우 여기를 고칩니다.
        class_id = box_old['CLASS']

        if label_output_type == 'yolov5':
            ...
        elif label_output_type == 'yolov3':
            workload['boxes'][box_n] = {
                'class': class_id,
                'xmin': round(box_old['x1'] / res_old[0]),
                'ymin': round(box_old['y1'] / res_old[1]),
                'xmax': round(box_old['x2'] / res_old[0]),
                'ymax': round(box_old['y2'] / res_old[1]),
            }
        elif label_output_type == 'pickle':
            ...


def _getargs() -> argparse.Namespace:
    '''커맨드라인용 인자를 분석합니다.'''
    parser = argparse.ArgumentParser(
        description=(
            '저장 공간 절약을 위해 생활쓰레기 이미지 데이터 사이즈를 줄입니다.'
        ),
    )
    parser.add_argument(
        '--image-src',
        '-ims',
        help=(
            '이미지 파일이 있는 최상위 경로입니다.'
            ' 이 경로로부터 상대 경로를 산출합니다.'
        ),
    )
    parser.add_argument(
        '--image-dst',
        '-imd',
        help='출력 이미지를 저장할 경로입니다. 디렉터리 구조를 보존합니다.',
    )
    parser.add_argument(
        '--image-output-dimension',
        '-dim',
        help=(
            '이미지 크기를 조정할 목표 값을 WxH 형식으로 지정합니다.'
            '기본값은 640x640입니다.'
        ),
        type=whtuple,
        default=(640, 640),
    )

    parser.add_argument(
        '--label-src',
        '-lbs',
        help=(
            'aihub 애노테이션 json 파일들이 있는 최상위 경로입니다.'
            ' json 포맷만 알아서 골라냅니다.'
            ' 이미지를 처리할 때는 디렉터리 구조가 이미지와 같아야 합니다.'
        ),
    )
    parser.add_argument(
        '--label-dst',
        '-lbd',
        help=(
            '출력 내용을 저장할 경로입니다.'
            ' 애노테이션 파일은 append 모드로 적습니다.'
            ' 디렉터리 구조는 보존합니다.'
        ),
    )
    parser.add_argument(
        '--label-output-type',
        '-lbf',
        help='애노테이션 출력 포맷입니다. pickle, yolov3, yolov5 중 하나입니다.',
        choices=['pickle', 'yolov3', 'yolov5'],
    )

    parser.add_argument(
        '--parallelize',
        '-p',
        help=(
            '병렬화 방식입니다.'
            " 'mt', 'mp' 중의 하나입니다."
            ' 스레드/프로세스의 수는 자동으로 결정합니다.'
            ' 지정하지 않으면 병렬화를 시도하지 않습니다.'
        ),
        choices=['mt', 'mp'],
        default=None,
    )

    args = parser.parse_args()
    # return args, args.__dict__.copy()
    for arg in ['image_src', 'image_dst', 'label_src', 'label_dst']:
        pathname = args.__dict__[arg]
        if pathname is not None:
            args.__dict__[arg] = path.abspath(
                path.normpath(path.normcase(pathname))
            )
    if args.parallelize in ('mt', 'multithreading'):
        args.Executor = futures.ThreadPoolExecutor
    elif args.parallelize in ('mp', 'multiprocessing'):
        args.Executor = futures.ProcessPoolExecutor
    else:
        args.Executor = SerialExecutor

    return args


def cli():
    args = _getargs()
    executor = args.Executor()
    if not isinstance(executor, SerialExecutor):
        print(f'MAIN: 작업자 수는 최대 {executor._max_workers}개입니다.')

    if args.label_src is not None and args.label_dst is not None:
        for stem, branches, leaves in os.walk(args.label_src):
            for leaf in leaves:
                if path.splitext(leaf)[1].lower() == 'json':
                    pass


if __name__ == '__main__':
    cli()

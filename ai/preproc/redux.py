#! /usr/bin/env python3

import argparse
from concurrent.futures import ThreadPoolExecutor
# import threading
from typing import Any, Callable, List, Iterable, Mapping


def cli():
    parser = argparse.ArgumentParser(
        description=(
            '저장 공간 절약을 위해 생활쓰레기 이미지 데이터 사이즈를 줄입니다.'
        ),
    )
    parser.add_argument(
        'image_top',
        required=True,
        help=(
            '이미지 파일이 있는 최상위 경로입니다.'
            ' 이 경로로부터 상대 경로를 산출합니다.'
        ),
    )
    parser.add_argument(
        'json_top',
        required=True,
        help=(
            '애노테이션 json 파일들이 있는 최상위 경로입니다.'
            ' json 포맷만 알아서 골라냅니다.'
            ' 디렉터리 구조가 이미지와 같아야 합니다.'
        ),
    )
    parser.add_argument(
        'dest',
        required=True,
        help=(
            '출력 내용을 저장할 경로입니다.'
            ' 애노테이션 파일은 append 모드로 적습니다.'
            ' 이미지 파일 상대 경로 등 디렉터리 구조는 보존합니다.'
        ),
    )

    parser.add_argument(
        '--format',
        '-f',
        help=(
            '애노테이션 포맷입니다.'
            ' 기본값은 "{image_path}, {xmin}, {ymin}, {xmax}, {ymax}, {classid}"'
            '입니다.'
        ),
        default='{image_path},{xmin},{ymin},{xmax},{ymax},{classid}',
    )
    # ..todo:: 리사이즈 방식 변경하기
    parser.add_argument(
        '--w-max',
        '-w',
        help='출력 이미지의 최대 가로 픽셀 수입니다. 기본값은 960입니다.',
        type=int,
        default=960,
    )
    parser.add_argument(
        '--h-max',
        '-h',
        help='출력 이미지의 최대 세로 픽셀 수입니다. 기본값은 412입니다.',
        type=int,
        default=412,
    )
    parser.add_argument(
        '--threads',
        '-nt',
        help='작업 스레드의 수입니다. 기본값은 4입니다.',
        type=int,
        default=4,
    )


if __name__ == '__main__':
    cli()

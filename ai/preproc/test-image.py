#! /usr/bin/env python3

import argparse
from os import path
import os

from PIL import Image
from tqdm import tqdm


def cli():
    parser = argparse.ArgumentParser(
        description='이미지가 제대로 된 파일인지 검사합니다.',
    )
    parser.add_argument(
        'src',
        help='원본 이미지가 들어있는 최상위 디렉터리 경로입니다.',
    )

    args = parser.parse_args()


if __name__ == '__main__':
    cli()

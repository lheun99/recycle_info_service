#! /usr/bin/env python3

import argparse
from concurrent.futures import ProcessPoolExecutor
from multiprocessing import cpu_count
from os import path
import os
from typing import Tuple

from PIL import Image
from tqdm import tqdm


def valid_image(pathname: str) -> Tuple[bool, str]:
    '''이미지가 제대로 된 파일인지 검사하고 정상이면 참, 아니면 거짓을 반환합니다.'''
    try:
        with Image.open(pathname) as image:
            image.verify()
    except Exception:
        return (False, pathname)
    else:
        return (True, pathname)


def cli():
    parser = argparse.ArgumentParser(
        description='이미지가 제대로 된 파일인지 검사합니다.',
    )
    parser.add_argument(
        'src',
        help='원본 이미지가 들어있는 최상위 디렉터리 경로입니다.',
    )
    parser.add_argument(
        '--multiprocessing',
        '-mp',
        help='프로세스 여러 개로 작업합니다.',
        action='store_true',
    )

    args = parser.parse_args()

    tasks = [
        path.join(stem, leaf)
        for stem, branches, leaves in os.walk(args.src)
        for leaf in leaves
    ]

    if args.multiprocessing:
        executor = ProcessPoolExecutor()
        with tqdm(
            total=len(tasks),
            desc=f'Verifying images ({executor._max_workers} workers)',
        ) as pbar:
            for valid, pathname in executor.map(
                valid_image,
                tasks,
                chunksize=max(1, round(len(tasks) / 100 / cpu_count())),
            ):
                if not valid:
                    print(path.abspath(pathname))
                pbar.update(1)
        executor.shutdown()
    else:
        for task in tqdm(tasks, desc='Verifying images'):
            if not valid_image(task)[0]:
                print(path.abspath(task))


if __name__ == '__main__':
    cli()

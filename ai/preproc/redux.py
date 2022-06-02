#! /usr/bin/env python3

import argparse


def cli():
    parser = argparse.ArgumentParser(
        description='생활쓰레기 이미지 데이터 사이즈를 1/4 이하로 줄입니다.'
    )
    parser.add_argument(
        'image_top',
        required=True,
        help=(
            '이미지 파일이 있는 최상위 경로입니다.'
            ' 이 경로로부터 상대 경로를 산출합니다.'
        )
    )
    parser.add_argument(
        'json_top',
        required=True,
        help=(
            '애노테이션 json 파일들이 있는 경로입니다.'
            ' json 포맷만 알아서 골라냅니다.'
        )
    )
    parser.add_argument(
        'dest',
        required=True,
        help='출력 내용을 적을 텍스트 파일입니다. 기본 모드는 w입니다.'
    )

    parser.add_argument(
        '--append', '-a',
        action='store_true',
        help='출력 파일에 w 대신 a 모드로 씁니다.'
    )


if __name__ == '__main__':
    cli()

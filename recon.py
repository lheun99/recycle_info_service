#! /usr/bin/env python3

'''팀 프로젝트 4차 배포용 vm의 주소마다 요청을 보내서 팀이 배포를 하고 있는지 확인합니다.
- 응답 코드 200은 배포를 하고 있다는 뜻입니다.
- 응답 코드 404는 배포는 시도했지만 아직 설정이 안잡혔다는 뜻입니다.
- 배포를 시도하지 않은 팀은 표시되지 않습니다.

.. author:: 윤성준
'''

import argparse
import asyncio
from urllib import request, error


async def get(url):
    try:
        with request.urlopen(url) as res:
            return res.status if hasattr(res, 'status') else res.code
    except error.URLError:
        return None


async def peek(url, team_no):
    return (team_no, url, await get(url))


async def cli():
    targets = list(
        f'http://kdt-ai4-team{n:02}.elicecoding.com' for n in range(1, 21)
    )
    jobs = map(peek, targets, range(1, 21))
    print('응답 기다리는 중...')
    for coro in asyncio.as_completed(jobs):
        team_no, url, status = await coro
        if status is not None:
            print(f'팀 {team_no:02}\t{url}\t{status}')
    # for n, url, status in zip(range(1, 21), targets, res):


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='''\
팀 프로젝트 4차 배포용 vm의 주소마다 get을 보내서 팀이 배포를 하고 있는지 확인합니다.
- 응답 코드 200은 배포를 하고 있다는 뜻입니다.
- 응답 코드 404는 배포는 시도했지만 아직 설정이 안잡혔다는 뜻입니다.
- 배포를 시도하지 않은 팀은 표시되지 않습니다.\
        ''',
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.parse_args()
    asyncio.run(cli())

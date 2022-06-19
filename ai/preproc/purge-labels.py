#! /usr/bin/env python3

import argparse
from pathlib import Path
from typing import Iterator, Tuple


def purge(target: Path, reference: Path) -> Iterator[Tuple[Path, Exception]]:
    '''Remove files in ``target`` that aren't found in ``reference``.

    Return a generator yielding failures for whatever reason.
    '''
    dirs_to_purge = []
    for label in target.rglob('*.txt'):
        image = reference / label.relative_to(target).with_suffix('.jpg')
        if not image.exists():
            try:
                label.unlink()
            except OSError as why:
                yield (label, why)
            else:
                parent = label.parent
                if len([p for p in parent.iterdir()]) == 0:
                    # If its parent dir is empty, tidy it.
                    dirs_to_purge.append(parent)
                        
    for parent in dirs_to_purge:
        try:
            parent.rmdir()
        except OSError as why:
            yield (parent, why)


def parse_args():
    parser = argparse.ArgumentParser(
        description='Remove unnecessary labels.',
    )
    parser.add_argument(
        'labels',
        help='Path to labels potentially to be purged.',
        type=Path,
    )
    parser.add_argument(
        'images',
        help='Path to images for reference.',
        type=Path,
    )
    return parser.parse_args()


def cli():
    args = parse_args()
    for failure in purge(args.labels, args.images):
        path, why = failure
        if path.is_file():
            print(f'FAIL unlink "{str(path)}" ({why})')
        else:
            print(f'FAIL rmdir "{str(path)}" ({why})')


if __name__ == '__main__':
    cli()

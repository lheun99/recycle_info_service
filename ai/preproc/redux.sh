#! /usr/bin/env sh
TEST=1
python3=../../.venv/Scripts/python


if [ $TEST -eq 0 ]; then
    exit 0
fi


# =====
# TESTS
# =====

TESTDIR=/d/movomo/Downloads/test

# Test process labels to pickle
# $python3 ./redux.py \
#     --label-src=$TESTDIR/labels \
#     --label-dst=$TESTDIR/pickle/test.pickle \
#     --label-output-type=pickle

# Test process labels to yolov3
# $python3 ./redux.py \
#     --image-output-dimension=640x640 \
#     --label-src=$TESTDIR/labels \
#     --label-dst=$TESTDIR/yolov3/test.text \
#     --label-output-type=yolov3

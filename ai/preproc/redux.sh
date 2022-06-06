#! /usr/bin/env sh

python3=../../.venv/Scripts/python

# TEST VARS
TESTDIR=/d/movomo/Downloads/test

# Test process labels to pickle
$python3 ./redux.py \
    --label-src=$TESTDIR/labels \
    --label-dst=$TESTDIR/pickle/test.pickle \
    --label-output-type=pickle

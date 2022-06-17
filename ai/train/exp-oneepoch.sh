#! /usr/bin/env sh

# epoch 하나에 걸리는 시간을 측정합니다.

REPO="$HOME/project-cyberdyne"
YOLOREPO="$HOME/yolov5"
DST="$HOME/train"

python "$YOLOREPO/train.py" \
    --weights '' \
    --cfg "$YOLOREPO/models/yolov5m.yaml" \
    --data "$REPO/ai/train/data-train.yaml" \
    --epochs 3 \
    --batch-size -1 \
    --project "$DST/exp.oneepoch" \
    --cache

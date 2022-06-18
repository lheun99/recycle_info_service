#! /usr/bin/env sh

REPO="$HOME/project-cyberdyne"
YOLOREPO="$HOME/yolov5"
DST="$HOME/evolve"


# --img-size 320, 4에포크 시간 측정
python "$YOLOREPO/train.py" \
    --weights '' \
    --cfg "$YOLOREPO/models/yolov5s.yaml" \
    --data "$REPO/ai/train/data-exp.yaml" \
    --img-size 320 \
    --batch-size -1 \
    --project "$DST/evolve-320" \
    --name 'evolve.0' \
    --optimizer 'AdamW' \
    --image-weights \
    --noval \
    --epochs 8 \
    --evolve 10

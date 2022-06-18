#! /usr/bin/env sh

# epoch 하나에 걸리는 시간을 측정합니다. (yolov5n)
# 이미지 사이즈를 줄여봅니다.

REPO="$HOME/project-cyberdyne"
YOLOREPO="$HOME/yolov5"
DST="$HOME/train"

# --image-size 320, 4에포크 시간 측정
python "$YOLOREPO/train.py" \
    --weights '' \
    --cfg "$YOLOREPO/models/yolov5n.yaml" \
    --data "$REPO/ai/train/data-exp.yaml" \
    --image-size 320 \
    --epochs 4 \
    --batch-size -1 \
    --project "$DST/exp.time" \
    --name 'imgsz=320,e=4'

# --image-size 640, 1에포크로 정확도 비교
# python "$YOLOREPO/train.py" \
#     --weights '' \
#     --cfg "$YOLOREPO/models/yolov5n.yaml" \
#     --data "$REPO/ai/train/data-exp.yaml" \
#     --image-size 640 \
#     --epochs 1 \
#     --batch-size -1 \
#     --project "$DST/exp.time"
#     --name 'imgsz=640,e=1'


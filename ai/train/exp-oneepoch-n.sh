#! /usr/bin/env sh

# epoch 하나에 걸리는 시간을 측정합니다. (yolov5n)
# yolov5m 모델은 epoch 당 5시간이 걸렸기 때문에 시간을 줄이기 위해
# 모델 크기를 줄여봅니다.
# 추가로, --cache (RAM) 옵션으로 실패했기 때문에 DISK 옵션을 주고 해봅니다.

REPO="$HOME/project-cyberdyne"
YOLOREPO="$HOME/yolov5"
DST="$HOME/train"

python "$YOLOREPO/train.py" \
    --weights '' \
    --cfg "$YOLOREPO/models/yolov5n.yaml" \
    --data "$REPO/ai/train/data-train.yaml" \
    --epochs 3 \
    --batch-size -1 \
    --project "$DST/exp.oneepoch.n"

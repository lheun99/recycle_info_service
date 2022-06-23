#! /usr/bin/env sh

REPO="$HOME/project-cyberdyne"
YOLOREPO="$HOME/yolov5"
DST="$HOME/train"


# 미리 COCO 데이터셋으로 학습된 데이터로 훈련하면 시간대비 성능상 이득이 있는지
# 보기 위한 실험입니다.
python "$YOLOREPO/train.py" \
    --weights "yolov5s.pt" \
    --data "$REPO/ai/train/data-train.yaml" \
    --hyp "$REPO/ai/train/hyp.init.yaml" \
    --img-size 320 \
    --batch-size -1 \
    --project "$DST/main" \
    --name 'exp.pretrained.all' \
    --optimizer 'AdamW' \
    --image-weights \
    --patience 4 \
    --epochs 90 \
    --workers 3 \
    --save-period 1

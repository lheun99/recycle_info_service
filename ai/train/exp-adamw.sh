#! /usr/bin/env sh

REPO="$HOME/project-cyberdyne"
YOLOREPO="$HOME/yolov5"
DST="$HOME/train"


# epoch 0:8 DONE
#     --cfg "$YOLOREPO/models/yolov5s.yaml" \
# epoch 8:14 DONE
# epoch 14: ...
python "$YOLOREPO/train.py" \
    --weights '' \
    --cfg "$YOLOREPO/models/yolov5s.yaml" \
    --data "$REPO/ai/train/data-train.yaml" \
    --hyp "$REPO/ai/train/hyp.adamw-.yaml" \
    --img-size 320 \
    --batch-size -1 \
    --project "$DST/main" \
    --name 'exp.adam2-' \
    --optimizer 'AdamW' \
    --image-weights \
    --patience 4 \
    --epochs 4 \
    --workers 3

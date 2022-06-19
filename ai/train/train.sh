#! /usr/bin/env sh

REPO="$HOME/project-cyberdyne"
YOLOREPO="$HOME/yolov5"
DST="$HOME/train"


# epoch 0:8 DONE
#     --cfg "$YOLOREPO/models/yolov5s.yaml" \
# epoch 8:14 ...
python "$YOLOREPO/train.py" \
    --weights "$DST/main/main.0/weights/last.pt" \
    --data "$REPO/ai/train/data-train.yaml" \
    --hyp "$REPO/ai/train/hyp.init.yaml" \
    --img-size 320 \
    --batch-size -1 \
    --project "$DST/main" \
    --name 'main.8' \
    --optimizer 'AdamW' \
    --image-weights \
    --patience 4 \
    --epochs 6 \
    --workers 3

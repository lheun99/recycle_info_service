#! /usr/bin/env sh

REPO="$HOME/project-cyberdyne"
YOLOREPO="$HOME/yolov5"
DST="$HOME/train"


# epoch 0:8 DONE
#     --cfg "$YOLOREPO/models/yolov5s.yaml" \
# epoch 8:14 DONE
# epoch 14: ...
python "$YOLOREPO/train.py" \
    --weights "$DST/main/main.8/weights/last.pt" \
    --data "$REPO/ai/train/data-train.yaml" \
    --hyp "$REPO/ai/train/hyp.init.yaml" \
    --img-size 320 \
    --batch-size -1 \
    --project "$DST/main" \
    --name 'main.14' \
    --optimizer 'AdamW' \
    --image-weights \
    --patience 4 \
    --epochs 300 \
    --workers 3 \
    --save-period 1

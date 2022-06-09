import React from "react";
import ReportWasteStyle from "../../styles/ReportWaste.module.css";

const ReportWaste = () => {
  return (
    <div>
      <div className={ReportWasteStyle.mapform_wrapper}>
        <div style={{ fontSize: "var(--font-title)", fontWeight: "bold"}}>우리동네 대형폐기물 신고하기</div>
        <p className={ReportWasteStyle.mapform_text}>
          대형폐기물은 구청/주민센터에서 납부 필증을 구매 후 버려야합니다.
          우리동네 어디에서 신고할 수 있는지 알아볼까요?
        </p>
        <div className={ReportWasteStyle.mapform}>
          <div className={ReportWasteStyle.mapform_title}>우리동네 사이트 찾기</div>
          <div>도/구/시</div>
          <div className={ReportWasteStyle.map}>map</div>
        </div>
        <div style={{ fontSize: "var(--font-text)"}}>Tip! 대형폐기물은 무료로  수거가 가능하기도 해요!</div>
      </div>
    </div>
  );
};

export default ReportWaste;

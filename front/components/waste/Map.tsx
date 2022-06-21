import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  mapData: String[] | null;
}

function Map({ mapData }: MapProps) {
    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {

                // 주소로 좌표를 검색
                const geocoder = new window.kakao.maps.services.Geocoder();
                const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
                    mapOption = { 
                        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                        level: 3        // 지도의 확대 레벨
                    };
                const map = new window.kakao.maps.Map(mapContainer, mapOption)

                // function makeOverListener(map, marker, infowindow) {
                //     return function() {
                //         infowindow.open(map, marker);
                //     };
                // }
                // function makeOutListener(infowindow) {
                //     return function() {
                //         infowindow.close();
                //     };
                // }

                console.log("mapData: ", mapData)
                if (mapData !== null) {
                    geocoder.addressSearch(mapData[0]["address"], function (result, status) {
                        if (status === window.kakao.maps.services.Status.OK) {
                            const coords  = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                            const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
                                mapOption = { 
                                    center: coords, // 지도의 중심좌표
                                    level: 3        // 지도의 확대 레벨
                                };
                            ;
                            const map = new window.kakao.maps.Map(mapContainer, mapOption)
                            
                            // 결과값을 마커로 표시
                            const marker = new window.kakao.maps.Marker({
                                map: map,
                                position: coords,
                            });
                            // 지도의 중심을 결과값으로 받은 위치로 이동
                            marker.setMap(map);

                            // const infowindow = new window.kakao.maps.InfoWindow({
                            //     content: `<div style={{padding: "5px"}}>${mapData[0]["address"]}</div>` // 인포윈도우에 표시할 내용
                            // });
                            // window.kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow))
                            // window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));;
                        }
                    })
                }
                
                

                // for (var i = 0; i < mapData.length; i++) {
                //     console.log(mapData[i]["address"]);

                // }

            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, [mapData]);
    
    return (
        <div id="map" />
    );
}

export default Map;
/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchValueState } from '../atoms';

import { Map, MapMarker, Polyline, MarkerClusterer } from 'react-kakao-maps-sdk';
import Sidebar from './Sidebar';

const { kakao } = window;

export default function KakaoMap() {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const markerOption = {
    src: 'https://img.icons8.com/?size=512&id=Fzu67Eub3E1Q&format=png', // 마커이미지의 주소입니다
    size: {
      width: 60,
      height: 60,
    }, // 마커이미지의 크기입니다
    options: {
      offset: {
        x: 29,
        y: 51,
      }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    },
  };
  const pinOption = {
    src: 'https://img.icons8.com/?size=200&id=LbgXQ1iZg8yx&format=png', // 마커이미지의 주소입니다
    size: {
      width: 60,
      height: 60,
    }, // 마커이미지의 크기입니다
    options: {
      offset: {
        x: 29,
        y: 51,
      }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    },
  };
  const [position, setPosition] = useState({
    lat: 37.26568218296588,
    lng: 127.00004960484385,
  });
  const [clickLine, setClickLine] = useState();
  //단일 패치
  const [path, setPath] = useState({});
  //줄이 그이는 것은 패치
  // const [paths, setPaths] = useState([
  //   {
  //     address: '경기 수원시 팔달구 우만동 571-2',
  //     content: '난',
  //     lat: '37.2793736200626',
  //     lng: '127.04348877374',
  //   },
  //   {
  //     address: '경기 수원시 팔달구 우만동 573-9',
  //     content: '파스타앤그릴',
  //     lat: '37.2784797705087',
  //     lng: '127.043537872727',
  //   },
  //   {
  //     address: '경기 수원시 영통구 원천동 18-1',
  //     content: '상그릴라 레스토랑',
  //     lat: '37.27870393706868',
  //     lng: '127.0440578147935',
  //   },
  //   {
  //     address: '경기 수원시 팔달구 우만동 63-6',
  //     content: '우만동족발집 아주대점',
  //     lat: '37.278234804634955',
  //     lng: '127.04321862935097',
  //   },
  //   {
  //     address: '경기 수원시 영통구 원천동 29-58',
  //     content: '권육회',
  //     lat: '37.27779448219702',
  //     lng: '127.0448713854625',
  //   },
  // ]);
  const [paths, setPaths] = useState([]);
  const [address, setAddress] = useState('');

  const [searchMarkers, setSearchMarkers] = useState([]);
  const [map, setMap] = useState();
  const [level, setLevel] = useState(3);

  const getAddress = (lat, lng) => {
    const geocoder = new kakao.maps.services.Geocoder(); // 좌표 -> 주소로 변환해주는 객체
    const coord = new kakao.maps.LatLng(lat, lng); // 주소로 변환할 좌표 입력
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setAddress(result[0].address.address_name);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  const handleClick = (_map, mouseEvent) => {
    // getAddress(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());
    const copyPaths = [...paths];
    // const copyPath = {
    //   lat: mouseEvent.latLng.getLat(),
    //   lng: mouseEvent.latLng.getLng(),
    //   address: address,
    // };
    copyPaths.push({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
      // address: address,
    });
    setPaths(copyPaths);
  };

  const isSetPosition = (_t, mouseEvent) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };
  const isSetPath = () => {
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(position.lat, position.lng);
    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
        // console.log(
        //   '그런 너를 마주칠까 ' + result[0].address.address_name + '을 못가'
        // );
        setPath(result);
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  const addPath = (position, address) => {
    const copyPaths = [...paths];
    copyPaths.push({
      address: address,
      // content: marker.content,
      lat: position.lat,
      lng: position.lng,
    });
    setPaths(copyPaths);
  };

  const updatePath = (_t, mouseEvent) =>
    setPath({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });

  const isSearchSubmit = searchValue => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchValue, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            data: data[i],
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            address: data[i].address_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
        }
        setSearchMarkers(markers);
        const copyPosition = { lat: data[0].y, lng: data[0].x };
        setPosition(copyPosition);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
        map.setLevel(3);
      }
    });
  };

  useEffect(() => {
    isSearchSubmit(searchValue);
  }, [searchValue]);
  useEffect(() => {
    console.log('단일 마커의 주소 정보 : ', path);
  }, [path]);
  useEffect(() => {
    console.log('단일 마커의 위도 , 경도 : ', position);
    isSetPath();
  }, [position]);
  useEffect(() => {
    console.log('마커 모음 : ', paths);
  }, [paths]);
  useEffect(() => {
    console.log('검색결과 : ', searchMarkers);
  }, [searchMarkers]);

  return (
    <Map
      center={position} // 지도의 중심 좌표
      style={{ width: '100vw', height: '100vh' }} // 지도 크기
      level={level} // 지도 확대 레벨
      onClick={isSetPosition}
      onCreate={setMap}
      isPanto={true}
    >
      <Polyline
        path={paths}
        strokeWeight={2} // 선의 두께입니다
        strokeColor="#4D6A6D" // 선의 색깔입니다
        strokeOpacity={1} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
        strokeStyle="solid" // 선의 스타일입니다
        onCreate={setClickLine}
      />
      {paths.map((path, i) => {
        return (
          <MapMarker
            key={i}
            draggable={true}
            // onDragEnd={updatePath}
            position={path}
            image={pinOption}
          />
        );
      })}

      <MapMarker
        draggable={true}
        position={position}
        onClick={() => addPath(position, path[0].address.address_name)}
        image={pinOption}
      />

      {searchMarkers.map((marker, i) => (
        <MapMarker
          key={i}
          draggable={true}
          position={marker.position}
          onDragEnd={updatePath}
          onClick={() => addPath(marker.position, marker.address)}
          image={markerOption}
        />
      ))}
    </Map>
  );
}

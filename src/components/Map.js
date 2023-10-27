/** @format */
import 'ol/ol.css'; //스타일
import { Map as OlMap, View } from 'ol'; //뷰 관리
import { fromLonLat, get as getProjection } from 'ol/proj'; //위경도
import { Tile as TileLayer } from 'ol/layer'; //지도타일
import { OSM } from 'ol/source'; //지도정보
import { defaults } from 'ol/control.js';

import { useState, useEffect } from 'react';

export default function Map() {
  const [mapObject, setMapObject] = useState({});
  useEffect(() => {
    const map = new OlMap({
      controls: defaults({
        attribution: false,
        zoom: false,
        rotate: false,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        projection: getProjection('EPSG:3857'),
        center: fromLonLat([126.752, 37.4713], getProjection('EPSG:3857')),
        zoom: 13,
      }),
    });
    setMapObject({ map });
    console.log(mapObject);
    return () => null;
  }, []);
  return <div id='map' value={mapObject} style={{ height: '100vh' }}></div>;
}

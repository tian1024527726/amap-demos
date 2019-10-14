// 这是自动生成的文件，可以修改。
/* eslint-disable */
import React, { Component } from 'react';
import inject from '@inject';
import styles from './style.module.scss';

let MapInstance = null;


@inject('MapCoverLayer')
class MapCoverLayer extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    /* 初始化渲染执行之后调用,仅执行一次 */
    const { mapCoverLayerAction: { getUserInfo } } = this.props;
    getUserInfo()
    console.log(this.props)

    this.importMap()
      .then(() => {
        var map = new AMap.Map('map-container', {
          resizeEnable: true,
          // zoom: 17
        });
        let position = {};
        // 所有矩形的经纬度数据
        const data = [
          {
            dataList: [{ lng: 116.398055, lat: 39.890733 }, { lng: 116.398455, lat: 39.890333 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398455, lat: 39.890733 }, { lng: 116.398855, lat: 39.890333 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398855, lat: 39.890733 }, { lng: 116.399255, lat: 39.890333 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.399255, lat: 39.890733 }, { lng: 116.399655, lat: 39.890333 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.399655, lat: 39.890733 }, { lng: 116.400055, lat: 39.890333 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.398055, lat: 39.890333 }, { lng: 116.398455, lat: 39.889933 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398455, lat: 39.890333 }, { lng: 116.398855, lat: 39.889933 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398855, lat: 39.890333 }, { lng: 116.399255, lat: 39.889933 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.399255, lat: 39.890333 }, { lng: 116.399655, lat: 39.889933 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.399655, lat: 39.890333 }, { lng: 116.400055, lat: 39.889933 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.398055, lat: 39.889933 }, { lng: 116.398455, lat: 39.889533 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398455, lat: 39.889933 }, { lng: 116.398855, lat: 39.889533 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398855, lat: 39.889933 }, { lng: 116.399255, lat: 39.889533 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.399255, lat: 39.889933 }, { lng: 116.399655, lat: 39.889533 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.399655, lat: 39.889933 }, { lng: 116.400055, lat: 39.889533 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.398055, lat: 39.889533 }, { lng: 116.398455, lat: 39.889133 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398455, lat: 39.889533 }, { lng: 116.398855, lat: 39.889133 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398855, lat: 39.889533 }, { lng: 116.399255, lat: 39.889133 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.399255, lat: 39.889533 }, { lng: 116.399655, lat: 39.889133 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.399655, lat: 39.889533 }, { lng: 116.400055, lat: 39.889133 }],
            isPurchase: true
          },
          {
            dataList: [{ lng: 116.398055, lat: 39.889133 }, { lng: 116.398455, lat: 39.888733 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398455, lat: 39.889133 }, { lng: 116.398855, lat: 39.888733 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.398855, lat: 39.889133 }, { lng: 116.399255, lat: 39.888733 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.399255, lat: 39.889133 }, { lng: 116.399655, lat: 39.888733 }],
            isPurchase: false
          },
          {
            dataList: [{ lng: 116.399655, lat: 39.889133 }, { lng: 116.400055, lat: 39.888733 }],
            isPurchase: false
          },
        ];
        // 多边形个点的经纬度
        const path = [
          new AMap.LngLat(116.398055, 39.890733),
          new AMap.LngLat(116.398855, 39.890733),
          new AMap.LngLat(116.398855, 39.889133),
          new AMap.LngLat(116.400055, 39.889133),
          new AMap.LngLat(116.400055, 39.888733),
          new AMap.LngLat(116.398055, 39.888733),
        ];
        // 矩形数组
        const rectangleArr = data.map(t => {
          const { isPurchase, dataList, show } = t;
          const southWest = new AMap.LngLat(dataList[0].lng, dataList[0].lat);
          const northEast = new AMap.LngLat(dataList[1].lng, dataList[1].lat);
          const bounds = new AMap.Bounds(southWest, northEast);
          if (!isPurchase && !show) return null
          const rectangle = new AMap.Rectangle({
            bounds: bounds,
            strokeColor: isPurchase ? '#19BE6B' : '#F56C6C',
            strokeWeight: 1,
            strokeOpacity: 0.5,
            strokeStyle: 'solid',
            fillColor: isPurchase ? '#19BE6B' : '#F56C6C',
            fillOpacity: 0.5,
            zIndex: isPurchase ? 51 : 50,
          })
          rectangle.setMap(map)
          return rectangle;
        }).filter(t => t)

        const polygon = new AMap.Polygon({
          path: path,
          fillColor: '#F56C6C', // 多边形填充颜色
          strokeStyle: 'solid',
          fillOpacity: 0.5,
          strokeWeight: 1, // 线条宽度，默认为 1
          strokeOpacity: 0.5,
          strokeColor: '#F56C6C', // 线条颜色
        });

        polygon.setMap(map);

        // 缩放地图到合适的视野级别
        map.setFitView([...rectangleArr, polygon])
        position = map.getCenter()
        const totalMuney = 1200;
        const curMuney = 222;
        var infoWindow = new AMap.InfoWindow({
          anchor: 'top-left',
          content: `<div style="font-size:14px;line-height: 20px">全部配送区域金额：${parseFloat(totalMuney.toFixed()).toLocaleString()}元</div><div style="font-size:14px;line-height: 20px">当前购买区域金额：${parseFloat(curMuney.toFixed()).toLocaleString()}元</div>`,
        });
        infoWindow.setAnchor('bottom-center')
        infoWindow.open(map, [116.399055, 39.890753]);

        // AMap.plugin('AMap.Geolocation', function () {
        //   var geolocation = new AMap.Geolocation({
        //     enableHighAccuracy: true,//是否使用高精度定位，默认:true
        //     timeout: 10000,          //超过10秒后停止定位，默认：5s
        //     buttonPosition: 'RB',    //定位按钮的停靠位置
        //     buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        //     zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
        //   });
        //   geolocation.getCurrentPosition(function (status, result) {
        //     if (status == 'complete') {
        //       position = result.position;
        //     } else {
        //       alert('error')
        //     }
        //   });
        // });

        map.on("complete", () => {
          this.setState({
            loading: false
          })
          document.querySelector('.btn-locate').addEventListener('click', function () {
            map.setCenter([position.lng, position.lat])
          })
          document.querySelector('.btn-zoom-in').addEventListener('click', function () {
            map.setZoom(map.getZoom() + 1)
          })
          document.querySelector('.btn-zoom-out').addEventListener('click', function () {
            map.setZoom(map.getZoom() - 1)
          })
        });
      })
      .catch(err => {
        alert(err);
      })

  }

  componentWillUnmount() {
    /* 组件从DOM中移除时调用 */
  }

  importMap = () => {
    return new Promise((resolve, reject) => {
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.timeout = 120000;
      script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=dabae8dcd3afd26242a60cd96f17f091&plugin=AMap.MarkerClusterer&plugin=AMap.RectangleEditor&plugin=AMap.Scale,AMap.OverView,AMap.ToolBar';
      const timeout = setTimeout(() => {
        reject('加载地图超时！！！！')
      }, 120000);
      script.onerror = script.onload = onScriptComplete;
      function onScriptComplete(e) {
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        MapInstance = true;
        resolve();
      };
      if (MapInstance) {
        script.onerror = script.onload = null;
        resolve();
        clearTimeout(timeout);
      } else {
        head.appendChild(script);
      }
    })
  }

  render() {
    const { mapCoverLayerStore } = this.props; // redux store
    const { loading } = this.state;
    return (
      <div className={styles.content}>
        <div className="map-wrapper" style={{ position: "relative" }}>
          <div id="map-container" style={{ width: 540, height: 540 }}></div>
          <div className="map-btns" style={{ display: !loading ? "block" : "none" }}>
            <div className="btn-locate"></div>
            <div className="btn-zoom-in"></div>
            <div className="btn-zoom-out"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default MapCoverLayer;

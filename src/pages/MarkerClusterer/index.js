// 这是自动生成的文件，可以修改。
/* eslint-disable */
import React, { Component } from 'react';
import inject from '@inject';
import styles from './style.module.scss';

let MapInstance = null;

@inject('MarkerClusterer')
class MarkerClusterer extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    /* 初始化渲染执行之后调用,仅执行一次 */
    const { markerClustererAction: { getUserInfo }, markerClustererStore } = this.props;
    getUserInfo()
      .then(() => {
        console.log(markerClustererStore)
      })

    this.importMap()
      .then(() => {
        let cluster;
        const markers = [];
        const position = {
          lng:  121.38223,
          lat:  31.23314,
        }

        const map = new AMap.Map("map-container", {
          resizeEnable: true,
          center: [105, 34],
          zoom: 4
        });

        const points = [{ "lnglat": ["113.864691", "22.942327"] }, { "lnglat": ["113.370643", "22.938827"] }, { "lnglat": ["112.985037", "23.15046"] }, { "lnglat": ["110.361899", "20.026695"] }, { "lnglat": ["121.434529", "31.215641"] }, { "lnglat": ["120.682502", "28.011099"] }, { "lnglat": ["126.687123", "45.787618"] }, { "lnglat": ["103.970724", "30.397931"] }, { "lnglat": ["117.212164", "31.831641"] }, { "lnglat": ["121.411101", "31.059407"] }, { "lnglat": ["104.137953", "30.784276"] }, { "lnglat": ["120.499683", "30.042305"] }, { "lnglat": ["108.94686", "34.362975"] }, { "lnglat": ["112.873295", "22.920901"] }, { "lnglat": ["113.373916", "23.086728"] }, { "lnglat": ["113.250159", "23.075847"] }, { "lnglat": ["116.675933", "39.986343"] }, { "lnglat": ["120.75997", "31.734934"] }, { "lnglat": ["118.314741", "32.26999"] }, { "lnglat": ["111.723311", "34.771838"] }, { "lnglat": ["119.537126", "26.200017"] }, { "lnglat": ["113.830123", "23.00734"] }, { "lnglat": ["119.273795", "26.060002"] }, { "lnglat": ["116.466752", "39.951042"] }, { "lnglat": ["114.20716", "22.777829"] }, { "lnglat": ["126.118338", "45.11481"] }, { "lnglat": ["116.366324", "39.781077"] }, { "lnglat": ["120.377998", "31.578216"] }, { "lnglat": ["116.611935", "23.66941"] }, { "lnglat": ["103.787344", "30.940037"] }, { "lnglat": ["112.911223", "23.164952"] }, { "lnglat": ["121.946335", "39.403784"] }, { "lnglat": ["120.172545", "36.009391"] }, { "lnglat": ["126.609854", "45.722514"] }, { "lnglat": ["120.531699", "32.402873"] }, { "lnglat": ["118.914313", "32.013572"] }, { "lnglat": ["126.597762", "45.739299"] }, { "lnglat": ["106.540999", "29.520217"] }, { "lnglat": ["114.033057", "22.733424"] }, { "lnglat": ["104.041129", "30.598338"] }, { "lnglat": ["119.917693", "32.484184"] }, { "lnglat": ["118.371124", "35.082682"] }, { "lnglat": ["120.926368", "31.320681"] }, { "lnglat": ["120.355238", "31.557524"] }, { "lnglat": ["101.775209", "36.614975"] }, { "lnglat": ["114.499404", "34.646022"] }, { "lnglat": ["118.087516", "24.474988"] }, { "lnglat": ["104.638952", "30.1253"] }, { "lnglat": ["116.492237", "39.991802"] }, { "lnglat": ["112.898903", "32.04371"] }, { "lnglat": ["114.104018", "22.626803"] }, { "lnglat": ["119.969664", "30.26186"] }, { "lnglat": ["119.530013", "39.935889"] }, { "lnglat": ["77.254607", "39.050215"] }, { "lnglat": ["117.085608", "36.652113"] }, { "lnglat": ["120.292808", "30.299244"] }, { "lnglat": ["114.397917", "23.545706"] }, { "lnglat": ["120.273933", "30.236666"] }, { "lnglat": ["121.622443", "31.152955"] }, { "lnglat": ["116.417093", "39.96918"] }, { "lnglat": ["113.799453", "22.724031"] }, { "lnglat": ["123.264175", "41.768478"] }, { "lnglat": ["120.626128", "30.822477"] }, { "lnglat": ["115.826361", "33.812392"] }, { "lnglat": ["106.561797", "26.579832"] }, { "lnglat": ["117.285766", "34.806079"] }, { "lnglat": ["111.035766", "21.535775"] }, { "lnglat": ["115.701728", "24.066784"] }, { "lnglat": ["104.061447", "30.67089"] }, { "lnglat": ["121.123465", "31.134162"] }, { "lnglat": ["104.039519", "30.719365"] }, { "lnglat": ["116.625662", "39.619879"] }, { "lnglat": ["108.20204", "28.004321"] }, { "lnglat": ["113.606513", "34.807402"] }, { "lnglat": ["120.213822", "30.112851"] }, { "lnglat": ["120.727637", "27.798264"] }, { "lnglat": ["116.452761", "39.951122"] }, { "lnglat": ["119.555363", "39.932751"] }, { "lnglat": ["120.227111", "30.347169"] }, { "lnglat": ["113.377157", "31.797137"] }, { "lnglat": ["113.334007", "23.107744"] }, { "lnglat": ["112.641848", "22.362319"] }, { "lnglat": ["102.672195", "24.974215"] }, { "lnglat": ["120.190691", "30.305693"] }, { "lnglat": ["117.023543", "36.679076"] }, { "lnglat": ["118.868849", "31.918515"] }, { "lnglat": ["121.473372", "31.235574"] }, { "lnglat": ["116.526635", "37.131774"] }, { "lnglat": ["113.294417", "23.159512"] }, { "lnglat": ["120.163756", "30.39902"] }, { "lnglat": ["121.640998", "38.908202"] }, { "lnglat": ["112.767577", "22.445482"] }, { "lnglat": ["117.287658", "31.873351"] }, { "lnglat": ["117.219603", "39.211753"] }, { "lnglat": ["113.859931", "22.971467"] }, { "lnglat": ["112.438353", "34.666416"] }, { "lnglat": ["120.415793", "36.059608"] }, { "lnglat": ["120.704291", "31.825364"] }, { "lnglat": ["118.143882", "24.700477"] }, { "lnglat": ["119.364493", "32.328944"] }, { "lnglat": ["121.294195", "31.888728"] }, { "lnglat": ["113.365022", "22.57829"] }, { "lnglat": ["120.054198", "30.664807"] }, { "lnglat": ["87.658551", "44.008315"] }, { "lnglat": ["112.541595", "26.763181"] }, { "lnglat": ["115.471106", "30.787118"] }, { "lnglat": ["125.265486", "43.869571"] }, { "lnglat": ["116.644049", "39.807311"] }, { "lnglat": ["112.702588", "22.00886"] }, { "lnglat": ["120.430282", "29.365092"] }, { "lnglat": ["114.04317", "22.562925"] }, { "lnglat": ["121.22947", "31.016796"] }, { "lnglat": ["116.834305", "39.825053"] }, { "lnglat": ["106.28279", "29.960069"] }, { "lnglat": ["116.456392", "40.016161"] }, { "lnglat": ["120.255668", "30.435952"] }, { "lnglat": ["113.518903", "22.22175"] }, { "lnglat": ["106.543339", "29.612362"] }, { "lnglat": ["120.554869", "36.38975"] }, { "lnglat": ["116.833489", "39.254627"] }, { "lnglat": ["112.955801", "23.197491"] }, { "lnglat": ["117.398154", "31.985269"] }, { "lnglat": ["107.125098", "26.37983"] }, { "lnglat": ["130.891768", "47.017684"] }, { "lnglat": ["117.212348", "31.82965"] }, { "lnglat": ["113.376242", "22.935718"] }, { "lnglat": ["117.404318", "39.290364"] }, { "lnglat": ["120.034828", "28.908292"] }]
        const handlePointClick = function (t) {
          console.log(t);
        }
        points.forEach((t, i) => {
          const div = document.createElement('div');
          div.style.backgroundColor = '#51b059';
          div.style.width = '24px';
          div.style.height = '24px';
          div.style.border = '2px solid #fff';
          div.style.borderRadius = '12px';
          div.onclick = function () { handlePointClick(t) };

          markers.push(new AMap.Marker({
            position: points[i]['lnglat'],
            content: div,
            offset: new AMap.Pixel(-15, -15)
          }))
        })

        const count = markers.length;
        const _renderClusterMarker = function (context) {
          const div = document.createElement('div');
          const bgColor = '#51b059';
          const fontColor = '#fff';
          const borderColor = '#fff';
          const size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
          div.style.backgroundColor = bgColor;
          div.style.width = div.style.height = size + 'px';
          div.style.border = 'solid 2px ' + borderColor;
          div.style.borderRadius = size / 2 + 'px';
          div.innerHTML = context.count;
          div.style.display = 'flex';
          div.style.justifyContent = 'center';
          div.style.alignItems = 'center';
          div.style.color = fontColor;
          div.style.fontSize = '16px';
          div.style.fontWeight = 600;
          context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
          context.marker.setContent(div)
        };

        addCluster();

        function addCluster() {
          if (cluster) {
            cluster.setMap(null);
          }
          cluster = new AMap.MarkerClusterer(map, markers, {
            gridSize: 80,
            // minClusterSize: 10,
            renderClusterMarker: _renderClusterMarker
          });
        }

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

        // AMap.plugin([
        //   'AMap.ToolBar',
        // ], function () {
        //   // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        //   map.addControl(new AMap.ToolBar({
        //     isCustom: true,
        //     autoMove: true,
        //     locate: true,
        //     position: "RB",
        //     direction: false,
        //     ruler: false
        //   }));
        // });
      })
      .catch(err => {
        console.log(err)
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
      script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=dabae8dcd3afd26242a60cd96f17f091&plugin=AMap.MarkerClusterer&plugin=AMap.Scale,AMap.OverView,AMap.ToolBar';
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
    const { loading } = this.state;

    return (
      <div className={styles.content}>
        <div className="map-wrapper" style={{ position: "relative" }}>
          <div id="map-container" style={{ width: '100%', height: 540 }}></div>
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

export default MarkerClusterer;

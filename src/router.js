/* eslint-disable */
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderRoutes from './renderRoutes';
import dynamic from './dynamic';

let routes = [
  {
    "path": "/",
    "component": dynamic({
component: () => import(/* webpackChunkName: "app__index" */'./app/index')
}),
    "routes": [
      {
        "path": "/MapCoverLayer",
        "name": "MapCoverLayer",
        "component": dynamic({
component: () => import(/* webpackChunkName: "p__MapCoverLayer" */'./pages/MapCoverLayer')
}),
        "exact": true
      },
      {
        "path": "/MarkerClusterer",
        "name": "MarkerClusterer",
        "component": dynamic({
component: () => import(/* webpackChunkName: "p__MarkerClusterer" */'./pages/MarkerClusterer')
}),
        "exact": true
      }
    ]
  }
];

export default function RouterWrapper({ store, history }) {
	return (
		// 利用Provider可以使我们的 store 能为下面的组件所用
		<Provider store={store}>
			<Router history={history}>
				{renderRoutes(routes, {})}
			</Router>
		</Provider>
	);
}

/**
 * author yyb
 * 此页面作为'父'页面，其他页面作为其'子'面页，通过this.props.children展示，在此页面可做一些全局控制处理
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Inject from '../redux/inject';
import './index.scss'

@Inject('app')
class App extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillReceiveProps() { }

  componentWillUnmount() { }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Link to='/MapCoverLayer'>矩形覆盖物</Link> /
        <Link to='/MarkerClusterer'>点聚合</Link>
        {children}
      </div>
    )
  }
}

export default App;

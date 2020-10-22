import React, { Component } from 'react'
import { Provider } from 'react-redux'
import models from './models'
import dva from './utils/dva'
import './app.less'

require('core-js/modules/es.promise.finally')

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
})
const store = dvaApp.getStore()

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App

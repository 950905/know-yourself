import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Provider } from 'react-redux'
import login from './services/login'
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

  componentDidMount () {
    Taro.hideHomeButton()
    this.getOauthStatus()
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  getOauthStatus = () => {
    Taro.getSetting().then(res => {
      console.log(res)
      if(Object.keys(res.authSetting).length === 0 || !res.authSetting['scope.userInfo']){
        Taro.redirectTo({
          url: '/pages/index/index'
        })
      }else{
        this.getUserInfo()
      }
    })
    .catch(err => console.log(err))
  }
  getUserInfo = () => {
    Taro.getUserInfo({
      lang: 'zh_CN'
    }).then( res => {
      Taro.setStorageSync('userInfo', JSON.stringify(res.userInfo))
      console.log(res.userInfo)
      login(res.userInfo)
    })
    .catch( err => console.log(err) )
  }

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

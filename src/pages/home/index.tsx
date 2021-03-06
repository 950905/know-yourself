import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.less'

interface HomeProps {
  dispatch: any
}
interface keyValueData {
  [key: string]: any
}

@connect(({ app }: keyValueData) => ({
  tabSelected: app.tabSelected
}))
export default class Home extends Component<HomeProps> {

  componentWillMount () {
  }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () {
    const { dispatch } = this.props
    const router = Taro.getCurrentInstance().router
    if (router.path === '/pages/home/index') {
      dispatch({
        type: 'app/setTabSelected',
        payload: {
          tabSelected: 'home'
        }
      })
    }
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
      </View>
    )
  }
}

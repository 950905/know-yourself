import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.less'

interface UserProps {
  dispatch: any
}
interface keyValueData {
  [key: string]: any
}

@connect(({ app }: keyValueData) => ({
  tabSelected: app.tabSelected
}))
export default class User extends Component<UserProps> {

  componentWillMount () {
  }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () {
    const { dispatch } = this.props
    const router = Taro.getCurrentInstance().router
    if (router.path === '/pages/user/index') {
      dispatch({
        type: 'app/setTabSelected',
        payload: {
          tabSelected: 'user'
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

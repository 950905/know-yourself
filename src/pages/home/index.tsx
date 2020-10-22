import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  UNSAFE_componentWillMount () { }

  UNSAFE_componentDidMount () { }

  UNSAFE_componentWillUnmount () { }

  UNSAFE_componentDidShow () {
    console.log(222)
    console.log('scope', this.$scope)
    if (typeof this.$scope.getTabBar === 'function' &&
      this.$scope.getTabBar()) {
      this.$scope.getTabBar().$component.setState({
        selected: 'home'
      })
    }
  }

  UNSAFE_componentDidHide () { }

  render () {
    return (
      <View className='index'>
      </View>
    )
  }
}

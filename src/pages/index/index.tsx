import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'
import login from '../../services/login'

export default class Index extends Component {

  state = {
    btnText: '开启我的认识之路'
  }

  UNSAFE_componentWillMount () { }

  UNSAFE_componentDidMount () { }

  UNSAFE_componentWillUnmount () { }

  UNSAFE_componentDidShow () { }

  UNSAFE_componentDidHide () { }

  onGotUserInfo (res) {
    console.log(res)
    if(res.detail.userInfo){
      Taro.setStorageSync('userInfo', JSON.stringify(res.detail.userInfo))
      login(res.detail.userInfo)
    }else{
      Taro.showModal({
        title: '温馨提示',
        content: '简单的信任，是你我俩故事的开始',
        showCancel: false
      })
        .then(ModalRes => {
          if(ModalRes.confirm){
            this.setState({btnText: '开启我的认识之路'})
          }
        })
    }
  }

  render () {
    const { btnText } = this.state
    return (
      <View className='index'>
        <View className="index-item">
          <Text className="item-title">灵魂来源</Text>
          <Text className="item-content">
            在结束一天的工作感到疲惫时，我常常陷入沉思。
            { '\n' }{ '\n' }
            前辈们都说，这是由于你不认识自己的缘故。{ '\n' }
            苏格拉底也说：“人啊，<Text className="colorRed">认识自己</Text>”。
            { '\n' }{ '\n' }
            可是，究竟该怎样认识自己呢？我尝试了很多测评，翻阅了各{ '\n' }
            种书籍，都未能获得一个全面的答案。
            { '\n' }{ '\n' }
            如果可以，{ '\n' }
            我想要有个百宝箱，它有很多小工具，可以帮助我<Text className="colorRed">认识自己</Text>；{ '\n' }
            它还要有很大很大的容量，可以装下所有碎片的我，{ '\n' }
            可以装下不同时期不同状态下的我。
          </Text>
        </View>
        <View className="index-item">
          <Text className="item-title">产品介绍</Text>
          <Text className="item-content">
            ① 通过主观题引导用户及客观题（测评）帮助用户<Text className="colorRed">认识自己</Text>。
            { '\n' }{ '\n' }
            ② 为用户生成每一次<Text className="colorRed">认识自己</Text>的雷达图报告，并形成对应的版本迭代记录。
            { '\n' }{ '\n' }
            ③ 为用户生成报告图片，并可快捷分享，帮助他人<Text className="colorRed">认识自己</Text>。
          </Text>
        </View>
        <Button className='login-btn' openType='getUserInfo' onGetUserInfo={this.onGotUserInfo.bind(this)}>{btnText}</Button>
      </View>
    )
  }
}

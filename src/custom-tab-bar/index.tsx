import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Navigator, Text, Image, Block } from '@tarojs/components'
import { connect } from 'react-redux'
import note1 from '../assets/images/note_1.png'
import note2 from '../assets/images/note_2.png'
import find1 from '../assets/images/find_1.png'
import find2 from '../assets/images/find_2.png'
import noteAdd from '../assets/images/note_add.png'
import './index.less'

const tab = {
  "background": {
    "backgroundColor": "#ffffff"
  },
  "colorSty": {
    "color": "#8d989c",
    "selectedColor": "#DC5A5A",
  },
  "list": [
    {
      "pagePath": "/pages/home/index",
      "text": "首页",
      "isSpecial": false,
      "iconPath": note2,
      "selectedPath": note1,
      "key": "home"
    },
    {
      "pagePath": "/pages/add/index",
      "text": "",
      "isSpecial": true,
      "iconPath": noteAdd
    },
    {
      "pagePath": "/pages/user/index",
      "text": "我的",
      "isSpecial": false,
      "iconPath": find2,
      "selectedPath": find1,
      "key": "user"
    }
  ]
}

interface TarBarProps {
  tabSelected: string;
  addNote: () => void;
}
interface keyValueData {
  [key: string]: any
}

@connect(({ app }: keyValueData) => ({
  tabSelected: app.tabSelected
}))
class TarBar extends Component<TarBarProps> {
  
  addNote = () => {
    Taro.navigateTo({
      url: '/pages/add/index?type=public'
    })
  }

  render () {
    const { tabSelected } = this.props
    return (
      <View className="tab_box" style={tab.background}>
        {
          tab.list.map(item => {
            return (
              <View key={item.pagePath}>
              {
                item.isSpecial ? 
                <View className="tab_nav" hover-class="none" style={tab.colorSty} onClick={this.addNote}>
                  <View className='special-wrapper'>
                    <Image className="tab_icon" src={item.iconPath}></Image>
                  </View>
                </View>
                :
                <Navigator className="tab_nav" hover-class="none" url={item.pagePath} data-url={item.pagePath} style={{'color': item.key === tabSelected ? tab.colorSty.selectedColor : tab.colorSty.color}} open-type="switchTab">
                  <Image className="tab_icon" src={item.key === tabSelected ? item.selectedPath : item.iconPath}></Image>
                  <Text>{item.text}</Text>
                </Navigator>
              }
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default TarBar
export default {
  pages: [
    'pages/home/index',
    'pages/index/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '认识自己',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    backgroundColor: '#ffffff',
    color: "#8d989c",
    selectedColor: '#509aff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: './assets/images/note_2.png',
        text: '首页'
      },
      {
        pagePath: 'pages/user/index',
        iconPath: './assets/images/find_2.png',
        text: '我的'
      }
    ]
  }
}

export default {
  pages: [
    'pages/home/index',
    'pages/index/index',
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
        text: '首页'
      },
      {
        pagePath: 'pages/home/index',
        text: '首页'
      }
    ]
  }
}

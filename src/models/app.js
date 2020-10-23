import Taro from '@tarojs/taro'

const initState ={
  tabSelected: 'home'
}
export default {
  namespace: "app",
  state: initState,
  effects: { },
  reducers: {
    setTabSelect (state, { payload }){
      const { tabSelected } = payload
      state.tabSelected = tabSelected;
      return { ...state };
    }
  }
};
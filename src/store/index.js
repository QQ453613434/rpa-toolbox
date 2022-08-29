import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      isExpand: true,
      currentTabIndex: 0,
    }
  },
  mutations: {
    changeIsExpand(state) {
      state.isExpand = !state.isExpand
      localStorage.setItem('isExpand', state.isExpand)
    },
    changeCurrentTabIndex(state, index) {
      state.currentTabIndex = index
    },
  },
})

export default store

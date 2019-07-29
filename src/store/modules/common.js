export default {
  namespaced: true,
  state: {
  	// 侧边栏, 折叠状态
    sidebarFold: false,
  },
  mutations: {
  	// 改变折叠状态
  	updateSidebarFold(state, fold){
  		console.log('我到这里来了么');
  		state.sidebarFold = fold;  
  	}
  }
}
export default {
  namespaced: true,
  state: {
  	// 侧边栏, 折叠状态
    sidebarFold: false,
    students:[],
    msg:'好好学习 天天向上',
    person:{
      name:'张三',
      age:18
    }
  },
  mutations: {
  	// 改变折叠状态
  	updateSidebarFold(state, fold){
  		console.log('我到这里来了么');
  		state.sidebarFold = fold;  
    },
    updateStudents(state,students){
      state.students = students
    },
    updateMsg(state,msg){
      state.msg = msg
    },
    updatePerson(state,person){
      console.log('person',person)
      state.person = person
    }
  }
}
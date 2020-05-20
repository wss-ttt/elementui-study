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
    },
    startTime:'11-11',   // 开始时间
    endTime:'12-12',     // 结束时间
    id: '',
    isChange:false,   // 是否改变了
    studentList: sessionStorage.getItem('studentList') || []
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
    },
    updateStartTime(state,startTime){
      state.startTime = startTime
    },
    updateEndTime(state,endTime){
      state.endTime = endTime
    },
    updateId(state, id) {
      state.id = id
    },
    updateIsChange(state,isChange){
      state.isChange = isChange
    },
    updateStudentList(state, studentList) {
      sessionStorage.setItem('studentList', JSON.stringify(studentList))
      state.studentList = studentList
    }
  }
}
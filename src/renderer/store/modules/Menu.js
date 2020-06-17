const state = {
  menu: {
      defaultActive:"",
      menuList:[]
    }
}

const mutations = {
    SET_MENU(state, menu){
        if(menu.defaultActive == undefined){
          menu.defaultActive = "";
        }
        state.menu = menu;
    }
  }
  const actions = {
    setMenu ({ commit },{menu}) {
      // do something async
      commit('SET_MENU', menu) 
    }
  }
export default{
    state,
    mutations,
    actions
}
const state = {
    rightMenu: []
}

const mutations = {
    SET_RIGHT_MENU(state, rightMenu){
        state.rightMenu = rightMenu;
         console.log(rightMenu);
    }
  }
  const actions = {
    setRightMenu ({ commit },{rightMenu}) {
      // do something async
      commit('SET_RIGHT_MENU', rightMenu) 
    }
  }
export default{
    state,
    mutations,
    actions
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({

  state: {
    isDrawerCollapsed: true
  },
  mutations: {
    toggleDrawer() {
      this.state.isDrawerCollapsed = !this.state.isDrawerCollapsed;
    }
  }
});

export default store

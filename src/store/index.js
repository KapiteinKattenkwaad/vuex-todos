import Vuex from 'vuex'
import todos from './modules/todos'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        todos
    }
})

export default store
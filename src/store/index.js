import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import chart from './modules/charts'
import getters from './getters'
import * as actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		app,
		permission,
		chart
	},
	getters,
	actions
})

export default store

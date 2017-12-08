import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count:1,
		//
		res:[],
		//保存搜索值
		inputval:"",
		//都市言情
		metropolis:[],
		//排行数据
		xuanhuan:[]
	},
	mutations:{
	    add(state){
	        state.count+=1;
	    },
	    reduce(state){
	        state.count-=1;
	    }

	}
})

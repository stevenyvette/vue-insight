import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式


// register global progress.
router.beforeEach((to, from, next) => {
	store.dispatch('GenerateRoutes', 'admin' ).then(() => { // 生成可访问的路由表
		router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
		next({ ...to }) // hack方法 确保addRoutes已完成
	})
	next()
})

router.afterEach(() => {
	NProgress.done() // 结束Progress
})

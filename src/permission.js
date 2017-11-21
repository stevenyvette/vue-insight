import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权
import { Message } from 'element-ui'

// permissiom judge
function hasPermission(roles, permissionRoles) {
	return true
}

// register global progress.
const whiteList = ['/login', '/authredirect', '*']// 不重定向白名单
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

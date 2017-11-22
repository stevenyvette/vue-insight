import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }    will control the page role
**/

export const constantRouterMap = [
	{
		path: '/dashboard',
		component: Layout,
		redirect: '/dashboard/index',
		name: '展示',
		icon: 'component',
		hidden: true,
		children: [{ path: 'index', component: _import('dashboard/index'), name: '展示' }]
	},
	{
		path: '/introduction',
		component: Layout,
		redirect: '/introduction/index',
		icon: 'component',
		noDropdown: true,
		children: [{ path: 'index', component: _import('introduction/index'), name: '首页' }]
	},
	{
		path: '/icon',
		component: Layout,
		icon: 'icon',
		noDropdown: true,
		children: [{ path: 'index', component: _import('svg-icons/index'), name: 'icons' }]
	},
	{
		path: '/components',
		component: Layout,
		redirect: '/components/index',
		name: '组件',
		icon: 'component',
		children: [
			{ path: 'index', component: _import('components/index'), name: '介绍 ' },
			{ path: 'jsoneditor', component: _import('components/jsonEditor'), name: 'JSON编辑器' },
			{ path: 'dndlist', component: _import('components/dndList'), name: '列表拖拽' },
			{ path: 'splitpane', component: _import('components/splitpane'), name: 'SplitPane' },
			{ path: 'dropzone', component: _import('components/dropzone'), name: 'Dropzone' },
			{ path: 'sticky', component: _import('components/sticky'), name: 'Sticky' },
			{ path: 'countto', component: _import('components/countTo'), name: 'CountTo' },
			{ path: 'mixin', component: _import('components/mixin'), name: '小组件' },
		]
	},
	{
		path: '/charts',
		component: Layout,
		redirect: '/charts/index',
		name: '图表',
		icon: 'chart',
		children: [
			{ path: 'index', component: _import('charts/index'), name: '介绍' },
			{ path: 'keyboard', component: _import('charts/keyboard'), name: '键盘图表' },
			{ path: 'keyboard2', component: _import('charts/keyboard2'), name: '键盘图表2' },
			{ path: 'line', component: _import('charts/line'), name: '折线图' },
			{ path: 'mixchart', component: _import('charts/mixChart'), name: '混合图表' }
		]
	},
	{
		path: '/example',
		component: Layout,
		redirect: 'noredirect',
		name: '综合实例',
		icon: 'example',
		children: [
			{
			path: '/example/table',
			component: _import('example/table/index'),
			redirect: '/example/table/table',
			name: 'Table',
			icon: 'table',
			children: [
				{ path: 'dynamictable', component: _import('example/table/dynamictable/index'), name: '动态table' },
				{ path: 'dragtable', component: _import('example/table/dragTable'), name: '拖拽table' },
				{ path: 'inline_edit_table', component: _import('example/table/inlineEditTable'), name: 'table内编辑' },
				{ path: 'table', component: _import('example/table/table'), name: '综合table' }
			]
			},
			{ path: 'form/edit', icon: 'form', component: _import('example/form'), name: '编辑Form', meta: { isEdit: true }},
			{ path: 'form/create', icon: 'form', component: _import('example/form'), name: '创建Form' },
			{ path: 'tab/index', icon: 'tab', component: _import('example/tab/index'), name: 'Tab' }
		]
	},
	{
		path: '/excel',
		component: Layout,
		redirect: '/excel/download',
		name: 'excel',
		icon: 'excel',
		children: [
			{ path: 'download', component: _import('excel/index'), name: 'export excel' },
			{ path: 'download2', component: _import('excel/selectExcel'), name: 'export selected' },
			{ path: 'upload', component: _import('excel/uploadExcel'), name: 'upload excel' }
		]
	},
	{
		path: '/theme',
		component: Layout,
		redirect: 'noredirect',
		name: 'theme',
		icon: 'theme',
		noDropdown: true,
		children: [{ path: 'index', component: _import('theme/index'), name: '换肤' }]
	},
	{
		path: '/document',
		component: Layout,
		redirect: '/document/index',
		name: 'document',
		icon: 'excel',
		noDropdown: true,
		children: [{ path: 'index', component: _import('document/index'), name: '文档' }]
	},
	{ path: '/404', component: _import('errorPage/404'), hidden: true },
	{ path: '/401', component: _import('errorPage/401'), hidden: true },
	{ path: '*', redirect: '/dashboard', hidden: true }
]

export default new Router({
	mode: 'history', //后端支持可开
	// base: '/dist/',
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
})
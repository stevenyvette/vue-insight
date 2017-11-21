<template>
	<div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
// import echarts from 'echarts'
import { mapGetters } from 'vuex'

export default {
	props: {
		className: {
			type: String,
			default: 'chart'
		},
		id: {
			type: String,
			default: 'chart'
		},
		width: {
			type: String,
			default: '200px'
		},
		height: {
			type: String,
			default: '200px'
		}
	},
	data() {
		return {
			chart: null
		}
	},
	mounted() {
		this.initChart()
	},
	beforeDestroy() {
		if (!this.chart) {
			return
		}
		this.chart.dispose()
		this.chart = null
	},
	computed: {
		...mapGetters([
			'filename'
		])
	},
	methods: {
		initChart(filepath) {
			this.chart = echarts.init(document.getElementById(this.id), 'dark')
			$.get('/static/graph/les-miserables.gexf', (xml) => {
				var graph = echarts.dataTool.gexf.parse(xml);
				var categories = [];
				for (var i = 0; i < 9; i++) {
					categories[i] = {
						name: '类目' + i
					};
				}
				graph.nodes.forEach(function (node) {
					node.itemStyle = null;
					node.symbolSize = 10;
					node.value = node.symbolSize;
					node.category = node.attributes.modularity_class;
					// Use random x, y
					node.x = node.y = null;
					node.draggable = true;
				});

				let option = {
					title: {
						text: 'Les Miserables',
						subtext: 'Default layout',
						top: 'bottom',
						left: 'right'
					},
					tooltip: {},
					legend: [{
						// selectedMode: 'single',
						data: categories.map(function (a) {
							return a.name;
						})
					}],
					animation: false,
					series : [
						{
							name: 'Les Miserables',
							type: 'graph',
							layout: 'force',
							data: graph.nodes,
							links: graph.links,
							categories: categories,
							roam: true,
							label: {
								normal: {
									position: 'right'
								}
							},
							force: {
								repulsion: 100
							}
						}
					]
				}

				this.chart.setOption(option)
			})
		}
	}
}
</script>

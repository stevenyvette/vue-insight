<template>
	<div class="components-container" style='height:100vh'>
		<div class='chart-container'>
			<graph-force height='100%' width='100%'></graph-force>
		</div>
	</div>
</template>

<script>
import graphForce from '@/components/Charts/graphForce'

export default {
    components: { graphForce }
}
</script>

<style scoped>
.chart-container{
    position: relative;
    width: 100%;
    height: 80%;
}
</style>

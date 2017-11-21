<template>
	<div class="app-container">
		<div class="wrapper">
			<div class="col-md-12" id="introduction">
				<div class="jumbotron">
					<h1>Welcome to <i style="color:#F09B22;">insight. !</i></h1>
					<br />
					<el-alert title="A visualization platform for network reshaping problem." type="info" show-icon></el-alert>
					<p>To begin our trip,<br /><strong>Select a Network :</strong></p>
					<el-row :gutter="5">
						<el-col :span="6" class='text-center'>
							<router-link class="pan-btn blue-btn" to="/components/index">Les Miserables</router-link>
						</el-col>
						<el-col :span="6" class='text-center'>
							<router-link class="pan-btn light-blue-btn" to="/charts/index" @click.native="getFilePath($event)">Train Boming</router-link>
						</el-col>
						<el-col :span="6" class='text-center'>
							<router-link class="pan-btn pink-btn" to="/excel/download">Air Traffic</router-link>
						</el-col>
					</el-row>
					<el-row :gutter="5">
						<el-col :span="6" class='text-center'>
							<router-link class="pan-btn green-btn" to="/example/table/table">Network 1</router-link>
						</el-col>
						<el-col :span="6" class='text-center'>
							<router-link class="pan-btn tiffany-btn" to="/example/form/edit">Network 2</router-link>
						</el-col>
						<el-col :span="6" class='text-center'>
							<router-link class="pan-btn yellow-btn" to="/theme/index">More</router-link>
						</el-col>
					</el-row>
				</div>
			</div>
			<div class="panel panel-default" id="network-id" style="display: none;top:10px">
				<br />
				<div class="panel-heading">
					<strong id="show-file-name" style="font-size: 19px;">Network ID:&nbsp&nbsp&nbsp</strong>
			</div>
			<div class="panel-body">
					<div class="alert alert-success">
							<strong>Well Done! &nbsp&nbsp</strong>
							Now, you can go on!
					</div>
					<div class="col-lg-7" id="remove-option-1" style="display: none;">
							<div class="alert alert-info" >
								<div class="form-group" style="width:50%;float:left">
							<label>需要满足的属性:</label>
							<div class="checkbox">
								<label>
									<input name="checkbox-1" id='role' type="checkbox" value="角色">角色
								</label>
							</div>
							<div class="checkbox">
								<label>
									<input name="checkbox-1" id="friend-numbers" type="checkbox" value="朋友数">朋友数
								</label>
							</div>
							<div class="checkbox">
								<label>
									<input name="checkbox-1" id="importance" type="checkbox" value="总要度">重要度
								</label>
							</div>
								</div>
								<div class="form-group" style="width:50%;float:left">
									<label>迭代替换的次数:</label>
									<select id="times" class="form-control">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
									</select>
						</div>
						<button onclick="node_action()" class="btn btn-success" style="float: right;">确认删除</button>
						<button onclick="reset()" class="btn btn-danger" >重置</button>
						<button onclick="remove_cancel()" class="btn btn-warning" style="float: right;">取消</button>
							</div>
						</div>
					<div class="col-lg-4" id='remove-option-2' style='display: none;'>
							<div class="alert alert-info" id="global-operation">
								<h4>Global Operation</h4>
								<br />
						<button class="btn btn-danger" onclick="reset_1()"><i class="fa fa-pencil"></i> Reset</button>
						<button class="btn btn-warning" onclick='window.open("help/help.html")'><i class="fa fa-question "></i> Help</button>
								<button class="btn btn-default" onclick='location.reload()'><i class=" fa fa-refresh "></i> Refresh</button>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	computed: {
		test() {
			console.log('hahah');
		}
	},
	methods: mapActions([
		'getFilePath'
	]),
}
</script>

<style scoped>
.app-container {
	background: rgb(240, 242, 245);
}
.wrapper{
	width: 800px;
	margin: 30px auto;
}
.el-row {
	margin-bottom: 20px;
	&:last-child {
	  margin-bottom: 0;
	}
}
</style>

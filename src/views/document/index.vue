<template>
	<div class="app-container">
		<div id="page-name">
			<center><h1>用户指南</h1></center>
		</div>
		<div class="wrapper-2">
			<code>
				本可视化平台使用目前流行的Vue前端框架构建，同时使用了饿了么前端团队开源的vue组件库。
				<br/>
				快速导航:
				<ul>
					<li><a class='lin' href="../introduction/index">首页</a></li>
					<li><a target='_blank' class='lin' href="https://github.com/stevenyvette/vue-insight">项目地址</a></li>
					<li><a href="#document">文档信息</a></li>
					<li><a href="#introduction">Insight. 平台介绍</a></li>
					<li><a href="#tips">Insight. 平台操作指南(tips)</a></li>
					<li><a href="#details-1">Insight. 平台操作指南(一)</a></li>
					<li><a href="#details-2">Insight. 平台操作指南(二)</a></li>
					<li><a href="#details-3">Insight. 平台操作指南(三)</a></li>
				</ul>
			</code>
		</div>
		<div class="timeline animated" id="document">
			<div class="timeline-row">
				<div class="timeline-time"><small></small>Welcome!</div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-home"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2>欢迎使用 <i>insight.</i> ！</h2>
						<blockquote>
							<p>本页面是 <i style="color:#0099cc;"><a href="../introduction/index">insight.</a></i> 平台的说明文档~</p>
						</blockquote>
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small>See More</div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-angle-double-down"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2>说明文档</h2>
						<blockquote>
							<p>作者: <span style="color:#0099cc;">steven</span></p>
						</blockquote>
						<blockquote>
							<p>时间: <span style="color:#0099cc;">2016-12-28</span></p>
						</blockquote>
						<blockquote>
							<p>版本: <span style="color:#0099cc;">2.1</span></p>
						</blockquote>
						<blockquote>
							<p>邮箱: <span style="color:#0099cc;"><a href="mailto:gaoyile@126.com">gaoyile@126.com</a></span></p>
						</blockquote>
					</div>
				</div>
			</div>
			<div class="timeline-row" id="introduction">
				<div class="timeline-time"><small></small>Introduction</div>
				<div class="timeline-icon">
					<div class="bg-warning"><i class="fa fa-pencil"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2><i>insight.</i> 是什么？</h2>
						<blockquote>
							<p><i style="color:#0099cc;"><a href="../introduction/index">insight. </a></i>是专为分析复杂网络重塑问题的可视化平台。</br></p>
						</blockquote>
						<blockquote>
						<p>在复杂网络(社交网络、恐怖组织网络等)中，网络中的每个人被抽象为节点，人与人之间的关系被抽象为连边。</br>一直以来，学者们致力于从网络的拓扑结构、节点的中心性指标、连边的权重大小等方面入手，分析不同网络的特性。</p>
						<p>网络节点的移除问题是也属于复杂网络问题中的一个研究分支。学者希望通过移除网络中的某些节点，达到一些特定的目的，比如降低传染病网络的传播速度、削弱恐怖组织的杀伤力等等。针对不同的最终目的，选择不同的指标来移除一些特定的节点是通常的做法。</p>
						<p>节点的移除直接带来的问题就是网络的重塑。当网络中有某些节点被移除之后，网络会如何重塑？哪些节点将在功能上替代被移除节点？网络整体的特性会发生改变还是保持？这些问题促使了<i style="color:#0099cc;"><a href="../introduction/index">insight. </a></i>平台的诞生。</p>
						</blockquote>
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small>Info</div>
				<div class="timeline-icon">
					<div class="bg-info"><i class="fa fa-info"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2><i>insight.</i> 平台欢迎界面</h2>
						<img class="img-responsive" src="../../assets/document_images/welcome.png" />
						<p>正如上图所看到的，这是<i>insight.</i> 平台的<a href="../introduction/index" target="_blank">欢迎界面</a></br>该界面主要说明、展示了<i>insight.</i> 平台的功能，是<i>insight.</i> 平台对外的窗口。</p>
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small>Info</div>
				<div class="timeline-icon">
					<div class="bg-info"><i class="fa fa-info"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2><i>insight.</i> 平台操作界面</h2>
						<img class="img-responsive" src="../../assets/document_images/platform.png" />
						<p>点击欢迎页面的“Get Started”即可进入到<i>insight.</i> 平台的<a href="../introduction/index" target="_blank">操作界面</a></br></p>
					</div>
				</div>
			</div>
			<div class="timeline-row" id="tips">
				<div class="timeline-time"><small></small>Let's Start!</div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-paper-plane"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2>下面开始介绍如何使用<i>insight.</i> 平台</h2>
						<blockquote>
							<p><i style="color:#0099cc;"><a href="../introduction/index">insight. </a></i>平台的操作容易上手，下面通过几个简单的步骤让你学会使用！</p>
						</blockquote>
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small>Tips</div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-lightbulb-o"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2>小提示</h2>
						<p><i style="color:#0099cc;"><a href="../introduction/index">insight. </a></i> 平台有一个温馨的浮动小助手steven。</br>steven将会根据你鼠标浮动的位置，给出相应提示。</br>ps:你也可以右键关闭他。需要的时候可以通过侧面导航栏的“Steven”按钮召唤他！</p>
						<img class="img-responsive" src="../../assets/document_images/tips.png" />
					</div>
				</div>
			</div>
			<div class="timeline-row" id="details-1">
				<div class="timeline-time"><small></small>Step 1</div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-file"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2>1.选择图文件</h2>
						<blockquote>
						<p>第一步是选择需要研究分析的网络，目前给出了几种已有网络作为参考。后期将会允许用户自行添加网络（需严格符合格式要求）。</br>以下说明均以"les-miserable"人物关系网络作为例子。</p>
						</blockquote>
						<img class="img-responsive" src="../../assets/document_images/step1.png" />
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small></div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-spinner"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2></h2>
						<p>1.1</br><i style="color:#0099cc;"><a href="../introduction/index">insight. </a></i> 根据选择的网络，给出可视化的网络图。</p>
						<img class="img-responsive" src="../../assets/document_images/step1-1.png" />
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small></div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-spinner"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2></h2>
						<img class="img-responsive" src="../../assets/document_images/step1-2.png" />
						<p>1.2</br><i style="color:#0099cc;"><a href="../introduction/index">insight.</a></i>也会给出网络的一些基本特征，让用户更好的理解整个网络。同时也给出另一种环形布局的网络可视化图。 </p>
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small></div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-th-list"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2></h2>
						<p>1.3</br><i style="color:#0099cc;"><a href="../introduction/index">insight.</a></i>会整理罗列给出网络的所有节点以及包含的属性，并以表格的形式呈现给用户。值得一提的是，表格带有自动排序和检索功能。请用户自行操作~ </p>
						<img class="img-responsive" src="../../assets/document_images/step1-3.png" />
					</div>
				</div>
			</div>
			<div class="timeline-row" id="details-2">
				<div class="timeline-time"><small></small>Step 2</div>
				<div class="timeline-icon">
					<div class="bg-primary"><i class="fa fa-window-close"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2>2.选择并移除节点</h2>
						<blockquote>
						<p>在 Network Graph 的面板中，对于网络中的每个节点，鼠标左键和右键都会有对应的菜单选项。两个菜单中都能进行节点的删除操作！~</br>此处以鼠标右键动作为例，如下图</p>
						</blockquote>
						<img class="img-responsive" src="../../assets/document_images/step2.png" />
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small></div>
				<div class="timeline-icon">
					<div class="bg-warning"><i class="fa fa-spinner"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<p>2.1</br>当网络中某个节点被用户移除后，会出现如下的界面。</br>网络图从一张变成了3张依次为：</br>a.节点移除后的网络图。</br>透明红色节点为被移除节点，绿、蓝、黄色节点依次为替换红色节点概率最大的前三名</br>b.替换后网络结构图。</br>我们默认取绿色（替换该率最大的节点）作为替换节点，进行网络重塑。给出重塑后的网络结构图。</br>c.原网络图</br>最后，我们保留了原网络图作为对比和参考。</br>d.更多功能请自行探索~</p>
						<img class="img-responsive" src="../../assets/document_images/step2-1.png" />
					</div>
				</div>
			</div>
			<div class="timeline-row">
				<div class="timeline-time"><small></small></div>
				<div class="timeline-icon">
					<div class="bg-info"><i class="fa fa-line-chart"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<p>2.2</br>正如前文所介绍的一样，<i style="color:#0099cc;"><a href="../introduction/index">insight.</a></i>专注于网络重塑，因此当某个节点被移除后，<i style="color:#0099cc;"><a href="../introduction/index">insight.</a></i>将会计算网络中剩余节点的替换概率，并以连线图（柱状图）以及饼图的方式呈现给用户。连线图按照替换概率的高低从左到右依次给出对应节点，饼图则用饼块的大小来表示节点的替换概率大小。</p>
						<img class="img-responsive" src="../../assets/document_images/step2-2.png" />
					</div>
				</div>
			</div>
			<div class="timeline-row" id="details-3">
				<div class="timeline-time"><small></small>The End</div>
				<div class="timeline-icon">
					<div class="bg-info"><i class="fa fa-bell"></i></div>
				</div>
				<div class="panel timeline-content">
					<div class="panel-body">
						<h2>结束语</h2>
						<p>看到这里，<i style="color:#0099cc;"><a href="../introduction/index">insight.</a></i> 目前为止的主要功能已经介绍完了，其中的细节部分需要用户自己去体会去摸索。<i style="color:#0099cc;"><a href="../introduction/index">insight.</a></i> 未来将尝试更多的网络图以及不同的网络节点替换算法。</p>
						<img class="img-responsive" src="../../assets/document_images/end.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style src="../../styles/css/bootstrap.css" scoped></style>
<style src="../../styles/css/font-awesome.css" scoped></style>
<style src="../../styles/css/styles.css" scoped></style>
<style scoped>
.app-container {
	height: 100%;
	background-image: url('../../assets/document_images/bg-3.jpg');
	background-size: cover;
	background-attachment: fixed;
}
.wrapper-2 {
	width: 800px;
	margin: 30px auto;
}
code {
	background: #eef1f6;
	padding: 15px 10px;
	margin-bottom: 20px;
	display: block;
	line-height: 36px;
	color: black;
}
li>a {
	color: #337ab7;
}
</style>

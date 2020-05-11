<!-- <template/><script><style> 这三个标签在每个页面都只能存在一个 -->
<!-- template: View -->
<template>
	<view class="content">
		<view class="red">
			双向绑定数据的案例
			<br/>
			组件外部绑定数据 {{}}
			<br/>
			组件内部绑定数据 v-bind:  有时候省略v-bind
		</view>
        <image class="logo"  v-bind:src="image"></image>
		<view>
            <text class="title">{{title + ' very good'}}</text>
			<input type="text" :value="title" @input="change"/>
        </view>
		
		<!-- 标签不能使用{{}} -->
		<navigator :url="url" > <!-- 错误写法：url="{{url}}" -->
			<view>
				I am {{student.age >= 18 ? '成年' : '未成年'}} years old. <br/>
				I have skills such as: {{skill[0]}},{{skill[1]}},{{skill[2]}},{{skill[3]}},{{skill[4]}}
			</view>
		</navigator>
		
		
		<navigator v-bind:url="url"> <!-- 错误写法：url="{{url}}" -->
			<view>
				v-bind指令
			</view>
		</navigator>
	</view>
</template>

<script>
	// VM：协调者 调度器
	export default {
		// Model: 所有的数据
		data() {
			return {
				title: 'Hello NEXT学院，可以输入内容',
				student: {
					age: 17
				},
				skill: ["Java", "HTML", "CSS", "Springcloud", "VUE"],
				url: "../hello/hello",
				image: "../../static/logo.png"
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				var txtTitle = e.detail.value;
				this.title = txtTitle;
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>

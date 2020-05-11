<template>
	<view>
		<view class="red">
			事件基础的案例
		</view>
		<input type="text" 
			style="background-color: #8F8F94;height: 100upx;"
			@input="change"
			@focus="focus"
			@blur="blur"
			
			@confirm="confirm"
			
			@click="click"
			@tap="tap"
			
			@longpress="longpress"
			
			@touchstart="touchstart"
			@touchend="touchend"
			@touchmove="touchmove"
			@touchcancel="touchcancel"
			/>
			<!-- 不推荐 @longtap="longtap" -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			change() {
				console.log("文本发生变化")
			},
			focus() {
				console.log("获得焦点")
			},
			blur() {
				console.log("失去焦点")
			},
			confirm() {
				console.log("点击完成按钮/回车键")
			},
			click() {
				console.log("组件单击事件")
			},
			tap() {
				console.log("组件被触摸")
			},
			longpress() {
				console.log("长时间按住")
			},
			// FIX 不在推荐使用longtap
			longtap() {
				console.log("长时间触摸")
			},
			touchstart() {
				console.log("触摸开始")
			},
			touchend() {
				console.log("触摸结束")
			},
			touchmove() {
				console.log("手指移动")
			},
			touchcancel() {
				console.log("触摸被打断")
			},
		}
	}
</script>

<style>

</style>

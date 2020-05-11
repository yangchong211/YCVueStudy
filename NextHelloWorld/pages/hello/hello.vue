<template>
	
	<navigator url="../index/index" open-type="navigateBack">
		<!-- <view class="green" style="width: 375px;height: 375px;"></view> -->
		<view style="width: 750upx;height: 750upx;">
			生命周期的案例
		</view>
	</navigator>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			console.log("页面加载")
		},
		onUnload() {
			console.log("页面关闭")
		},
		onReady() {
			console.log("页面初次渲染完成")
		},
		onShow() {
			console.log('页面show')
		},
		onHide() {
			console.log('页面Hide')
		},
		onShareAppMessage() {
			console.log('分享')
		},
		onPageScroll() {
			console.log('页面滚动')
		},
		onBackPress() {
			console.log('页面返回')
		}
	}
</script>

<style>
	.green {
		background-color: red;
	}
</style>

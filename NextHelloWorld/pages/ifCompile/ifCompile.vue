<template>
	<view>
		
		<!-- #ifdef H5 -->
		<view>只在H5编译</view>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<view>只在ios/安卓编译</view>
		<!-- #endif -->
		
		<!-- #ifdef MP -->
		<view>只在小程序(微信、支付宝、百度)进行编译</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
		<view>只在微信小程序进行编译</view>
		<!-- #endif -->
		
		
		<!-- #ifndef MP -->
		<view>不在小程序全短编译，只在ios/安卓/h5编译</view>
		<!-- #endif -->
		
		<view class="color">
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			// #ifdef H5
			console.log("只在H5编译");
			// #endif
			
			// #ifdef APP-PLUS
			console.log("只在APP-PLUS编译");
			// #endif
			
			// #ifdef MP
			console.log("只在小程序(微信、支付宝、百度)进行编译");
			// #endif
			
			// #ifdef MP-WEIXIN
			console.log("只在微信小程序编译");
			// #endif
		}
	}
</script>

<style>

	.color {
		/* #ifdef H5 */
		background-color: #008000;
		/* #endif */
		
		/* #ifdef APP-PLUS */
		background-color: #FF0000;
		/* #endif */
		
		/* #ifdef MP */
		background-color: orange;
		/* #endif */
		
		width: 250upx;
		height: 250upx;
	}

</style>

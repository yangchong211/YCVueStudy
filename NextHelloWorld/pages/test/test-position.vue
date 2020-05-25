<template>
	<view class="parent">
		<text class="son">{{data1}}</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				data1 : "这个是标题1",
				data2 : "这个是标题2",
			}
		},
		methods:{
			
		},
		onLoad() {
			console.log('vue onLoad');
		},
		
	}
</script>

<style>
	.parent{
		margin-top: 30rpx;
		width: 200px;
		height: 200px;
		background-color: #007AFF;
		display: flex;
	}
	.son{
		height: 30px;
		margin-top: 20rpx;
		background-color: #DD524D;
	}
</style>

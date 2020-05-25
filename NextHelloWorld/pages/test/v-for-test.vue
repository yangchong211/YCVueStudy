<template>
	<view class="popup-class">
		<text class="popup-title">选择年级</text>
		<view class="popup-grade" v-for="grade in gradeArray" :key="grade.data.id">
			<text class="popup-grade-name">{{ grade.name }}</text>
			<view class="popup-grade-array" v-for="array in grade.data" :key="array.id">
				<text class="popup-grade-class">{{ array.gradeName }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			gradeArray: [
				{
					name: '小学',
					data: [
						{
							id: 1,
							gradeName: '一年级'
						},
						{
							id: 2,
							gradeName: '二年级'
						},
						{
							id: 3,
							gradeName: '三年级'
						},
						{
							id: 4,
							gradeName: '四年级'
						},
						{
							id: 5,
							gradeName: '五年级'
						},
						{
							id: 6,
							gradeName: '六年级'
						}
					]
				},
				{
					name: '初中',
					data: [
						{
							id: 7,
							gradeName: '七年级'
						},
						{
							id: 8,
							gradeName: '八年级'
						},
						{
							id: 9,
							gradeName: '九年级'
						}
					]
				},
				{
					name: '高中',
					data: [
						{
							id: 10,
							gradeName: '高一'
						},
						{
							id: 11,
							gradeName: '高二'
						},
						{
							id: 12,
							gradeName: '高三'
						}
					]
				}
			]
		};
	},
	methods: {},
	components: {},
	//创建
	created() {
		console.log('vue created');
	},
	//如果有网络请求，可以在onLoad生命周期里先弹出一个等待雪花
	onLoad() {
		console.log('vue onLoad');
	},
	//每个页面的onShow，页面已经加载出
	onShow() {
		console.log('vue onShow');
	},
	//监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
	onReady() {
		console.log('vue onReady');
	},
	//监听页面隐藏
	onHide() {
		console.log('vue onHide');
	},
	//监听页面返回
	onBackPress() {
		console.log('vue onBackPress');
	}
};
</script>

<style>
/* 选择年级弹窗 */
.popup-class {
	display: flex;
	flex-direction: column;
	width: 630rpx;
	height: 690rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
}
.popup-title {
	color: #333333;
	font-size: 32rpx;
	margin-top: 30rpx;
	align-self: center;
}
.popup-grade {
	color: #666666;
	font-size: 28rpx;
	margin-left: 40rpx;
	margin-top: 30rpx;
}
.popup-grade-array {
	display: flex;
	flex-direction: raw;
	flex-wrap: wrap;
}
.popup-grade-name {
	width: 100%;
	color: #666666;
	font-size: 28rpx;
	margin-top: 30rpx;
}
.popup-grade-class {
	color: #333333;
	width: 170rpx;
	font-size: 30rpx;
	border-radius: 33rpx;
	background-color: rgba(238, 238, 238, 1);
}
</style>

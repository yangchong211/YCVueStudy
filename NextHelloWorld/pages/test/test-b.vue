<template>
	
	<view class="container">
		<text >{{data1}}</text>
		<text >{{data2}}</text>
		<text >{{data3}}</text>
		<text >{{data4}}</text>
		
		<button type="default" @click="click2">关闭b页面，从b返回a携带回传参数2</button>
		<button type="default" @click="click3">关闭b页面，从b返回a携带回传参数3</button>
		<button type="default" @click="click4">关闭b页面，从b返回a携带回传参数4</button>
		<button type="default" @click="click5">关闭b页面，从b返回a携带回传参数5</button>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				data1 : "这个是标题1",
				data2 : "这个是标题2",
				data3 : "这个是标题3",
				data4 : "这个是标题4",
			}
		},
		methods:{
			click2(){
				uni.$emit('update2',{
					msg:'页面更新',
					data:"逗比",
				})
			},
			click3(){
				uni.$emit('update3',{
					msg:'页面更新',
					data:"逗比",
				})
				uni.navigateBack({
					delta:1
				})
			},
			click4(){
				var pages = getCurrentPages();
				//上一个页面
				var prevPage = pages[pages.length - 2]; 
				prevPage.setData({
					sx1:"参数1",
					sx2:"参数2",
				})
				uni.navigateBack({
					delta:1
				});
			},
			click5(){
				var pages = getCurrentPages();
				//上一个页面
				var prevPage = pages[pages.length - 2]; 
				var object={
					sx1:"参数1",
					sx2:"参数2",
				}
				//重点$vm
				prevPage.$vm.otherFun(object);
				uni.navigateBack();
			}
		},
		
		onLoad() {
			console.log('vue onLoad');
		},
		//option为object类型，会序列化上个页面传递的参数
		// onLoad: function (option) { 
		// 	console.log('vue onLoad function' + option);
		// 	this.data1 = option.name
		// }
		
	}
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
	}
</style>

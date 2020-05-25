<template>
	<view class="container">
		<text >{{data1}}</text>
		<text >{{data2}}</text>
		<text >{{data3}}</text>
		<text >{{data4}}</text>
		<button type="default" @click="click1">跳转b页面带参数</button>
		<button type="default" @click="click2">跳转b页面，从b返回a携带回传参数2</button>
		<button type="default" @click="click3">跳转b页面，从b返回a携带回传参数3</button>
		<button type="default" @click="click4">跳转b页面，从b返回a携带回传参数4</button>
	</view>

</template>

<script>
	export default{
		data(){
			return{
				title : "这个是标题",
				data1 : "这个是标题1",
				data2 : "这个是标题2",
				data3 : "这个是标题3",
				data4 : "这个是标题4",
			}
		},
		methods:{
			click1(){
				uni.navigateTo({
				    url: './test-b ? name = uniapp'
				});
			},
			click2(){
				//在起始页面跳转到test.vue页面并传递参数
				uni.navigateTo({
				    url: './test-b'
				});
			},
			click3(){
				uni.navigateTo({
				    url: './test-b'
				});
			},
			click4(){
				
			},
		},
		onLoad() {
			uni.$on('update2',function(data){ 
				this.data2 = data.data;
				console.log('监听到事件来自 update2 ，携带参数 msg 为：'  + data.msg + "---" + data.data);
				// 清除监听
				uni.$off('update2');
			}),
			uni.$on('update3',function(data){
				this.data3 = data.data;
				console.log('监听到事件来自 update3 ，携带参数 msg 为：'  + data.msg + "---" + data.data); 
				 // 清除监听
				 uni.$off('update3');
			})
		},
		onUnload() {
			
		},
		onShow(object){
			console.log('vue onShow' + object)
		},
		otherFun(object){
			if(!!object){
				console.log(object)
			}
		}
		
	}
</script>

<style>
	
	.container{
		display: flex;
		flex-direction: column;
	}
</style>

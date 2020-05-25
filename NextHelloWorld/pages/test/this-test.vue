<template>
	<view class="container">
		<text>{{title}}</text>
		<button type="default" @click="changeTitle1">改变标题内容按钮1</button>
		<button type="default" @click="changeTitle2">改变标题内容按钮2</button>
		<button type="default" @click="changeTitle3">改变标题内容按钮3</button>
		<button type="default" @click="changeTitle4">改变标题内容按钮4</button>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				title : "这个是标题",
			}
		},
		methods:{
			changeTitle1(){
				this.title = "改变标题1";
			},
			//可以发现下面这个执行了success方法，但是调用this赋值却无法改变内容
			changeTitle2(){
				uni.setStorage({
				    key: 'storage_key',
				    data: 'hello',
				    success: function () {
						this.title = "改变标题2";
				        console.log('changeTitle2------success');
				    }
				});
			},
			//可以发现这样操作就可以解决作用域问题
			changeTitle3(){
				//赋值
				var me = this;
				uni.setStorage({
				    key: 'storage_key',
				    data: 'hello',
				    success: function () {
						me.title = "改变标题3";
				        console.log('changeTitle2------success');
				    }
				});
			},
			//思考，那如果作用域嵌套层次很深，比如下面这样的案例
			changeTitle4(){
				uni.reLaunch({
					url:"../hello/hello",
					success() {
						
					}
				})
				uni.setStorage({
				    key: 'storage_key',
				    data: 'hello',
				    success:() => {
						this.title = "改变标题4";
				        console.log('changeTitle2------success');
				    }
				});
				
				
				
				// var me = this;
				// uni.setStorage({
				//     key: 'storage_key',
				//     data: 'hello',
				//     success: function () {
				//         console.log('changeTitle4-1------success');
						
				// 		//在嵌套一层
				// 		uni.setStorage({
				// 		    key: 'storage_key',
				// 		    data: 'hello',
				// 		    success: function () {
				// 		        console.log('changeTitle4-2------success');
				// 				me.title = "改变标题4";
				// 		    }
				// 		});
				//     }
				// });
			},
		}
	}
</script>

<style>
	.container{
		display: flex;
		flex-flow: column;
	}
</style>

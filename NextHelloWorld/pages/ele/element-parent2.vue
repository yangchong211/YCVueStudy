<!-- 子组件传父组件 -->
<!-- 父组件内部写法 -->
<template>
    <view>
        <!-- 接收到子组件传递的数据 -->
        <h2>父组件接收到的值:{{valueChild}}</h2>
        <!-- 在子组件标签上绑定子组件内部对应事件，并触发对应回调 -->
        <children style="color: #0000FF;" @Transmit="handle"></children>
    </view>
</template>

<script>
    //引入子组件
    import children from "../../pages/ele/element-children2.vue"
    export default {
        data() {
            return {
				//定义属性接收数据
                valueChild:"",
            }
        },
        components:{
			//注册子组件
            children
        },
        onLoad(){
            
        },
        methods:{
            // 子组件内部触发事件对应回调handle
            handle(val){
                this.valueChild=val;
            }
        }
    }
</script>
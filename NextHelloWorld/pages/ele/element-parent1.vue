<!-- 父组件传子组件 -->
<!-- 父组件内部写法 -->
<template>
    <view>
        <h2>父组件</h2>
        <!-- 绑定自定义属性传递数据 -->
        <children style="color: #0000FF;" :value ="valPar" ></children>
    </view>
</template>

<script>
    //引入子组件
    import children from "../../pages/ele/element-children1.vue"
    export default {
        data() {
            return {
                valPar:"父组件传递过来的值"
            }
        },
        components:{
			//注册子组件
            children
        },
    }
</script>

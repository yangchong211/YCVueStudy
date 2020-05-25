<!-- 父组件传子组件 -->
<!-- 子组件内部写法 -->
<template>
    <h2>子组件收到:{{value}}</h2>
</template>

<script>
    export default {
        props:{
            value:{
                type:String,
                default:"默认值"
            }
        },
        data() {
            return {
                
            }
        },
    }
</script>

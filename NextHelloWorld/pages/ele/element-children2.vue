<!-- 子组件传父组件 -->
<!-- 子组件内部写法 -->
<template>
    <view>
        <h2>子组件</h2>
        <!-- 点击按钮进行事件触发 -->
        <button @click="handleTransmit">点击给父组件传值</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                //要传递的数据
                valueParent: "子组件传递过来的数据"
            }
        },
        methods: {
            handleTransmit() {
                // 进行事件触发，传递数据
                this.$emit("Transmit", this.valueParent)
            }
        }
    }
</script>

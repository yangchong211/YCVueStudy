<template>
	<view>
		<view class="red">
			条件渲染的案例
		</view>
		<!-- v-if v-show 的区别：前者是否会在dom中被移除，后者 display:none -->
		<view v-if="isShow" style="margin-top: 150upx;">
			now you see me
		</view>
		<view v-else>
			看不见我
		</view>
		
		<view v-show="isShow">
			now you see me haha
		</view>
		
		
		
		<!-- 三元计算 -->
		<view v-if="sex1 == 1 ? true : false">
			男性
		</view>
		<view v-if="sex0 == 0 ? true : false">
			女性
		</view>
		<view v-if="sex2 == 0 ? true : false">
			男
		</view>
		
		
		<view>
			========================
		</view>
		
		<view v-if="sex1 == 1">
			男性
		</view>
		<view v-else-if="sex1 == 0">
			女性
		</view>
		<view v-else>
			未知
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				sex0: 0,
				sex1: 2,
				sex2: 1
			};
		}
	}
</script>

<style>

</style>

<template>
	<view>
		<view v-for="(stuObj, stuIndex) in studentArray">
			<view>姓名: {{stuObj.name}}, 年龄: {{stuObj.age}}</view>
			<view>
				擅长技能: 
				<!-- <view v-for="sk in stuObj.skill">
					{{sk}},
				</view> -->
				<block v-for="(sk, skIndex) in stuObj.skill">
					{{sk}},
				</block>
			</view>
		</view>
		
		<view v-for="(obj,index) in array">
			<view>姓名:{{obj.name}} 性别:{{obj.sex}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				studentArray: [
					{
						name: "Jack",
						age: 19,
						skill: ["Java", "Springcloud", "VUE"]
					},
					{
						name: "Steve",
						age: 20,
						skill: ["Java", "HTML", "CSS"],
					},
					{
						name: "Stark",
						age: 18,
						skill: ["CSS", "Springcloud", "VUE"],
					},
					{
						name: "Jason",
						age: 21,
						skill: ["Java", "VUE", "HTML"]
					},
					{
						name: "Lucy",
						age: 16,
						skill: ["VUE", "HTML", "JS"]
					}
				],
				array : [
					{
						name: "Jack",
						sex:"男",
					},
					{
						name: "Steve",
						sex:"男",
					},
				]
			};
		}
	}
</script>

<style>

</style>

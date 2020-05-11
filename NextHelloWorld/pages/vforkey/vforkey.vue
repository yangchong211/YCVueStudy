<template>
	<view>
		
		<view v-for="stu in studentArray" :key="stu.id">		<!-- :key 保证组件和数据捆绑唯一 -->
			<checkbox :value="stu.name" />{{stu.name}}
		</view>
		
		<button type="primary" @click="addStu">新增学生</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				studentArray: [
					{
						id: 1,
						name: "Jack",
						age: 19
					},
					{
						id: 2,
						name: "Steve",
						age: 20
					},
					{
						id: 3,
						name: "Stark",
						age: 18
					}
				]
			};
		},
		methods: {
			addStu() {
				var studentArray = this.studentArray;
				var newId = studentArray.length + 1;
				var newStu = {
					id: newId,
					name: "新生" + newId,
					age: 18
				}
				
				// studentArray.push(newStu);	// push 在数组的尾部进行添加
				studentArray.unshift(newStu);	// unshift 在数组的首部进行添加
			}
		}
	}
</script>

<style>

</style>

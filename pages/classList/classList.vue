<template>
	<view calss="homelist" v-for="item in home" :key="item.id" @tap="goClasslify(item.id)">
		<view class="title" style="margin:10rpx 20rpx; font-size: 30rpx; padding: 20rpx;" >
			{{item.name}}
		</view>
		<homeList :homelist="item"></homeList>
	</view>
</template>

<script setup>
	
	import {ref} from "vue"
	
	import {AipGethead} from '@/api/rabbit.js'
	//获取主页分类列表
	const home = ref([])
	
	const gethomeList = async()=>{
		const res =await AipGethead()
		home.value = res.result
	}
	gethomeList()
	
	const goClasslify =(id)=>{
		uni.navigateTo({
			url:"/pages/classlify/classlify?id="+id,
			
		})
		// console.log(id)
	}
</script>

<style lang="scss" scoped>
.homelist{
			.title{
				.text{
					margin-left: 20rpx;
				}
			}
		}
	
</style>

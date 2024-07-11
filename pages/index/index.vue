<template>
	<view class="layout">
			<swiper class="banner" indicator-dots indicator-color='#fff' indicator-active-color='#ccc' circular autoplay>
				<swiper-item v-for="item in bannerList" :key="item.id">
					<image class="image" :src="item.imgUrl" alt=""/>
				</swiper-item>
			</swiper>
			<List-component :fresh="fresh" >
				<template #title>
					新鲜好物
				</template>
				<template #title-text>
					新鲜出炉 品质靠谱
				</template>
			</List-component>
			<List-component :fresh="brand" >
				<template #title>
					品牌物品
				</template>
				<template #title-text>
					品质保证 大牌保证
				</template>
			</List-component>
			<List-component :fresh="hot" >
				<template #title>
					人气推荐
				</template>
				<template #title-text>
					人气推荐 品质靠谱
				</template>
			</List-component>
		
			
			
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {AipGetBanner,AipGetFresh,AipGetbrand,AipGethot,AipGethead,AipGetLogin} from '@/api/rabbit.js'
	
	
	const login = async()=>{
		const res = await AipGetLogin()
		console.log(res.result.token);		
		uni.setStorageSync('token',res.result.token)
	}
	
	login()
	
	//存放banner
	const bannerList = ref([])
	//获取banner图
	const geibanner  = async ()=>{
		const res =  await AipGetBanner()
		bannerList.value = res.result
		// console.log(bannerList.value);
	}
	//获取
	geibanner()
	
	//获取新鲜好物数据
	const fresh = ref([])
	//获取新鲜好物
	const getfresh = async()=>{
		const res = await AipGetFresh()
		fresh.value = res.result
		// console.log(fresh.value);
	}
	//获取
	getfresh()
	
	//获取热门推荐
	
	const brand = ref([])
	
	//获取热门推荐数据
	const getbrand =async ()=>{
		const res = await AipGetbrand()
		// console.log(res);
		brand.value = res.result
	}
	//获取
	getbrand()
	
	//获取人气推荐数据
	const hot = ref([])
	
	//获取人气推荐
	const gethot =async ()=>{
		const res = await AipGethot()
		// console.log(res);
		hot.value = res.result
	}
	//获取
	gethot()
	
	
	
</script>

<style lang="scss" scoped>
	.layout{
		// display: flex;
		.banner{
			width: 95%;
			height: 420rpx;
			// background:#ccc;
			margin:  20rpx auto;
			.image{
				width: 100%;
				border-radius: 10rpx 10rpx;
			}
		}
		}
</style>

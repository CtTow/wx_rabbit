<template>
	<view class="homeList">
		<view class="list" v-for="item in list">
			<view class="content"  >
				<view class="btncontent">
					<view class="image" @tap='GOProduct(item.id)' >
						<image class="image" :src="item.picture" mode="aspectFit"></image>
					</view>
					<view class="text">
						<view>
							<view class="textTitle">
								<text class="text" style="width: 100rpx;">{{item.name}}</text>
							</view>
							<view class="money">
								{{item.price}}元
							</view>
						</view>
					</view>
				</view>
				
			</view>	
		</view>
	</view>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import { ref } from 'vue';
	import {AipGetcategory} from "@/api/rabbit.js"
	import {ArrPushObj} from '@/utils/ArrObj.js'
	const ListId = ref('') 
	const list = ref([])
	onLoad((e)=>{
		ListId.value = e.id
		
		Getcategory(ListId.value)
	})
	
	const Getcategory = async(id)=>{
		const res = await AipGetcategory(id)	
		list.value = ArrPushObj(res.result.children)
	}
	const GOProduct = (id)=>{
		uni.navigateTo({
			url:'/pages/Product-details/Product-details?id='+id
		})
	}
</script>

<style lang="scss">
.homeList{
		display: grid;
		grid-template-columns: repeat(4,1fr);
		grid-template-rows: repeat(2,300rpx);
		width: 95%;
		margin: 0 auto;
		.list{
			
			// justify-content: space-between;
			.content{
				height: 300rpx;
				// border: 1px solid #ccc;
				// background-color: #ccc;
				width: 95%;
				display: flex;
				justify-content: center;
				// display: flex;
				flex-wrap: wrap;
				// align-items: center;
				// flex-wrap: w;
				margin: 0 auto;
				.btncontent{
					width: 100%;
					
					
					margin: 10rpx 20rpx;
					// border: 1px solid #ccc;
					
					.image{
						background-color: #fff;
						width: 100%; 
						height: 200rpx;
						.image{
							width: 100%;
							height: 200rpx;
						}
					}
					.text{
						width: 100%;
						text-align: center;
						font-size: 20rpx;
						// display: flex;
						// flex-direction: 1;
						.textTitle{
							width: 100%;
							display: flex;
							justify-content: center;
							margin: 10rpx auto;
							.text{
								width: 50%;
								white-space: nowrap;
								overflow: hidden; 
								text-overflow: ellipsis; 
							}
						}
						.money{
							color: red;
						}
					}
					
				}
				.btncontent:hover{
					color: #ccc;
				}
			}
		}
	}
</style>

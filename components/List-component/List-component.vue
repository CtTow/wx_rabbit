<template>
	<view class="component">
		<view class="title">
			<view class="text">
				<slot name="title"></slot>
			</view>
			<view class="recommend">
				<slot name="title-text"></slot>
			</view>
		</view>
		<view class="content">
			<view class="btncontent" v-for="item in fresh " :key="item.id"  @tap='GOProduct(item.id)'>
				<view class="image">
					<image lazy-load class="image" :src="item.picture" mode="aspectFit"></image>
				</view>
				<view class="text">
					<view v-if="item.name">
						<view class="textTitle">
							<view>{{item.name}}</view>
						</view>
						<text class="money" v-if="item.price">{{item.price}}元</text>
					</view>
					
					<view class="textTitle" v-else>
						<view>{{item.name || item.title}}</view>
					</view>
				</view>
			</view>
			
		</view>	
	</view>
</template>

<script setup>
	
	const popos = defineProps({
		fresh:{
			type:Array,
			default:[]
		}
	})
	
	const GOProduct = (id)=>{
		uni.navigateTo({
			url:'/pages/Product-details/Product-details?id='+id
		})
	}
</script>

<style lang="scss" scoped>
	.component{
		// margin-top: 30rpx;
		.title{
			width: 100%;
			height: 50rpx;
			// border: 1px solid #ccc;
			display: flex;
			margin: 0 20rpx;
			// align-items: center;
			line-height: 50rpx;
			// justify-content: center;
			.text{
				font-size: 30rpx;
			}
			.recommend{
				font-size: 20rpx;
				margin-left:20rpx ;
				color: #27bb9a;
			}
		}
		.content{
			height: 300rpx;
			// border: 1px solid #ccc;
			width: 95%;
			display: flex;
			justify-content: center;
			// align-items: center;
			// flex-wrap: w;
			margin: 0 auto;
			.btncontent{
				width: 20%;
				// padding: 10rpx;
				margin: 10rpx 20rpx;
				// border: 1px solid #ccc;
				
				.image{
					// border: 1px solid #000;
					width: 98%; 
					height: 200rpx;
					// padding: 20rpx;
					.image{
						width: 100%;
						height: 200rpx;
					}
				}
				.text{
					text-align: center;
					font-size: 20rpx;
					// display: flex;
					// flex-direction: 1;
					.textTitle{
						width: 100%;
						white-space: nowrap; 
						overflow: hidden; 
						text-overflow: ellipsis; 
						margin: 10rpx auto;
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
</style>
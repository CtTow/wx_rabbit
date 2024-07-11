<template>
	<view class="homeList"> 
		<view class="list" v-for="item in homelist.children " :key="item.id">
			<view class="content">
				<view class="btncontent"  >
					<view class="image">
						<image class="image" :src="item.picture" mode="aspectFit"></image>
					</view>
					<view class="text">
						<view>
							<view class="textTitle">
								<text class="text" style="width: 100rpx;">{{item.name}}</text>
							</view>
							
						</view>
					</view>
				</view>
				
			</view>	
		</view>
		
	</view>
</template>

<script setup>
	const popos = defineProps({
		homelist:{
			type:Object
			// default:
		}
	})
	
</script>

<style lang="scss" scoped>
	.homeList{
		display: grid;
		grid-template-columns: repeat(4,1fr);
		grid-template-rows: repeat(2,300rpx);
		width: 95%;
		margin: 0 auto;
		.list{
			// border: 1rpx solid #ccc;
			// padding: 10rpx;
			// height: 155rpx;
			.content{
				height: 300rpx;
				// border: 1px solid #ccc;
				// background-color: #ccc;
				width: 95%;
				display: flex;
				justify-content: center;
				// align-items: center;
				// flex-wrap: w;
				margin: 0 auto;
				.btncontent{
					width: 100%;
					// padding: 10rpx;
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


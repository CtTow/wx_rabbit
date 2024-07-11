<template>
	<view class="uni-popup__wrapper">
			<view class="specifications">
				<view class="title">
					<view class="image">
						<image style="width: 100%; height: 100%; border-radius: 10rpx;" 
						:src="list.mainPictures[0]" 
						mode="aspectFill"
						></image>
					</view>
					
					<view class="text">
						<text class="p" style="font-size: 25rpx;  display: inline-block;">
							{{list.name}}
						</text>
						<text class="p" style="color: red; margin: 15rpx auto; font-size: 30rpx; ">
							￥{{list.price}}
						</text>
						<text class="p" style="color: #aaa; font-size: 20rpx;">
							库存:{{list.salesCount}}
						</text>
					</view>
					
				</view>
				
				<view class="specificationsImage" v-for="item in specs">
						<view class="size">
							<view class="text">
								{{item.name}}:
							</view>
							<view class="image" v-for="index in item.values">
								<text @tap="getskuId(index.name)">
									{{index.name}}
								</text>
							</view>	
						</view>
				</view>
				
				<view class="specificationsImage" v-for="item in Sele">
						<view class="size">
							<view class="text">
								{{item.id}}:
							</view>
							<view class="image" v-for="index in item.specs">
								<text @tap="getskuId(index.name)">
									{{index.valueName}}
								</text>
							</view>	
						</view>
				</view>
				
				
				<view class="text" style="margin: 20rpx auto;"  >
							选中: <text  style="margin-right: 20rpx;" v-for="item in Select">{{item.title}}</text> 
				</view>
				
				
				<view class="number">
					<view class="box">
						<text style="display: inline-block; width: 30%" @tap="quantityReduce">-</text>
						<text style="display: inline-block; width: 40%; font-size: 25rpx;">{{sum}}</text>
						<text style="display: inline-block; width: 30%" @tap="quantityPlus">+</text>
					</view>
				</view>
				
				<view class="confirm">
					<button type="warn" @tap="close(commodity,btn,Select)">{{btn}}</button>
				</view>
			</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	
	
	
	//调用父的关闭窗口函数
	const popos = defineProps({
		close:Function,
		sum:Number,
		list:[Array,Object],
		specs:[Array,Object],
		quantityPlus:Function,
		quantityReduce:Function,
		btn:String,
		SelectContent:Object,
		skus:[Array,Object]
	})
	
	console.log(popos.specs);
	console.log(popos.skus);
	//选中内容存放
	const Select = ref([''])
	
	//skuid
	const commodity= ref('')
	
	const Sele = ref({})
	
	const getskuId = (name)=>{
		
		
		const foundItems = popos.skus.filter(item => item.specs.some(spec => spec.valueName === name))
		
		const newData = foundItems.map(item => ({  
		  ...item,  
		  specs: item.specs.filter(spec => spec.valueName !== name)  
		}));  
		
		console.log(foundItems);
		Sele.value = newData
		console.log(Sele.value,name);
	}
</script>

<style lang="scss">
	.uni-popup__wrapper{
			width: 100%;
			// height: 400rpx;
			.specifications{
				width:95%;
				padding: 10rpx;
				margin: 0 auto;
				.title{
					width:100%;
					height: 200rpx;
					display: flex;
					align-items: center;
					.image{
						width: 25%;
						height: 85%;
						border-radius: 10rpx;
					}
					.text{
						flex: 1;
						height: 85%;
						margin-left: 20rpx;
						.p{
							display: flex;
							align-items: center;
						}
					}
				}
				.color{
					width: 100%;
					margin-top: 10rpx;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					.image{
						margin: 10rpx;
						width: 15%;
						height: 100rpx;
						
					}
				}
			
				.size{
					width: 100%;
					margin-top: 10rpx;
					// border: 1px solid #ccc;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					.image{
						margin: 10rpx;
						padding: 10rpx;
						text-align: center;
						border: 1px solid #ccc;
					}
					// .image:hover{
					// 	background-color: #ccc;
					// }
				}
				
				.number{
					width: 100%;
					height: 100rpx;
					// border: 1px solid #ccc;
					
					.box{
						// text-align: right;
						float:right;
						margin-right: 30rpx;
						width: 200rpx;
						height: 50%;
						border: 1px solid #ccc;
						text-align: center;
						line-height: 50rpx;
						// align-items: center;
						font-size: 30rpx;
						margin-top: 20rpx;
					}
				}
			}
		}
</style>
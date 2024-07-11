<template>
	<view class="product" v-if="GoodsList">
		<view class="productMaxImg">
			<view class="image">
				<view class="Maximage" >
					<image class="Maximage" :src="MaxImage || GoodsList.mainPictures[0]" mode="aspectFill"></image>
				</view>
					
				<view class="minimage">
					<view class="minimage" v-for="item in GoodsList.mainPictures" @tap="MiniImage(item)">
						<image lazy-load  style="width: 100%; height: 100%;" :src="item" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="productDatali">
			<view class="text">
				<view class="title">
					<text class="title">{{GoodsList.name}}</text>
				</view>
				
				<view class="Mintitle">
					<text class="Mintitle">{{GoodsList.desc}}</text>
				</view>
				<view class="pitce">
					<text class="pitce">{{GoodsList.price}}</text>
					<text>{{GoodsList.oldPrice}}</text>
				</view>
				
			</view>
			<view class="specifications">
				<view class="text" @tap="open('确定')">
					<text class="text">请选规格：朱兵12312312311</text>
				</view>
				<view class="right">
					<uni-icons type="right" size="15"></uni-icons>
				</view>
			</view>
			
		</view>
		
		<view class="details">
			<view class="detailsTitle">
				商品详情
			</view>
			<view class="image">
				<view style="width: 100%; height: 100%;" v-for="item in GoodsList.details?.pictures">
					<image lazy-load style="height: 100px;" :src="item" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		
		<view class="foot">
			<uni-goods-nav 
			:fill="true"  
			:options="options"
			:buttonGroup="buttonGroup" 
			@click="onClick" 
			@buttonClick="buttonClick"
			/>
		</view>
		
		<!-- 加入购物车 立即购买 选着规格的组件 -->
		<uni-popup background-color="#fff"  ref="specifications" type="bottom" border-radius="10px 10px 0 0">
			
			<Specification-selection 
			:close="confirm"
			:sum='quantity' 
			:list="GoodsList"
			:specs="GoodsList.specs"
			:quantityPlus="quantityPlus"
			:quantityReduce="quantityReduce"
			:btn="btn"
			:SelectContent="Select"
			:skus='GoodsList.skus'
			> 
			</Specification-selection>
			
		</uni-popup>
		
	</view>
	
	
	
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import {ref} from 'vue';
	import {AipGetGoods,AipGetcart} from '@/api/rabbit.js'
	
	//商品导航栏
	const options = ref([
		{
		icon: 'headphones',
		text: '客服'
		},
		{
			icon: 'cart',
			text: '购物车',
			info: 3
		},
		]) 
		
	const buttonGroup = ref([
		{
	      text: '加入购物车',
	      backgroundColor: '#ff0000',
	      color: '#fff'
	    },
	    {
	      text: '立即购买',
	      backgroundColor: '#ffa200',
	      color: '#fff'
	    },
		]) 
		
		
		const onClick = (e)=>{
			
		}
		
		//点击加入购物车或者点击立即购买
		const buttonClick = (e)=>{
			console.log(e.content.text,e.index);
			open(e.content.text,e.index)
		}
		
	
	//获取商品数据
	const GoodsList = ref([])
	const getGoods = async (id)=>{
			const res = await AipGetGoods(id)
			console.log(res.result);
			GoodsList.value = res.result
		}
		
		//使用id 调用获取数据
		onLoad((e)=>{
			console.log(e.id)
			getGoods(e.id)
		})
		
	//点击小图更换大图
	const MaxImage = ref('')
	//点击小图更换大图
	const MiniImage = (image)=>{
			console.log(image);
			MaxImage.value = image
		}
		
	
		//弹出层
		const specifications = ref(null)
		
		const btn = ref('')
		//打开弹出层
		const open = (btnName)=>{
				
				btn.value = btnName
				specifications.value.open('buttom')
				
			}
			
		//skuid存放处
		const skuid = ref({})
		
		const Select = ref()
		//关闭弹出层
		const confirm = async (skuiId,btn,SelecT)=>{
				
				skuid.value = {skuId:skuiId,count:quantity.value}
				
				if(skuiId === ''){
					return uni.showToast({
						title:'请选规格',
						icon:'none',
						duration:2000
					})
				}
				
				Select.value = SelecT
				
				specifications.value.close()
				
				
				const res = await AipGetcart(skuid.value)
				console.log(skuid.value);
				console.log(res)
			}
			
		
		//数量
		const quantity = ref(1)
		//数量加一
		const quantityPlus = ()=>{
				quantity.value++
		}
		//数量减一
		const quantityReduce = ()=>{
			if(quantity.value<=1){
				return 
			}
				quantity.value--
		}	
	
		
</script>

	

<style lang="scss">
	.product{
		padding: 10rpx;
		background-color: rgba(39, 187, 154, 0.1);
		.productMaxImg{
			background-color: #fff;
			border-radius: 10rpx;
			padding: 20rpx;
			width: 90%;
			margin: 20rpx auto;
			height: 500rpx;
			.image{
				display: flex;
				// padding: 20rpx;
				.Maximage{
					width: 85%;
					height: 500rpx;
					// padding: 20rpx;
					.Maximage{
						width: 100%;
					}
				}
				.minimage{
					flex: 1;
					.minimage{
						margin-left: 6.5rpx;
						width: 100%;
						height: 19%;
						margin-bottom: 6.5rpx;
						
					}
				}
			}
			
		}
		.productDatali{
			width: 90%;
			padding: 20rpx;
			margin: 0 auto;
			border-radius: 10rpx;
			background-color: #fff;
			.text{
				
				.title{
					font-size: 35rpx;
				}
				.Mintitle{
					font-size: 20rpx;
					color: #aaa;
					margin: 20rpx 0;
				}
				.pitce{
					color: #aaa;
					font-size: 25rpx;
					.pitce{
						width: 300rpx;
						font-size: 30rpx;
						margin-right: 20rpx;
						color: red;
					}
				}
				
			}
			.specifications{
				width: 100%;
				height: 10%;
				// border: 1px solid #ccc;
				margin: 20rpx auto;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				.text{
					width: 70%;
					font-size: 25rpx;
					flex:1;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.right{
					text-align: right;
					
				}
			}
			
		}
		.details{
			width: 90%;
			// height: 600rpx;
			margin: 20rpx auto;
			// border: 1px solid #ccc;
			border-radius: 10rpx;
			padding: 20rpx;
			background-color: #fff;
			.detailsTitle{
				width: 95%;
				padding: 15rpx;
				border-bottom: 1px solid #ccc;
			}
			.image{
				margin: 10rpx auto;
				text-align: center;	
				
			}
		}
		.foot{
			width: 100%;
			position: fixed;
			bottom:0;
			left: 0;
		}
		
		//选择规格弹出层
		
	}
</style>

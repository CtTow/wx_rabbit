import { request } from '@/utils/request.js'

export function AipGetLogin(){
	return request({
		url:"/login",
		method:"POST",
		data:{
			  "account": "xiaotuxian001",
			  "password": "123456"
		}
	})
}



export function AipGethead(){
	return request({
		url:'/home/category/head',
	})
}
//获取商品详情数据
export function AipGetGoods(id){
	return request({
		url:'/goods',
		data:{
			id
		}
	})
}

//获取首页banner图
export function AipGetBanner(){
	return request({
		url:'/home/banner',
	})
}

//获取新鲜好物
export function AipGetFresh(){
	return request({
		url:'/home/new',
	})
}

//获取热门品牌
export function AipGetbrand(){
	return request({
		url:'/home/brand',
		data:{
			limit:4
		}
	})
}

//获取热门品牌
export function AipGethot(){
	return request({
		url:'/home/hot',
	})
}
//获取二级分类页面
export function AipGetcategory(id){
	return request({
		url:'/category',
		data:{
			id
		}
	})
}

//加入购物车
export function AipGetcart(data){

	return request({
		url:'/member/cart',
		method:"POST",
		data
	})
}
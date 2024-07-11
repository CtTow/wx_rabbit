
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

export function request (config={}) {
	
	let {url,method,header,data={},params={}} = config
	
	let token = uni.getStorageSync('token')
	
	if(token){
		return new Promise((resolve,reject)=>{
				 uni.request({
					url:baseURL + url,
					method,
					header:{
						// 'Accept':'application/json',
						'content-type': 'application/json', // 根据API的要求设置content-type  
						'Authorization': `Bearer ${token}` // 添加 token 到 Authorization 头部 
					},
					data,
					params,
					success:res=>{
						resolve(res.data)
						
					},
					fail:err=>{
						reject(err)
					}
				})
			})
	}else{
		return new Promise((resolve,reject)=>{
				 uni.request({
					url:baseURL + url,
					method,
					header:{
						
					},
					data,
					params,
					success:res=>{
						resolve(res.data)
						
					},
					fail:err=>{
						reject(err)
					}
				})
			})
	}
	
}

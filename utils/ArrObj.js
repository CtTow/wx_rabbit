export const ArrPushObj = (ArrObj)=>{
			if(ArrObj){
				let list = []
				ArrObj.map((index)=>{
						list.push(...index.goods)
					})
				return list
			}else{
				console.error('传入正确的值')
			}
		}
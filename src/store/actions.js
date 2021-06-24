const actions = {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //查找是否添加过
      let oldProduct = context.state.cartList.find((item => item.iid === payload.iid))
      //  判断oldProduct
      if(oldProduct){
        // oldProduct.count+=1
        context.commit('addCounter',oldProduct)
        resolve('当前商品数量+1')
      } else {
        payload.count=1
        payload.checked = true
        // context.state.cartList.push(payload)
        context.commit('addTocart',payload)
        resolve('添加了新的商品')
      }
    })

  }
}

export default actions


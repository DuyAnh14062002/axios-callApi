import * as types from './../constants/ActionType'
var initialState = [];

const findIndex = (products, id) =>
 {
     var result = -1
     products.forEach((product, index) =>{
         if(product.id === id)
         {
             result = index
         }
     })
     return result
 }
const products = (state = initialState, action) =>{
	var{id,product} = action
	var index = -1
	switch(action.type){
        case  types.FETCH_PRODUCT :
           state = action.products
           return[...state]
        case types.DELETE_PRODUCT :
           index = findIndex(state,id )
           if(index !== -1)
           {
           	 state.splice(index, 1)
           }
           return [...state]
         case types.ADD_PRODUCT :
           state.push(action.product)
           return [...state]
         case types.UPDATE_PRODUCT:
           index = findIndex(state, product.id)
           state[index] = product
           return [...state]
		default : return [...state]
	}
}

export default products
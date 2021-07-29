import * as types from'./../constants/ActionType'
import callApi from './../utils/apiCaller'
export const actFetchProductRequest = () =>
{
	return (dispatch) =>
	{
		return(
           callApi('products', 'get', null).then(res =>{
           	  dispatch(actFetchProduct(res.data))
           })
		)
	}
}
export const actFetchProduct = (products) =>
{
	return{
		type : types.FETCH_PRODUCT,
		products
	}
}
export const actDeleteProductRequest = (id) =>
{
	return (dispatch) =>
	{
		return(
           callApi(`products/${id}`, 'DELETE', null).then(res =>{
           	  dispatch(actDeleteProduct(id))
           })
		)
	}
}
export const actDeleteProduct = (id) =>
{
	return{
		type : types.DELETE_PRODUCT,
		id
	}
}
export const actAddProductRequest = (product) =>
{
	return dispatch =>
	{
		callApi(`products`, 'POST', product).then(res =>{
			dispatch(actAddProduct(product))
		})
	}
}
export const actAddProduct = (product) =>
{
	return{
		type : types.ADD_PRODUCT,
		product
	}
}
export const actGetProductRequest = (id) =>
{
	return dispatch =>
	{
		return(
           callApi(`products/${id}`, 'GET', null).then(res =>{
           	 dispatch(actGetProduct(res.data))
           })
		)
	}
}
export const actGetProduct = (product) =>
{
	return{
		type : types.EDIT_PRODUCT,
		product
	}
}
export const actUpdateProductRequest = (product) =>
{
	return dispatch =>
	{
		return(
           callApi(`products/${product.id}`, 'PUT', product).then(res =>{
           	  dispatch(actUpdateProduct(product))
           })
		)
	}
}
export const actUpdateProduct = (product) =>
{
	return{
		type: types.UPDATE_PRODUCT,
		product
	}
}
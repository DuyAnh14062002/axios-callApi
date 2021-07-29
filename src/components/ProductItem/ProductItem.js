import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ProductItem extends Component{
   onDelete = (id) =>
   {
      if(confirm('bạn chắc chắn muốn xóa ?')){//eslint-disable-line
         this.props.onDelete(id)
      }
   }
  render(){
   var {product, index} = this.props
   var statusName = product.status ? 'còn hàng' : 'hết hàng'
   var statusClass = product.status ? 'success' : 'warning'
    return (
       <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
             <span className= {`label label-${statusClass}`}>{statusName}</span>
          </td>
          <td>
             <Link to = {`product/${product.id}/edit`} className="btn btn-success">sửa</Link>&nbsp;
             <button type="button" className="btn btn-danger" onClick = {() => this.onDelete(product.id)}>xóa</button>
          </td>
        </tr>
    )
  }
}


export default ProductItem
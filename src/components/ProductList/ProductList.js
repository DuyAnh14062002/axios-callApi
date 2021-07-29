import React, {Component} from 'react'
class ProductList extends Component{
  render(){
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sách sản phẩm</h3>
        </div>
        <div className="panel-body">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
             {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default ProductList
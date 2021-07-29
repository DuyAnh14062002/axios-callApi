import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Menu extends Component{
  render(){
    return (
    <div className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand">CALL API</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to = "/">trang chủ</Link>
            </li>
            <li>
              <Link to = "/product-list">Danh sách sản phẩm</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Menu
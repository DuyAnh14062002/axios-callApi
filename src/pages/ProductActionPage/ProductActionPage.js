import React, {Component} from 'react'
import callApi from './../../utils/apiCaller'
import {Link} from 'react-router-dom'
import {actAddProductRequest,actGetProductRequest,actUpdateProductRequest} from './../../action/index'
import {connect} from 'react-redux'
class ProductActionPage extends Component{
  constructor(props)
  {
    super(props)
    this.state = {
         id : '',
         txtname : '',
         txtprice : '',
         status : ''
    }
  }
  componentDidMount()
  {
    var {match} = this.props
    if(match)
    {
      var id = match.params.id
      this.props.onEditProduct(id)
    }
  }
  componentWillReceiveProps(nextProps)
  {
      if(nextProps && nextProps.itemEditting)
      {
        var{itemEditting} = nextProps
        this.setState({
          id : itemEditting.id,
          txtname : itemEditting.name,
          txtprice : itemEditting.price,
          status : itemEditting.status
        })
      }
  }
  onChange = (e) =>
  {
    var target = e.target
    var name = target.name
    var value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name] : value
    })
  }
  onSave = (e) =>
  {
    e.preventDefault()
    var {history} = this.props
    var {id,txtname,txtprice,status} = this.state
    var product = {
      id : id,
      name : txtname,
      price : txtprice,
      status : status
    }
    if(id)
    {
     this.props.onUpdateProduct(product)
    }else
    {
      this.props.onAddProduct(product)
    }
     history.goBack()
  }
  render(){
    var {txtname,txtprice,status} = this.state
    return (
       <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <form action="" method="POST" role="form" onSubmit = {this.onSave}>  
            <div className="form-group">
              <label htmlFor="">Tên sản Phẩm</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="name" 
              name = "txtname" 
              value = {txtname}
              onChange = {this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Giá</label>
              <input 
              type="number" 
              className="form-control" 
              placeholder="price" 
              name = "txtprice" 
              value = {txtprice}
              onChange = {this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">trạng thái</label>
            </div>
            <div className="checkbox">
              <label>
                <input 
                type="checkbox" 
                name = "status"
                value = {status}
                onChange = {this.onChange}
                checked = {status}
                />
                 còn hàng
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
            <Link to = "/product-list">
               <button type="button" className="btn btn-danger">trở lại</button>
            </Link>
          </form>
       </div>
    )
  }
}

const mapStateToProps = state =>
{
  return{
    itemEditting : state.itemEditting
  }
}
const mapDispatchToProps = (dispatch, props) =>
{
  return{
    onAddProduct : (product) =>
    {
      dispatch(actAddProductRequest(product))
    },
    onEditProduct : (id) =>{
      dispatch(actGetProductRequest(id))
    },
    onUpdateProduct : (product) =>
    {
      dispatch(actUpdateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage)
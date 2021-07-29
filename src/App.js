import React, {Component} from 'react'
import './App.css';
import Menu from './components/Menu/Menu'
import ProductList from './components/ProductList/ProductList'
import routes from './routers'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Menu />
          <div className="container">
           <div className="row">
             {this.showContentMenu(routes)}
         </div>
      </div>
    </div>
      </Router>
    )
  }
  showContentMenu = (routes) =>
  {
    var result = null
     if(routes.length > 0)
     {
       result = routes.map((route, index) =>{
         return(
           <Route 
            key = {index}
            exact = {route.exact}
            component = {route.main}
            path = {route.path}
         />
        )
       })
     }
    return <Switch>{result}</Switch>
  }
}


export default App
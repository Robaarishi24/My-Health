import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// Import the components
import Home from './components/Home'
import Header from './components/layout/Header';

import NutritionaInformation from './components/NutritionaInformation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
    }
  }
  
  // Change the text in input box
  onTextBoxChange = (e) => {
    console.log('Text Change', e.target.value);
    this.setState({
      newItem: e.target.value
    });
  }
       

// add new items
  addItem = (e) => {
  // e.preventDefault();
  console.log('Add Item!');
  this.setState({
    items: [...this.state.items, this.state.newItem],
    newItem: '',
  });
}


// Delete one Item
deleteItem = (id) => {
  console.log("Item Deleted")
  const deleted = this.state.items.filter(item => item!==id)
  
this.setState({ 
 items:deleted
});
}

// Delete All Items
deleteAllItems = (id) => {
  console.log("Items Deleted")
this.setState({ 
 items:[]
});
}

//to delete selected items 
deleteSelectedItems = (e) => {
  console.log('delete befire map');
  // this.state.items.map((item, index)  =>{
  //   console.log(item);
    
  // })
}

  render() { 
    return (
        <Router>
          <Header/>

          <Route path="/healthy" component={NutritionaInformation}/>
          <Route exact path="/My-Health" 
          render={ ()=>(
         <Home 
          onTextBoxChange={this.onTextBoxChange} 
          addItem ={this.addItem} 
          newItem={this.state.newItem} 
          task={this.state.items} 
          deleteItem={this.deleteItem}
          deleteAllItems={this.deleteAllItems}
          deleteSelectedItems = {this.deleteSelectedItems}/>)}
          />
        </Router> 
    );
  }
}

 

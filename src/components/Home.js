import React from 'react';
import ListItem from './ListItem';
export default class Home extends React.Component {
    render() { 
        const deleteFunction = this.props.deleteItem;
        const allItems = this.props.task.map(function(element,index){
           return (
           <div> 
               <ListItem taskName ={element} key={index} deleteItem={deleteFunction}/> 
               </div>
               )
       });
        return ( 
            <div>
                {allItems}
                 <form>
          <input className = "inputText" 
                 type="text"
                 placeholder=" Add Your Program !"
                 value={this.props.newItem}
                 onChange={this.props.onTextBoxChange}
                 />
          <button type="button" className="btn-sm btn-outline-secondary"  
          onClick={()=>this.props.addItem()}>Add</button>
        </form>
            </div>
         );
    }
}
 

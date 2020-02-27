import React from 'react';

export default class ListItem extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        checked : false,
        // isEditing : false 
        }
    }

    
// the box is selected 
    handleChecked = ()=>{
    this.setState({
    checked : !this.state.checked
      })
    }

    // // editing items
    // editingItem = ()=>{
    //     console.log("Editing ")
    //     this.setState({
    //         isEditing : !this.state.isEditing
    //     })
        
       
    // }

    render(){
        return (
            
            <div style={{
            textDecoration: this.state.checked ? "line-through" : ""}}> 
            <li className="col-6 mb-5 list-group-item  items">
            <input type="checkbox" 
            className ="checkedBox"

            onChange={this.handleChecked}/> 
           {this.props.taskName}
            
            

                 {/* /* editing item */ }
                 
            {/* <button type="button" className="btn-sm btn-success delbtn"
            onClick={()=>this.editingItem()}>
                 <i className ="fa fa-pencil"/>
            </button> */}


            <button type="button" className="btn-sm btn-danger delbtn"
             onClick={()=>this.props.deleteItem(this.props.taskName)}>
                 <i className ="fa fa-trash"/>
            </button>
            </li>
            {/* <input type = "text" value = {this.props.taskName}/> */}
            </div>
        );
    }
}
import React from 'react';
export default class ListItem extends React.Component {
    render(){
        return (
            <div>
            <li className="col-11 mb-3 list-group-item  items">
            <input type="checkbox"/> {this.props.taskName}
            
            <button type="button" className="btn-sm btn-danger delbtn"
             onClick={()=>this.props.deleteItem(this.props.taskName)}>
                 Delete
            </button>
            </li>
            </div>
        );
    }
}
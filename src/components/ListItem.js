import React from 'react';
export default class ListItem extends React.Component {
    render(){
        return (
            <div>
            <li className="col-11 mb-3 list-group-item list-group-item-action list-group-item-info">
            <input type="checkbox"/>  {this.props.taskName}
            </li>
            </div>
        );
    }
}
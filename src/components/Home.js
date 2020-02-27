import React from 'react';
import ListItem from './ListItem';


export default class Home extends React.Component {
    
//change the state of cheackbox
    handleDeletState = () => {
        console.log('HANDKE DELEASTE STATE');
        // this.setState({
        // selectedState : true
        // });
        this.props.deleteSelectedItems()
    }

    render() { 
        const deleteFunction = this.props.deleteItem;
        const allItems = this.props.task.map((element,index)=>{
           return (
           <div> 
               <ListItem taskName ={element} 
               key={index} 
               deleteItem={deleteFunction}
            //    selectedState={this.state.selectedState}
               /> 
               </div>
               )
       });


        return ( 
            <div>
                 <form>
                    <div className="input-group inputText ">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white ">
                                <i className= "fa fa-book "></i>
                            </div>
                        </div>
                <input type="text" 
                className="fa fa-book textbox "  
                placeholder=" Add Your Program !"
                 value={this.props.newItem}
                 onChange={this.props.onTextBoxChange}></input>
                    </div>
                    </form>

          <button type="button" className="btn-sm btn-outline-secondary"  
          onClick={()=>this.props.addItem()}>Add <i className ="fa fa-plus-square" ></i>
          </button>
          {allItems}

          {/* <button type="button" className="btn-sm btn-primary"  
          onClick={() =>this.handleDeletState()}>Delete Selected Items</button> */}

          <button type="button" className="btn-sm btn-danger"  
          onClick={()=>this.props.deleteAllItems()}>Clear The List</button>

        
      
            </div>
         );
    }
}
 

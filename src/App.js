import React from 'react';
import ListContainer from './components/ListContainer';

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
  e.preventDefault();
  console.log('Add Item!');
  this.setState({
    items: [...this.state.items, this.state.newItem],
    newItem: ''
  });
}
  render() { 
    return (
      <div> 
        <div>
          <header>
My health program
</header>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">Home</li>
    <li class="breadcrumb-item">Library</li>
  </ol>
</nav>
        </div>
        <ListContainer task={this.state.items} />
        <form>
          <input className = "inputText" 
                 type="text"
                 value={this.state.newItem}
                 onChange={this.onTextBoxChange}
                 />
          <button type="button" className="btn-sm btn-outline-secondary"  onClick={this.addItem}>Add</button>
          <button type="button" class="btn-sm btn-outline-danger">Delete</button>
        </form>
      </div>
    );
  }
}
 

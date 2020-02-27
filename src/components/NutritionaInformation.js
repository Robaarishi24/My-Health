import React from 'react'
import axios from 'axios';

export default class NutritionaInformation extends React.Component {
  constructor(props){
super(props);
this.state = {
  data:[],
  searchFood : ''
}
  }
  clicked = (e) => {
    e.preventDefault();
    console.log(e.target.value)                                
    this.setState({
      searchFood : e.target.value
    });
    this.componentWillMount()
  }

  handleChange =(e)=>{
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
      searchFood : e.target.value
    });
  }

  componentWillMount = () =>{
  axios({
    method: 'get',
    url: `https://api.edamam.com/api/food-database/parser?ingr=${this.state.searchFood}&app_id=93dabb21&app_key=9845ae1d70b3b1406888f41164a9f9f7`
  })
    .then(res => {
      const foodData = res.data.hints
      console.log('SUCC: ', foodData);
      this.setState({
        data:foodData,
      })
    })
    .catch(err => {
      console.log('ERROR: ', err);
    });
  }

  render() {
    const allresult = this.state.data.map((data , index) =>{
      return(
        
        <div className="card">
    <div className="card-body">
      <h4>Title </h4> <p>{data.food.label}</p>
      <h4>Kcal </h4> <p>{data.food.nutrients.ENERC_KCAL}</p>
      
      </div>
    </div>
      );
    });

    return (
      <div>
        <div>
        <input type = "text" 
      className ="input-search textbox"
      placeholder="Search For Food ..."
       value = {this.state.searchFood} 
       onChange = {this.handleChange} >
       </input>

      <button  
      type="button" 
      className="btn btn-info btn-sm search"
      onClick = {this.clicked}>
        <i className="fa fa-search"></i>
      </button>
      </div>

  <div className="card-group">
    {allresult}
</div>
</div>
    )
  }
}

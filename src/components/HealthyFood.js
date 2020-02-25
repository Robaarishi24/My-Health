import React from 'react'
import axios from 'axios';
export default class HealthyFood extends React.Component {
  constructor(props){
super(props);
this.state = {
  title :'',
  kal : ''

  
}
  }
  componentWillMount = () =>{
  axios({
    method: 'get',
    url: 'https://api.edamam.com/api/food-database/parser?ingr=orange&app_id=93dabb21&app_key=9845ae1d70b3b1406888f41164a9f9f7'
  })
    .then(res => {
      const foodData = res.data.hints[0].food
      console.log('SUCC: ', foodData);
      this.setState({
        title : foodData.label,
        kal : foodData.nutrients.ENERC_KCAL
    
      })
    })
    .catch(err => {
      console.log('ERROR: ', err);
    });
  }

  render() {
    return (
      <div>
         <h3>Healty Food</h3>
  <h2>Title : {this.state.title}</h2>
  <h2>Kcal : {this.state.kal}</h2>
    </div>
    )
  }
}
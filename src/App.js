import React from 'react';
import Grid from './Components/Grid'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      generation:0
    }
  }
  render(){
    return(
      <div className="App">
        <h1>The Game Of Life</h1>
        {/* All the components will come here */}
        <Grid />
        <h1>{this.state.generation}</h1>
      </div>





    )
  }



}

export default App;

import React from 'react';
import Grid from './Components/Grid'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.speed=100;
    this.rows=30;
    this.cols=50;


    this.state={
      generation:0,
      gridFull:Array(this.rows).fill().map(()=>Array(this.cols).fill(false))
    
    }




  }
  render(){
    return(
      <div className="App">
        <h1>The Game Of Life</h1>
        {/* All the components will come here */}
        <Grid
        girdFull={this.state.gridFull}
        rows={this.rows}
        cols={this.cols}
        selectBox={this.selectBox}
        />
        <h1>{this.state.generation}</h1>
      </div>





    )
  }



}

export default App;

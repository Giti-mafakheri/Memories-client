import React,{Component} from 'react';
//const Component= React.Component
class Clickr extends Component {
  constructor(){
   super();// set up the actual component
    this.state={
      clicks : 0
    };
    this._incrementCount = this._incrementCount.bind(this);
  }

//methods that start with an underscore are considered event handlers.
_incrementCount(){
  this.setState({clicks:this.state.clicks+1});
}


  render(){
    return(
      <div class="button">
      <button onClick ={this._incrementCount}>
       {this.state.clicks} clicks
       </button>
      </div>

    );
  }
}


export default Clickr;

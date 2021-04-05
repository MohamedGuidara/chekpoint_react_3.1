import './App.css';
import React, { Component } from 'react'


 
export class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      Person:
      {
        img: 'logo192.png',
        Name: 'Mohamed Guidara',
        Bio: 'Ingenieur',
        Proffession: 'fullstack js developer'
      },
       
      show: false,

      count: 0 ,

      
      coun: 0 ,
    }
  }

  componentDidMount() {
    setInterval(() => { this.setState({ count: this.state.count<59 ? this.state.count + 1 :0}) }, 1000);
    setInterval(() => { this.setState({ coun: this.state.coun + 1 }) }, 60000);
  }


  toggle = () => this.setState({ show: !this.state.show })
  
   
  render() {
    return (
      <div id="page-wrap">
       <h4 className="counter">{this.state.coun}:{this.state.count}</h4>
        <button className="btn" class="btn btn-outline-dark" onClick={this.toggle}> {this.state.show ? "hide me" : "show me "}  </button> <br/>
        {this.state.show ? (
          <> <img className="img" src={this.state.Person.img} alt=""/>
            <ul className="list-group">
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Full Name:</h4>{this.state.Person.Name}</li>
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Bio:</h4>{this.state.Person.Bio}</li>
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Proffession:</h4>{this.state.Person.Proffession}</li>
              </ul> </>)
          : null}
      </div>
    )
  }
}
 
 export default App

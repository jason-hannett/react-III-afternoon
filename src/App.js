import React, {Component} from 'react'
import Users from './Components/Users'


class App extends Component{
    constructor(){
      super()

      this.state = {
        users: []
      }
    }

    render(){
    return(
      <div>
      <Users/>
      </div>
    )
  }
}

export default App
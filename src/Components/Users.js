import React, {Component} from 'react'
import UsersDisplay from './UsersDisplay'
import data from '../Components/Data'
import './App.css'

class Users extends Component{

        constructor(){
            super()

            this.state = {
                users: data,
                index: 0
            }
        } 
        
        previousSlide = () => {
            this.setState({
                index: this.state.index -1
            })
            if (this.state.index <= 0){
                this.setState({
                    index: 24
                })
            }
        }
        
        nextSlide = () => {
            this.setState({
                index: this.state.index +1
            })
            if (this.state.index >= 24){
                this.setState({
                    index: 0
                })
            }
        }
        
        render(){
            
      
        const currentUser = this.state.users[this.state.index]
        console.log(this.state.index)
        return(
            
           <div className="bottom-black-box">
               <UsersDisplay user={currentUser}/>
               <section className="button-container">
                <div>
                    <button onClick={() => this.previousSlide()}> Previous </button>
                </div>
                <div className="button-box">
                    <button className="button-color">Edit</button>
                    <button className="button-color">Delete</button>
                    <button className="button-color">New</button>
                </div>
                <div>
                    <button onClick={() => this.nextSlide()}>Next</button>
                </div>
            </section>

               
           </div>
        )
    }
}
export default Users
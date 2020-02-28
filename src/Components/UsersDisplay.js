import React from 'react'
import './App.css'


function UsersDisplay(props){
    // console.log(props.user.favoriteMovies[0])
    return(
    <div>
        <header>
            <nav>Home</nav>
        </header>
        <div className="black-box">
            <div className="user-container">
                <div className="counter">{props.user.id}/25</div>
                <h1>{props.user.name.first} {props.user.name.last}</h1>
                <p>From: {props.user.city}, {props.user.country}</p>
                <p>Job Title: {props.user.title}</p>
                <p>Employer: {props.user.employer}</p>
                <h2>Favorite Movies</h2>
                <ol>
                    <li>{props.user.favoriteMovies[0]}</li>
                    <li>{props.user.favoriteMovies[1]}</li>
                    <li>{props.user.favoriteMovies[2]}</li>
                </ol>
            </div>
    

        </div>
            
    </div>
    )
}

export default UsersDisplay

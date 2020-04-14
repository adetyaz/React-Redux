import React from 'react'
import { Link } from 'react-router-dom'



const HomePage =()=> (
    <div className="jumbotron">
        <h1>Pluralsight</h1>

        <Link to="/" className="btn btn-primary btn-lg">
            Learn More
        </Link>
    </div>
);


export default HomePage;
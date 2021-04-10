import React from 'react';

export default function NavBar(props){

    const {titulo} = props;

    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <img src="https://i.pinimg.com/originals/84/47/05/8447057be0414c9edc4d3ab3e96d3403.png" alt="" width="160" height="80" className="d-inline-block align-text-top"/>
                {titulo}
            </div>
      </nav>
    );
}
import React from 'react';
// Integrating link from react-router-dom installed.
import {Link} from 'react-router-dom';


const Header = () =>{
    return(
        <div className = "headerWrapper">
            <div className = "container">
                <div className = "row">
                    <div className = "col-6">
                        <div className= "navWrapper">
                            <h1>REACT CRUD AND ROUTING</h1>
                        </div>
                    </div>
                        <div className = "col-6">
                            <a href="" className = "btn btn-danger">Add Product</a>
                        </div>
                    </div>
                </div>
            </div>

        
        
    )
}


export default Header;
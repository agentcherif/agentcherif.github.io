import React, { Component } from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';

class Menu extends Component {
    
    render() {
        const Items = [
            {
                title: 'Formation',
                to: '/formation'
            },
            {
                title: 'Projet Réalisé',
                to: '/projet'
            },
            {
                title: 'Compétence',
                to: '/competence'
            }
        ];

        return (
            <div  role="navigation">
                <nav className=" navbar navbar-expand-lg navbar-dark bg-dark wrapper header">
                <Link className="navbar-brand" to="/">Acceuil</Link>
                <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar4">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {
                            Items.map((item,index) =>{ 
                            return(
                                <li className="nav-item ">
                                    <NavLink key={index} className="nav-link" to={item.to}>{item.title}</NavLink>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
export default Menu;

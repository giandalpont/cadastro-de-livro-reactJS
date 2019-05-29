import React, { Component } from 'react'

class Menu extends Component{
    render(){
        return(
            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">Company</a>
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item menu-item-divided pure-menu-selected">
                            <a href="#" className="pure-menu-link">Home</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="#" className="pure-menu-link">Book</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="#" className="pure-menu-link">Author</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Menu
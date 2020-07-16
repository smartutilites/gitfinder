import React from 'react'

const Navbar = (props) => {   
        return (
            <div>
                  <i className={props.icon} /> {props.title}
            </div>
        )
}
Navbar.defaultProps = {
    title : 'Git hub',
    icon : 'fa fa-car'
}

export default Navbar

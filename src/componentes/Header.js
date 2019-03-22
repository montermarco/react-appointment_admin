import React from 'react';
import PropTypes from 'prop-types'

const Header = props => {
    return(
        <h1 className="text-center">{props.title}</h1>
    )
}

Header.propTypes={title: PropTypes.string.isRequired}
export default Header;


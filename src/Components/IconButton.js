import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconButton.css';

function IconButton({ icon, children, onClick, color }) {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }}>
            {icon && <FontAwesomeIcon icon={icon} />} {children}
        </button>
    );
}

export default IconButton;
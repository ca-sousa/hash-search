import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="header-content">
                <strong>{props.title}</strong>
            {props.children}
            </div>

        </header>
    );
}

export default PageHeader;
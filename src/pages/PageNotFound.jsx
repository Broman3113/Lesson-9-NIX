import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            Not Found <Link to="/">Go back to main page</Link>
        </div>
    );
};

export default PageNotFound;

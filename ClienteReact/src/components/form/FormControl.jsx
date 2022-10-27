import React from "react";

function FormControl({ className = "", children }) {
    className = `${className} mb-3`;
    return <div className={className}>{children}</div>;
}

export { FormControl };

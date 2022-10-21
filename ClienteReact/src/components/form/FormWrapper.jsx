import { React } from 'react';

export default function FormWrapper({ children, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}


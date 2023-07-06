import React from 'react';
import { useParams } from 'react-router-dom';

export default function SignUp() {
    const {user} = useParams();
    return (
        <div>
            SignUp {user && user}
        </div>
    );
}


import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
    const {prod} = useParams();
    console.log(prod);
    return (
        <div>
            Product1 {prod && prod}
        </div>
    );
}


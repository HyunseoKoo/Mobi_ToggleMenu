import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
    const {prod} = useParams();
    return (
        <div>
            Product {prod && prod}
        </div>
    );
}
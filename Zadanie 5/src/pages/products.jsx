import React, { useEffect, useContext } from 'react';
import './products.css';
import { ProdContext } from '../router';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Products() {
    const { prod, setProd } = useContext(ProdContext);
    const baseURL = "http://localhost:3001";


    useEffect(() => {
        if (prod.length === 0)
            axios.get(baseURL + "/prod")
                .then((response) => {
                    setProd(response.data)
                })
    }, []);
    return (
        <div className='products'>
            <div className='products__container'>
                <table>
                    <thead>
                        <tr className='products__head__tr'>
                            <th className='products__head__th'>Product</th>
                            <th className='products__head__th__center'>Price</th>
                            <th className='products__head__th__center'>Action</th>
                            <th className='products__head__th__center'>in bucket</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prod.map(product => (
                            <tr key={product.name}>
                                <td className='products__head__td'>{product.name}</td>
                                <td className='products__head__td__center'>{product.price}</td>
                                <td className='products__head__td__center'>
                                    <button
                                        onClick={() => {
                                            setProd(prev => prev.map(prod => {
                                                if (prod.name === product.name) {
                                                    return { ...prod, bucket: prod.bucket + 1 }
                                                }
                                                return prod
                                            })
                                            )
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            setProd(prev => prev.map(prod => {
                                                if (prod.name === product.name) {
                                                    return { ...prod, bucket: prod.bucket - 1 }
                                                }
                                                return prod
                                            })
                                            )
                                        }}
                                    >
                                        -
                                    </button>

                                </td>
                                <td className='products__head__td__center'>{product.bucket}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/basket" className="products__link">Go to basket</Link>
            </div>
        </div>
    )
}
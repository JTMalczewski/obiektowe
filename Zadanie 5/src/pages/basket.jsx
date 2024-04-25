import React, { useContext, useEffect } from 'react';
import { ProdContext } from '../router';
import { Link } from "react-router-dom";
import './basket.css';
import axios from "axios";


export default function Basket() {
    const { prod, setProd } = useContext(ProdContext);
    const baseURL = "http://localhost:3001";

    function sendBasket() {
        axios.post(baseURL + "/basket", 4)
        .then((response) => {
            console.log(response.data)
        }
    )}

    useEffect(() => {
        sendBasket();
    }, []);

    return (
        <div className='basket'>
            <div className='basket__container'>
                <table>
                    <thead >
                        <tr className='basket__head__tr'>
                            <th className='basket__head__th'>Product</th>
                            <th className='basket__head__th__center'>in bucket</th>
                            <th className='basket__head__th__center'>price</th>
                            <th className='basket__head__th__center'>Sum price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prod.filter(product => product.bucket > 0).map(product => (
                            <tr key={product.name}>
                                <td className='basket__head__td'>{product.name}</td>
                                <td className='basket__head__td__center'>{product.bucket}</td>
                                <td className='basket__head__td__center'>{product.price}</td>
                                <td className='basket__head__td__center'>{product.price * product.bucket}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <Link to="/products" className="basket__link">Back to shopping</Link>
                    <Link to="/pay" className="basket__link">Pay for the products</Link>
                </div>
            </div>
        </div>
    )
}
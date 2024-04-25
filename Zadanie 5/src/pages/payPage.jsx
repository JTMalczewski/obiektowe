import React, { useContext, useEffect, useState } from 'react';
import { ProdContext } from '../router';
import { Link } from "react-router-dom";
import './payPage.css';
import axios from "axios";


export default function PayPage() {
    const { prod, setProd } = useContext(ProdContext);
    const [sum, setSum] = useState(0);
    const baseURL = "http://localhost:3001";
    let temp = 0;

    useEffect(() => {
        let tempSum = 0;
        prod.filter(product => product.bucket > 0).map(product => {
            tempSum += product.price * product.bucket
        })
        setSum(tempSum)
    }, []);

    function buy() {
            axios.post(baseURL + "/buy", sum)
                .then((response) => {
                    console.log(response.data)
                }
                )
    }

    return (
        <div className='PayPage'>
            <div className='PayPage__container'>
                <h2>You need to pay {sum} zł for:</h2>
                <div>
                    {prod.filter(product => product.bucket > 0).map(product => (
                        <h4 key={product.name}>
                            {product.name} x {product.bucket}
                        </h4>
                    ))}
                </div>
                <div>
                    <Link className='PayPage__buy' to="/" onClick={() => {
                        buy()
                        setProd(prev => prev.map(prod => {
                            return { ...prod, bucket: 0 }
                        })
                        )
                    }}>
                        Buy
                    </Link>
                </div>
            </div>
        </div>
    )
}
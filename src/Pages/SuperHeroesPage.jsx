import { useState, useEffect } from 'react';
import axios from 'axios';

import { Spinner } from '../components';


const SuperHeroesPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("http://localhost:4000/superheroes")
        .then((res) => {
            setTimeout(() => {
                setData(res.data);
                setIsLoading(false);
            }, 3000)
        }).catch((error) => {
            setError(error.message);
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return (
            <Spinner />
        )
    }
    
    if(error) {
        return <Spinner />
    }

    return (
    <>
        <h2>Super Heroes Page</h2>
        {data.map((hero) => {
            return (
                <div key={hero.name}>{hero.name}</div>
            )
        })}
    </>
    )
}

export default SuperHeroesPage;


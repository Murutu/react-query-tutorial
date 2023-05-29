import { useState, useEffect } from 'react';
import axios from 'axios';

import { Navbar, Spinner } from '../components';


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
        <Navbar />
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

/*
// Query Cache
If we navigae from home to the Traditional Super Heroes page . We will see the loading spinner then the list of heroes.
However when we do this again it will show the spinner .  
*/
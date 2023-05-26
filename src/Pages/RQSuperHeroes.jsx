// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from "react-query";
import axios from 'axios';
import { Spinner } from '../components';

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes1")
}

const RQSuperHeroes = () => {
    const {isLoading, data, isError, error} = useQuery("super-heroes", fetchSuperHeroes)

    if(isLoading) {
        return (
            <Spinner />
        )
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {data?.data.map(hero => {
                return (
                    <div key={hero.name}>{hero.name}</div>
                )
            })}
        </>
    )
}

export default RQSuperHeroes

/*
This hook requires atleast 2 arguments.
The 1st argument is a unique key to identify this query
The 2nd argument accepts a function(callback) that returns a promise

With React Query we don't have to manage state variables based on the effect

1st Way
const {isLoading, data} = useQuery("super-heroes", () => {
    return axios.get("")
})

2nd Way

const fetchSuperHeroes = () => {
    return axios.get("")
} 

const { isLoading , data } = useQuery("", fetchSuperHeroes)

const { isLoading, data, isError, error} = useQuery("", _)

if(isError) {
    return (
        <h3>{error.message}</h3>
    )
}

*/
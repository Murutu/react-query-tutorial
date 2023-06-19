// eslint-disable-next-line no-unused-vars
import React from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { useQuery } from "react-query";
import axios from 'axios';
import { Navbar, Spinner } from '../components';

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
}

const onSuccess = () => {
    toast.success("Successful");
}

const onError = () => {
    toast.error("Not successful");
}



const RQSuperHeroes = () => {
    const {isLoading, data, isError, error, isFetching, refetch} = useQuery("super-heroes", fetchSuperHeroes, {
        onSuccess,
        onError
    });




    console.log({ isLoading, isFetching });

    if(isLoading || isFetching) {
        return (
            <Spinner />
        )
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <Navbar />
            <h2>RQ Super Heroes Page</h2>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <button onClick={refetch}> Fetch Button </button>
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

{data?.data.map(hero => {
    return (
        <div key={hero.name}>{hero.name}</div>
    )
})}

for each hero we render the hero name 
*/
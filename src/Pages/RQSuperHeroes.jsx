// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from "react-query";
import axios from 'axios';
import { Navbar, Spinner } from '../components';

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}

const RQSuperHeroes = () => {
    const {isLoading, data, isError, error, isFetching} = useQuery("super-heroes", fetchSuperHeroes, {
        cacheTime: 5000
    });

    console.log({ isLoading, isFetching });

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
            <Navbar />
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

// Query Cache (How React Query Works with respective caching)
If we navigae from home to the RQ Super Heroes page . We will see the loading spinner then the list of heroes.
However when we do this again it will not show the spinner .
This is because of the query cache react query provides
By default every query result is cached for 5 minutes & react query relies on that cache for subsequent requests.


The 1st time useQuery is fired for "super-heroes" key {isLoading} is set to true & a network request is sent to fetch the data.
When the request is completed it is cached using the react query key & the fetch superheroes function as the unique identifier.
If you know check on the dev tools the data know in this query exists in cache.
Since it does the cached data is immediately returned without isLoading set to true. This is the reason we dont see the spinner for subsequent requests.

However React Query knows that the server data might have updated & the cache might not contain the latest data
So a background refresh is triggered for the same query & if the fetch is successful the new data is updated in the UI.
useQuery provides another boolean flag (isLoading) which is the (isFetching) to indicate the background refetching of the query.

React Query leads to better user experience as there is a list being displayed already 
& then the list updates in the background . A user does not have to see the loading indicator every single time.

// Cache Time
React query sets a default value of 5 minutes for the query cache & that is a good default which you can leave as it is.
If you want to change it you can pass a 3rd argument in useQuery, ,where you can configure multiple properties of which cache time is one of them.

const { isLoading, data, error, isError, IsFetching } = useQuery("super-heroes", fetchSuperHeroes, {
    cacheTime: 5000
})
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from './App.jsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />}/>
    </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  </React.StrictMode>,
)

/*
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}></QueryClientProvider>

Instance of the queryClient => client={queryClient}
client={queryClient} => We now have access to every hook & method react query provides 

import { ReactQueryDevtools } from "react-query/devtools"

<ReactQueryDevtools initialIsOpen={false} position="bottom-right"></ReactQueryDevtools>

initialIsOpen={false} => We don't want the dev tools open by default

import { ReactQueryDevtools } from "react-query/devtools";

*/


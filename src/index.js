import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, Routes, createBrowserRouter , createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/UserCard/Users';
import UserCard from './components/UserCard/UserCard';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} /> {/* Index Route for Home */}
      <Route path='users'>
         <Route index={true} element={<Users/>}/>
         <Route path=':userId' element={<UserCard />} />
      </Route>
      {/* <Route path='users/:userId' element={<UserCard />} /> */}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<div>Not Found</div>} /> {/* 404 Route */}
    </Route>
  )
);
  
  // [{
  //   path:'',
  //   element:<Layout/>,
  //   children:[
  //     {
  //       path:'/',
  //       element:<Home/>
  //     },
  //     {path:'users',
  //       element:<Users/>,
  //       children:[{
  //         path:'/:userId',
  //         element:<UserCard/> ,
  //       }]
  //     }
  //   ]
  // }
  //   ]
// );
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

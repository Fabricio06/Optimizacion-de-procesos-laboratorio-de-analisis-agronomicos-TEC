import React, { useState } from 'react';
import Menu from './Menu';
import Body from './Main';
import Footer from './Footer';


const Login = () => {
    return(
        <div className='App'>
            <header>
                <Menu/>
            </header>
            <main>
                <Body/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
        
);



}

export default Login;
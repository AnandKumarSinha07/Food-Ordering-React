import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  return (
    <>
    <h2 className='login-title'>Oops,sorry Login to find Delicios Food</h2>
    <div className='login-form'>

      <h2>Please Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type='email' placeholder='Email'></input>

        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};



export default LoginForm;

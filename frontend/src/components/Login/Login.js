import React, { useState, useEffect } from "react";

function LoginPage() {
  return (
    <form>
      <div>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Your Password</label>
        <input type="password" id="password" required />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginPage;

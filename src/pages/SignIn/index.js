import React from 'react';

import logo from '~/assets/logo.png';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <strong>seu e-mail</strong>
        <input type="email" placeholder="exemplo@email.com" />
        <strong>sua senha</strong>
        <input type="password" placeholder="*************" />
      </form>

      <button type="submit">Entrar no sistema</button>
    </>
  );
}

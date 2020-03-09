import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import { Container, Content, Menu, Pages, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Menu>
          <Link to="/dashboard">
            <img src={logo} alt="FastFeet" />
          </Link>

          <Pages>
            <Link to="/">
              <li>Encomendas</li>
            </Link>
            <Link to="/">
              <li>Entregadores</li>
            </Link>
            <Link to="/">
              <li>Destinatários</li>
            </Link>
            <Link to="/">
              <li>Problemas</li>
            </Link>
          </Pages>
        </Menu>

        <aside>
          <Profile>
            <strong>Walefe</strong>
            <button type="button">Sair do sistema</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

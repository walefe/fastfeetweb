import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.nav`
  max-width: 452px;
  display: flex;

  img {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #eee;
  }
`;

export const Pages = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 5px;

  li {
    font-size: 15px;
    font-weight: bold;
    color: #999999;
    margin-right: 20px;

    > li:first-child {
      margin-right: 0;
    }

    &:hover {
      color: #444444;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  button {
    border: none;
    background: none;
    color: #de3b3b;
    font-size: 14px;
    margin-top: 5px;
  }
`;

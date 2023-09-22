import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { NavStyled, StyledHeader, NavLinkStyled } from './Layout.styled';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </NavStyled>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </div>
  );
};

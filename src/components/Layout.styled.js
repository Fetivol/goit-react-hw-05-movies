import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #dff3f6;
  border: 1px solid #0078d0;
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
export const NavLinkStyled = styled(NavLink)`
  border: 0;
  color: #0078d0;
  cursor: pointer;
  display: block;
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 36px;
  font-weight: 600;

  padding: 8px 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    font-weight: 800;
  }
  &.active::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #0078d0;
    border-radius: 2px;
  }
`;

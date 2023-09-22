import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.ul`
  margin: 15px;
  padding: 15px;
`;

export const ListWrapper = styled.ul`
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #0078d0;
  border-radius: 8px;
  background-color: #dff3f6;
`;
export const BackLink = styled(NavLink)`
  background-image: linear-gradient(-180deg, #5394c4 0%, #aee6ef 100%);
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #000;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  width: 200px;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
  }
`;

export const LinkStyled = styled(NavLink)`
  border: 0;
  color: #0078d0;
  cursor: pointer;
  display: block;
  font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 15px;
  position: relative;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    font-weight: 800;
  }
  &:active {
    font-weight: 800;
  }
`;

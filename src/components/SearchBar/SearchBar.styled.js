import { styled } from 'styled-components';

export const Form = styled.form`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  width: 500px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 4px;
  padding-right: 4px;
  font: inherit;
  font-size: 20px;
  border: 2px solid #dff3f6;
  outline: none;
`;

export const Button = styled.button`
  display: inline-block;
  width: 100px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  font: inherit;
  font-size: 18px;
  font-weight: 400;
  color: #0078d0;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

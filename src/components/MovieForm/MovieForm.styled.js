import styled from 'styled-components';

export const Form = styled.form`
  margin: 30px auto 20px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 10px;
  width: 200px;
  height: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-right: 30px;
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  width: 100px;
  border-radius: 5px;
  background-color: #116466;
  color: white;

  &&:hover {
    background-color: white;
    color: #116466;
  }
`;

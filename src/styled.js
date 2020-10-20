import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 20px;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid;
`;

const Button = styled.button`
  width: 150px;
  display: block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all, 0.2s;
  outline: none;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const BtnRemove = styled.button`
  min-width: 60px;
  margin-left: 10px;
  background: transparent;
  cursor: pointer;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: 14px;
  color: palevioletred;
  outline: none;
  transition: all 0.2s;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const Ul = styled.ul`
  padding-left: 20px;
`;

const liItem = styled.li`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  text-align: center;

  &::placeholder {
    font-size: 14px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const s = { Form, Button, BtnRemove, Ul, liItem, Input, Label };
export default s;

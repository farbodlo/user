import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border-radius: 10px;
  margin: 1em 1em;
  padding: 0.5em 1em;
  &::focus {
    border: 2px solid red;
  }
`;

export default Input;

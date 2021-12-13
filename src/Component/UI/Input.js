import styled from "styled-components";

const Input = styled.input`
  border: 2px solid #84817a;
  border-radius: 10px;
  margin: 1em 1em;
  padding: 0.8em 1em;
  &.invalid {
    background: salmon;
    border: 2px solid red;
  }
`;

export default Input;

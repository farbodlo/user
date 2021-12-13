import styled from "styled-components";

const Item = styled.li`
  background: #dfe6e9;
  border-radius: 5px;
  width: 90%;
  height: 2rem;
  list-style: none;
  margin: 1em 0em;
  padding: 0.5em 1em;
  & span {
      margin-left: 1em;
  }
  & span:nth-child(2) {
    color: #2f3640;
  }
`;

export default Item;

import styled from "styled-components";

const Card = styled.div`
  background: #f5f6fa;
  border: 1px solid #f5f6fa;
  border-radius: 10px;
  margin: auto;
  margin-top: 1em;
  width: 30%;
  text-align: left;
  justify-content: center;
  & Input {
  }
  label {
    margin: 0.75em 1em;
    font-weight: bold;
  }
  & Button {
    text-align-last: end;
  }
`;

export default Card;

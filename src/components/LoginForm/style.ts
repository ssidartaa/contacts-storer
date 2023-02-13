import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  button {
    width: 100%;
    padding: 10px 0;
    max-width: 200px;
    border-radius: 5px;
    background-color: var(--Primary-Color);
    color: var(--Gray-0);
    cursor: pointer;
  }
`;

export default Container;

import styled from "styled-components";

const Container = styled.form`
  background-color: var(--Gray-0);
  color: var(--Gray-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 1rem;

  .inputContainer,
  .inputPasswordContainer {
    width: 100%;

    .inputContent,
    .inputPasswordContent {
      width: 100%;

      label {
        font-size: 12px;
      }
      input {
        width: 100%;
      }
    }

    span {
      font-size: 9px;
    }
  }

  button {
    width: 100%;
    max-width: 200px;
    padding: 10px 0;
    background-color: var(--Primary-Color);
    color: var(--Gray-0);
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export default Container;

import styled from "styled-components";

const Container = styled.li`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  animation: fadeIn 1.2s;

  .backgorundContainer {
    background-color: var(--Primary-Color);
    padding: 5px;
    border-radius: 5px;

    section {
      background-color: var(--Gray-0);
      color: var(--Gray-4);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 10px;

      button {
        margin-top: 10px;
        padding: 10px 0;
        background-color: var(--Primary-Color);
        color: var(--Gray-0);
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export default Container;

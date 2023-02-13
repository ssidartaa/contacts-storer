import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--Modal-Background);
  backdrop-filter: blur(2px);

  .modalBackground {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    border-radius: 10px;
    padding: 1rem 0 2rem;
    background-color: var(--Primary-Color);
    margin: 0 1rem;
    animation: fadeInUp 0.2s;

    .closeModalContainer {
      display: flex;
      justify-content: flex-end;
      margin-right: 15px;

      svg {
        color: var(--Gray-0);
        font-size: 25px;
        cursor: pointer;
      }
    }

    .modalContentBackground {
      width: 100%;
      background-color: var(--Gray-0);
      color: var(--Gray-4);
    }

    .deleteModalOpenContainer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;

      button {
        width: 100%;
        max-width: 200px;
        padding: 10px 0;
        background-color: var(--Negative-2);
        color: var(--Gray-0);
        border-radius: 5px;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }
`;

export default Container;

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--Modal-Background);
  backdrop-filter: blur(2px);

  .modalBackgroundDelete {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    border-radius: 10px;
    padding: 2rem 0;
    background-color: var(--Primary-Color);
    margin: 0 1rem;
    animation: fadeIn 1.5s;

    .modalHeader {
      color: var(--Gray-0);
      text-align: center;
      h3 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }

    .modalContent {
      background-color: var(--Gray-0);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        margin-top: 20px;
        font-size: 20px;
      }

      .buttonsContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px 0;
        justify-content: center;

        .cancelButton {
          background-color: var(--Gray-1);
        }
      }
    }
  }
`;

export default Container;

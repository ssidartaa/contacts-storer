import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .backgorundContainer {
    width: 100%;
    max-width: 500px;
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: var(--Primary-Color);
    margin: 0 1rem;

    header {
      margin-bottom: 30px;

      h1 {
        font-weight: bold;
      }
    }

    .loginContainer {
      width: 100%;

      section {
        width: 100%;
        background-color: var(--Gray-0);
        color: var(--Gray-4);
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;

        p {
          font-size: 13px;
          text-align: center;

          span {
            color: var(--Primary-Color);
            text-decoration: underline;
            cursor: pointer;

            :active {
              color: var(--Gray-4);
            }
          }
        }
      }
    }
  }
`;

export default Container;

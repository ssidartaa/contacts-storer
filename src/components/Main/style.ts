import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto 0;

  main {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
    margin-bottom: 20px;

    .addContactOpenModalContainer {
      display: flex;
      margin: 0 1rem;
      animation: fadeIn 1s;

      button {
        width: 100%;
        max-width: 250px;
        padding: 10px 0;
        background-color: var(--Primary-Color);
        color: var(--Gray-0);
        border-radius: 5px;
        cursor: pointer;
      }
    }

    .contactsList {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        @media screen and (min-width: 430px) {
          padding: 0 2rem;
        }
      }
    }
  }
`;

export default Container;

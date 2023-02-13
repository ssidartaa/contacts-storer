import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-size: 3.5rem;
      font-weight: bold;
    }
  }
`;

export default Container;

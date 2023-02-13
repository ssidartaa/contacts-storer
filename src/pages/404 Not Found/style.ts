import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 100%;

    h1 {
      font-size: 2.6rem;
      font-weight: bold;
    }

    svg {
      font-size: 5.6rem;
    }
  }
`;

export default Container;

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    a {
      font-size: 20px;
      cursor: pointer;
      color: var(--Gray-0);
      text-decoration: none;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      svg {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;

export default Container;

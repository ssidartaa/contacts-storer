import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--Gray-0);
  padding-bottom: 30px;

  h4 {
    font-size: 1.5rem;
    text-align: center;
  }

  svg {
    font-size: 5rem;
  }
`;

export default Container;

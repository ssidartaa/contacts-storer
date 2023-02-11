import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.12rem;

  .label {
    font-size: 0.6106rem;
    font-weight: 400;
  }

  @media screen and (min-width: 20rem) {
    .label {
      font-size: 0.7612rem;
    }
  }

  .inputContainer {
    background-color: rgba(var(--Grey-2), 1);
    border: 0.0612rem solid rgba(var(--Grey-0), 1);
    border-radius: 0.2005rem;
    padding: 0.5262rem 0.4744rem;
    font-size: 0.8144rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: fadeIn 2s;

    .input {
      background-color: inherit;
      width: 85%;
    }

    .eye {
      color: rgba(var(--Grey-1), 1);
      font-size: 0.6019rem;
      font-weight: 900;
      cursor: pointer;
    }
    @media screen and (min-width: 20rem) {
      .eye {
        font-size: 1rem;
      }
    }
  }
`;

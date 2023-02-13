import styled, { css } from "styled-components";

import { IContainerProps } from "./interfaces";

const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: 14px;
    }

    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid transparent;

      :focus {
        border-color: var(--Gray-4);
      }
    }
  }

  span {
    font-size: 12px;
    color: var(--Negative-1);
  }

  ${({ error }) => {
    return error
      ? css`
          div {
            input {
              border-color: var(--Negative-1);

              :focus {
                border-color: var(--Negative-1);
              }
            }
          }
        `
      : css`
          span {
            opacity: 0;
          }
        `;
  }}
`;

export default Container;

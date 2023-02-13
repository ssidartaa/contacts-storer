import styled, { css } from "styled-components";

import { IContainerProps } from "../Input/interfaces";

const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .inputPasswordContent {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: 12px;
    }

    .inputPassword {
      background-color: var(--White);
      padding: 10px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid transparent;
      display: flex;
      align-items: center;
      color: var(--Gray-4);

      :has(input:focus) {
        border-color: var(--Gray-4);
      }

      input {
        width: 100%;
      }

      .eye {
        cursor: pointer;
        font-size: 17px;
      }
    }
  }

  span {
    font-size: 9px;
    color: var(--Negative-1);
  }

  ${({ error }) => {
    return error
      ? css`
          .inputPasswordContent {
            .inputPassword {
              border-color: var(--Negative-1);

              :has(input:focus) {
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

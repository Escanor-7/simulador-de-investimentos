import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2b2c30;

  &.transparent-background {
    background: var(--white);
    border: 1px solid #2b2c30;

    &:hover {
      background-color: #fe6c2b;
      color: var(--white);
    }
  }

  &.gray-background {
    background-color: #c0c2bd;
    color: #2b2c30;
    border: none;

    &:hover {
      background-color: #fe6c2b;
      color: var(--white);
    }
  }

  &.margin-bottom-one-rem {
    margin-bottom: 1rem;
  }

  &.margin-bottom-two-rem {
    margin-bottom: 2rem;
  }
`;

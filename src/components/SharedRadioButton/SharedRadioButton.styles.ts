import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  label:nth-child(2) {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-right-width: 0.1px;
  }

  label:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-left-width: 0.1px;
  }

  label {
    width: 100%;
    background-color: transparent;
    font-size: 1.5rem;
    border: 1px solid #2b2c30;
    padding: 0.7rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;

    &:hover {
      background-color: #fe6c2b;
      color: var(--white);
    }
  }

  input {
    position: absolute;
    z-index: 1;
    appearance: none;

    &:checked + label {
      background-color: #fe6c2b;
      color: var(--white);
      &::before {
        font-family: "Font Awesome 5 Free";
        content: "\f00c";
        font-size: 0.7rem;
        color: var(--white);
        font-weight: 600;
        margin-right: 1px;
      }
    }
  }
`;

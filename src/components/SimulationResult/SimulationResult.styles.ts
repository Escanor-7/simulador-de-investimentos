import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
  }

  @media (min-width: 768px) {
    h3 {
      text-align: start;
    }
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background-color: var(--white);
  -webkit-box-shadow: 0px 0px 1px 1px rgba(99, 113, 135, 0.45);
  box-shadow: 0px 0px 5px 2px rgba(99, 113, 135, 0.45);
  margin-bottom: 2rem;

  p {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 500;

    &.emphasis {
      font-weight: 600;
      color: #38c958;
    }
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`;

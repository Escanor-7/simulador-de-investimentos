import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const FormContainer = styled.div`
  background-color: #f1f1f2;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 1.7rem;
    margin: 1rem 0 2rem 0;
  }

  h4 {
    color: #1a1c27;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    justify-content: space-between;

    h3 {
      text-align: start;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    width: 100%;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;

    button {
      width: 45%;
      padding: 0.2rem;
    }
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 45%;
  }
`;

export const SimulationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 48%;
  }

  @media (min-width: 1024px) {
    width: 45%;
  }
`;

export const IncomeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  i {
    font-size: 0.7rem;
    color: gray;
    padding: 0.1rem 0.3rem;
    border: 2px solid gray;
    border-radius: 50%;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;

  label {
    margin-bottom: 1rem;
    line-height: 1.5rem;
  }
  input {
    background: none;
    outline: none;
    border: 1px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

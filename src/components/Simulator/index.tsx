import { useState } from "react";

import { Button } from "../Button";
import { SharedRadioButton } from "../SharedRadioButton";
import { SimulationResult } from "../SimulationResult";
import * as S from "./Simulator.styles";

export function Simulator() {
  const [showResult, setShowResult] = useState(false);
  const incomes = [{ name: "Bruto" }, { name: "Líquido" }];
  const indexingTypes = [{ name: "pré" }, { name: "pós" }, { name: "fixado" }];

  return (
    <S.Container>
      <S.FormContainer>
        <h1>Simulador de Investimentos</h1>

        <S.DataContainer>
          <S.Column>
            <h3>Simulador</h3>
            <S.Row>
              <S.SimulationContainer>
                <S.IncomeRow>
                  <h4>Rendimento</h4>
                  <i className="fas fa-info" />
                </S.IncomeRow>

                <SharedRadioButton typeInfo={incomes} />
                <S.FieldContainer>
                  <label htmlFor="inicial-contribution">Aporte Inicial</label>
                  <input type="text" name="inicial-contribution" />
                </S.FieldContainer>

                <S.FieldContainer>
                  <label htmlFor="deadline">Prazo (em meses)</label>
                  <input type="text" name="deadline" />
                </S.FieldContainer>

                <S.FieldContainer>
                  <label htmlFor="ipca">IPCA (ao ano)</label>
                  <input type="text" name="ipca" />
                </S.FieldContainer>
              </S.SimulationContainer>

              <S.SimulationContainer>
                {/* INDEXAÇÃO */}
                <S.IncomeRow>
                  <h4>Tipos de indexação</h4>
                  <i className="fas fa-info" />
                </S.IncomeRow>
                <SharedRadioButton typeInfo={indexingTypes} />

                <S.FieldContainer>
                  <label htmlFor="monthly-contribution">Aporte Mensal</label>
                  <input type="text" name="monthly-contribution" />
                </S.FieldContainer>

                <S.FieldContainer>
                  <label htmlFor="monthly-contribution">Rentabilidade</label>
                  <input type="text" name="monthly-contribution" />
                </S.FieldContainer>

                <S.FieldContainer>
                  <label htmlFor="profitability">CDI (ao ano)</label>
                  <input type="text" name="profitability" />
                </S.FieldContainer>
              </S.SimulationContainer>
            </S.Row>
            <S.Row>
              <Button
                type="button"
                variant="transparent-background margin-bottom-two-rem"
                title="Limpar campos"
              />

              <Button
                type="button"
                variant="gray-background margin-bottom-two-rem"
                title="Simular"
                onClick={() => setShowResult(true)}
              />
            </S.Row>
          </S.Column>
          {showResult && <SimulationResult />}
        </S.DataContainer>
      </S.FormContainer>
    </S.Container>
  );
}

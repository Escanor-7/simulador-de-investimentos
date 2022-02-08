import * as S from "./SimulationResult.styles";

export function SimulationResult() {
  return (
    <S.Container>
      <h3>Resultado da Simulação</h3>
      <S.Row>
        <S.Card>
          <p>Valor final bruto</p>
          <span>R$ 15.509,27</span>
        </S.Card>

        <S.Card>
          <p>Alíquota do IR</p>
          <span>20%</span>
        </S.Card>

        <S.Card>
          <p>Valor Pago em IR</p>
          <span>R$ 1.509,27</span>
        </S.Card>
      </S.Row>

      <S.Row>
        <S.Card>
          <p>Valor final líquido</p>
          <span className="emphasis">R$ 56.509,27</span>
        </S.Card>

        <S.Card>
          <p>Valor Total Investido</p>
          <span>R$ 9.509,27</span>
        </S.Card>

        <S.Card>
          <p>Ganho Líquido</p>
          <span className="emphasis">R$ 47.000,00</span>
        </S.Card>
      </S.Row>
    </S.Container>
  );
}

import SummaryCard from "../SummaryCard/SummaryCard";
export default function Summary() {
  return (
    <div id="indicativos">
      <SummaryCard
        idTitulo="indicativoTotal"
        idNumero-="total"
        title="Total"
        count={0}
      />
      <SummaryCard
        idTitulo="indicativoFrontEnd"
        idNumero-="frontEnd"
        title="FrontEnd"
        count={0}
      />
      <SummaryCard
        idTitulo="indicativoBackEnd"
        idNumero-="backEnd"
        title="BackEnd"
        count={0}
      />
      <SummaryCard
        idTitulo="indicativoFullStack"
        idNumero-="fullStack"
        title="FullStack"
        count={0}
      />
      <SummaryCard
        idTitulo="indicativoSoftSkill"
        idNumero-="softSkill"
        title="SoftSkill"
        count={0}
      />
    </div>
  );
}

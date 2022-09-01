import Proptypes from "prop-types";
export default function SummaryCard({ idTitulo, idNumero, title, count }) {
  return (
    <div id={idTitulo}>
      <p>{title}</p>
      <p id={idNumero}>{count}</p>
    </div>
  );
}
SummaryCard.propTypes = {
  idTitulo: Proptypes.string.isRequired,
  idNumero: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  count: Proptypes.number.isRequired,
};

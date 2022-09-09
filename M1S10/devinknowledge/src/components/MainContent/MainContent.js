import Filter from "../Filter/Filter";
import Summary from "../Summary/Summary";
import TipCard from "../TipCard/TipCard";
import CardList from "../CardList/CardList";
export default function MainContent({ tipList }) {
  return (
    <div id="cards">
      <Summary />
      <Filter />
      <div id="cardDicas">
        <CardList>
          {tipList.map((tip) => (
            <TipCard
              key={tip.idCard}
              titulo={tip.titulo}
              linguagem={tip.linguagem}
              categoria={tip.categoria}
              descricao={tip.descricao}
              video={tip.video}
            />
          ))}
        </CardList>
      </div>
    </div>
  );
}

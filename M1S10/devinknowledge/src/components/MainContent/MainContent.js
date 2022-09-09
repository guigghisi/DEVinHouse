import Filter from "../Filter/Filter";
import Summary from "../Summary/Summary";
import TipCard from "../TipCard/TipCard";
import CardList from "../CardList/CardList";
export default function MainContent() {
  return (
    <div id="cards">
      <Summary />
      <Filter />
      <div id="cardDicas">
        <CardList>
          <TipCard
            idCard="card1"
            titulo="Como criar um site com React"
            linguagem="React"
            categoria="Front-end"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl."
            video="https://www.youtube.com/watch?v=9YkUCxvaLEk"
          />
        </CardList>
      </div>
    </div>
  );
}

import "./Produto.css";
export default function Produto({ imagem, nome, preco }) {
  return (
    <div className="produto">
      <img src={imagem} alt={nome} className="imagemProduto" />
      <h3>{nome}</h3>
      <p>{preco}</p>
    </div>
  );
}

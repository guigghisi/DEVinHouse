import "./App.css";
import Tabela from "./Componentes/Tabela";

export default function App({ isLoading }) {
  if (isLoading === true) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Tabela
        title="Tabela de Usuários"
        description="Lista de usuários"
        columns={[
          { field: "id", title: "ID" },
          { field: "nome", title: "Nome" },
          { field: "email", title: "Email" },
        ]}
        data={[
          {
            id: 1,
            nome: "João",
            email: "joao@email.com",
          },
          {
            id: 2,
            nome: "Maria",
            email: "maria@email.com",
          },
        ]}
      />
    </>
  );
}

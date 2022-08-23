export default function Tabela({ title, description, columns, data }) {
  return (
    <div className="table-responsive">
      <h3>{title}</h3>
      <p>{description}</p>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.field}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.field}>{row[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

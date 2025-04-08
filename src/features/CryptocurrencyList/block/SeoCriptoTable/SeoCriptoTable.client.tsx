import { CriptoTableProps } from "../CriptoTable/CriptoTable.types";

/** Упрощенная таблица с криптовалютами для ботов */
export function SeoCriptoTable({ rows, cols, className }: CriptoTableProps) {
  return (
    <table className={className} aria-label="Cryptocurrency List">
      <thead>
        <tr>
          {cols.map((column) => (
            <th key={column.field} scope="col">
              {column.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {cols.map((column) => (
              <td key={`${index}-${column.field}`}>
                {row[column.field as keyof typeof row]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import { CriptoTableProps } from "../CriptoTable/CriptoTable.types";

// NOTE: Серверная таблица для поддержки SEO

export function SeoCriptoTable({ rows, cols, className }: CriptoTableProps) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {cols.map((column) => (
            <th key={column.field}>{column.headerName}</th>
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

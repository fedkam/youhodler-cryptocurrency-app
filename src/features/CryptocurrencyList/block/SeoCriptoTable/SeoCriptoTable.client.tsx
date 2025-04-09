import { cryptoDetailsRoute } from "@/src/routes/routes";
import { CriptoTableProps } from "../CriptoTable/CriptoTable.types";

/** Упрощенная таблица с криптовалютами для ботов */
export function SeoCriptoTable({ rows, cols }: CriptoTableProps) {
  return (
    <table aria-label="Cryptocurrency List">
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
            {cols.map((column, index) => {
              const cellValue = row[column.field as keyof typeof row];
              const shouldLink = index === 0;

              return (
                <td key={`${index}-${column.field}`}>
                  {shouldLink ? (
                    <a
                      href={cryptoDetailsRoute(row.name)}
                      aria-label={`Details ${cellValue}`}
                      title={`Detailed information about ${cellValue}`}
                    >
                      {cellValue}
                    </a>
                  ) : (
                    cellValue
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import TableRow from "../TableRow/TableRow";

import './Table.scss';

const Table = ({ operations }) => {
  return (
    <>
      <div className="head">
        <span>Fecha</span>
        <span>Tipo</span>
        <span>Descripción</span>
        <span>Total </span>
        <span>Acciones </span>

      </div>
      {
        operations.map(operation => {
          return (
            <TableRow operation={operation} key={operation.id_operation} />
          );
        })
      }
    </>
  );
};

export default Table;

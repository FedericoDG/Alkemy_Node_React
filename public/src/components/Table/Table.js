import TableRow from "../TableRow/TableRow";

import './Table.scss';

const Table = ({ operations, setAuxFetch }) => {
  return (
    <>
      <div className="head">
        <span>Fecha</span>
        <span>Categoría</span>
        <span>Descripción</span>
        <span>Total </span>
        <span>Acciones </span>

      </div>
      {
        operations.map(operation => {
          return (
            <TableRow operation={operation} setAuxFetch={setAuxFetch} key={operation.id_operation} />
          );
        })
      }
    </>
  );
};

export default Table;

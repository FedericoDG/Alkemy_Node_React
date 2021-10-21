import { Link } from 'react-router-dom';
import { RiEdit2Fill } from 'react-icons/ri';
import { CgTrash } from 'react-icons/cg';

import './TableRow.scss';

const TableRow = ({ operation }) => {
  return (
    <div className="row">
      <span>{operation.date}</span>
      <span><Link to={operation.type === 'INGRESO' ? "/ingresos" : "/egresos"} className="link">{operation.type}</Link></span>
      <span>{operation.description}</span>
      <span>$ {operation.amount.toFixed(2)}</span>
      <div className="icons">
        <RiEdit2Fill className="icon" size="20px" color="#4b7bec" />
        <CgTrash className="icon" size="20px" color="#e40000" />
      </div>
    </div>
  );
};

export default TableRow;

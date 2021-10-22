import { Link } from 'react-router-dom';
import { RiEdit2Fill } from 'react-icons/ri';
import { CgTrash } from 'react-icons/cg';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

import remove from '../../helpers/remove';

import './TableRow.scss';

const TableRow = ({ operation, setAuxFetch }) => {
  return (
    <div className="row">
      <span className="date">{operation.date}</span>
      <div className="type">
        {
          operation.type === 'INGRESO' ?
            <Link to="/ingresos" className="link"><BsFillArrowDownCircleFill className="iconType" color="#0fb9b1" /></Link>
            :
            <Link to="/egresos" className="link"><BsFillArrowUpCircleFill className="iconType" color="#e40000" /></Link>
        }
        <Link to={`/category/${operation.category.toLowerCase()}`} className="link"><span>{operation.category}</span></Link>
      </div>
      <span className="description">{operation.description}</span>
      <span className="amount">$ {operation.amount.toFixed(2)}</span>
      <div className="icons">
        <RiEdit2Fill className="icon" size="20px" color="#4b7bec" />
        <CgTrash id={operation.id_operation} className="icon" size="20px" color="#e40000" onClick={({ target }) => remove(target.id, setAuxFetch)} />
      </div>
    </div>
  );
};

export default TableRow;

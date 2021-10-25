import { useContext } from 'react';
import { Link } from 'react-router-dom';
import  UserContext from '../../context/Contex'
import { FaRegEdit } from 'react-icons/fa';
import { MdCancelPresentation } from 'react-icons/md';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';

import remove from '../../helpers/remove';

import './TableRow.scss';

const TableRow = ({ operation, setAuxFetch }) => {
const {user} =useContext(UserContext)

  return (
    <div className="row">
      <span className="date">{operation.date}</span>
      <div className="type">
        {
          operation.type === 'INGRESO' ?
            <Link to="/incomes" className="link"><FaRegArrowAltCircleDown className="iconType" color="#0fb9b1" /></Link>
            :
            <Link to="/expenses" className="link"><FaRegArrowAltCircleUp className="iconType" color="#e40000" /></Link>
        }
        <Link to={`/category/${operation.category.toLowerCase()}`} className="link"><span>{operation.category}</span></Link>
      </div>
      <span className="description">{operation.description}</span>
      <span className="amount">$ {operation.amount.toFixed(2)}</span>
      <div className="icons">
        <Link to={`/update/${operation.id_operation}`} className="link"><FaRegEdit className="icon" size="20px" color="#4b7bec" /></Link>
        <MdCancelPresentation id={operation.id_operation} className="icon" size="20px" color="#e40000" onClick={() => remove(operation.id_operation, user.token, setAuxFetch)} />
      </div>
    </div>
  );
};

export default TableRow;

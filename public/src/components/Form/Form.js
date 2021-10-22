import { useState } from "react";
import { FiEdit } from 'react-icons/fi';
import { BsFillPlusCircleFill } from 'react-icons/bs';

import formOnChange from "../../helpers/formOnChange";
import formOnSubmit from "../../helpers/formOnSubmit";

import './Form.scss';

const Form = ({ update, setUpdate, setAuxFetch }) => {
  const [operation, setOperation] = useState({ date: "", type: "EGRESO", category: "ALQUILER", description: "", amount: "" });

  return (
    <div className="formData">
      {
        update ?
          <>
            <div>
              <FiEdit size="30px" color="#ffffff" />
              <h1>Editar operación</h1>
            </div>
            <form onChange={(e) => formOnChange(e.target, update, setUpdate)} onSubmit={(e) => formOnSubmit(e, update, setUpdate, setAuxFetch, update.id_operation)}>
              <input type="date" name="date" className="date" required defaultValue={update.date} />
              <input type="text" name="description" className="description" placeholder="descripción" required defaultValue={update.description} />
              <input type="number" name="amount" className="description" min="0" max="999999" step="0.1" placeholder="total" required defaultValue={update.amount} />
              <button type="submit" className="btn">Enviar</button>
            </form>
          </>
          :
          <>
            <div>
              <BsFillPlusCircleFill size="30px" color="#ffffff" />
              <h1>Nueva operación</h1>
            </div>
            <form onChange={(e) => formOnChange(e.target, operation, setOperation)} onSubmit={(e) => formOnSubmit(e, operation, setOperation, setAuxFetch)}>
              <input type="date" name="date" className="date" required />
              <select name="type" className="type">
                <option value="EGRESO">EGRESO</option>
                <option value="INGRESO">INGRESO</option>
              </select>
              <select name="category" className="category" required>
                <option value="ALQUILER">ALQUILER</option>
                <option value="COMIDA">COMIDA</option>
                <option value="MEDICAMENTOS">MEDICAMENTOS</option>
                <option value="VESTIMENTA">VESTIMENTA</option>
                <option value="SUELDO">SUELDO</option>
                <option value="OTROS">OTROS</option>
              </select>
              <input type="text" name="description" className="description" placeholder="descripción" required />
              <input type="number" name="amount" className="description" min="0" max="999999" step="0.1" placeholder="total" required />
              <button type="submit" className="btn">Enviar</button>
            </form>
          </>
      }
    </div>
  );
};

export default Form;

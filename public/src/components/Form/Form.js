import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [operation, setOperation] = useState({ date: "", type: "EGRESO", description: "", amount: "" });

  const onChange = ({ target }) => {
    if (target.name === "date") {
      setOperation({ ...operation, date: target.value });
    } else if (target.name === "type") {
      setOperation({ ...operation, type: target.value });
    } else if (target.name === "description") {
      setOperation({ ...operation, description: target.value });
    } else if (target.name === "amount") {
      setOperation({ ...operation, amount: parseFloat(target.value) });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(operation);
    axios.post()
    setOperation({ ...operation, type: "EGRESO" });
  };

  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <input type="date" name="date" required />
      <select name="type">
        <option value="EGRESO">EGRESO</option>
        <option value="INGRESO">INGRESO</option>
      </select>
      <input type="text" name="description" placeholder="descripción" required />
      <input type="number" name="amount" min="0" max="999999" step="0.1" placeholder="total" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;

import { Redirect } from "react-router-dom";

const Incomes = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      ingresos
    </div>
  );
};

export default Incomes;

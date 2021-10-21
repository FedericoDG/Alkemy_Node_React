import { Redirect } from "react-router-dom";

const Expenses = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      egresos
    </div>
  );
};

export default Expenses;

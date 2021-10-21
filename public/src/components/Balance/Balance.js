import './Balance.scss';

const Balance = ({ total }) => {
  return (
    <div className="balance">
      <h1>BALANCE</h1>
      <h2 className={total >= 0 ? "green" : "red"}>${total}</h2>
    </div>
  );
};

export default Balance;

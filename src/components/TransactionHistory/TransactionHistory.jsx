import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.table_head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>

      <tbody className={css.table_body}>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={css.table_slot}>{type}</td>
          <td className={css.table_slot}>{amount}</td>
          <td className={css.table_slot}>{currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

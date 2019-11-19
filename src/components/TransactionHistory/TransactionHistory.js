import React from 'react';
import PropTypes from 'prop-types';
import superStyles from './TransactionHistory.module.css';

const TransactionHistory = ({ transProps }) => (
  <table className={superStyles.main__tab}>
    <thead className={superStyles.main__cont}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className={superStyles.main__green_line}>
      {transProps.map(component => (
        <tr key={component.id}>
          <td>{component.type}</td>
          <td>{component.amount}</td>
          <td>{component.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  transProps: PropTypes.shape({
    id: '',
    type: '',
    currency: '',
  }),
};

TransactionHistory.propTypes = {
  transProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
  ),
};

export default TransactionHistory;

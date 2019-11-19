import React from 'react';
import Proppes from 'prop-types';
import abc from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={abc.statistics}>
    <h2 className={abc.title}>{title}</h2>
    <ul className={abc.statList}>
      {stats.map(el => (
        <li className={abc.item} key={el.id}>
          <span className={abc.label}>{el.label}</span>
          <span className={abc.percentage}>{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: Proppes.string.isRequired,
  stats: Proppes.arrayOf(
    Proppes.shape({
      id: Proppes.string,
      label: Proppes.string,
      percentage: Proppes.number,
    }),
  ).isRequired,
};

export default Statistics;

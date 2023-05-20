import PropTypes from 'prop-types';
import css from './Statistic.module.css';

function randomHexColor() {
  const min = 0xDDDDDD;
  const max = 0xFFFFFF;
  let color = Math.floor(Math.random() * (max - min) + min).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }

  return `#${color}`;
}

export default function Statistic({ title, stats }) {
  return (
    <section className={css.statistic}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.data}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span>{label}</span>
              <span>{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

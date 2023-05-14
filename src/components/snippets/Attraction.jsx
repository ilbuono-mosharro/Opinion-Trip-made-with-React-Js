import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Attraction(props) {
  const { details } = props;

  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={details.copertina} alt="" />
  </a>
  <div className="p-5">
    <NavLink to={`/attraction/${details.id}`}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{details.name}</h5>
    </NavLink>    
  </div>
</div>
    </article>
  );
}

Attraction.propTypes = {
    details: PropTypes.object.isRequired,
  };
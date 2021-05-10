import React from 'react';
import RailItem from './RaiItem';
import Arrow from '../assets/images/arrow';
import '../assets/style/components/categories.scss';

const categories = ({ title, data = [] }) => {
  const moveRail = (moveIt) => {
    const rail = document.getElementById(title);
    const add = moveIt ? 100 : -100;
    const scrolling = rail.scrollLeft + add;
    rail.scroll({
      left: scrolling,
      behavior: 'smooth',
    });
  };
  return (
    <section>
      <h2 className='rail_title'>{title}</h2>
      <ul className='rail_container' id={title}>
        <button type='button' onClick={() => moveRail(false)}>
          <Arrow className='rail_containerArrow-L' />
        </button>
        {
        // eslint-disable-next-line react/jsx-props-no-spreading
          data.map((e) => e.poster_path && <RailItem key={e.id} id={e.id} {...e} />)
        }
        <button type='button' onClick={() => moveRail(true)}>
          <Arrow className='rail_containerArrow-R' />
        </button>
      </ul>
    </section>
  );
};

export default categories;

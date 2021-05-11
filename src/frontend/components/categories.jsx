import React from 'react';
import RailItem from './RaiItem';
import '../assets/style/components/categories.scss';

const categories = ({ title, data = [] }) => {
  const moveRail = (moveIt) => {
    const rail = document.getElementById(title);
    const add = moveIt ? 200 : -200;
    const scrolling = rail.scrollLeft + add;
    rail.scroll({
      left: scrolling,
      behavior: 'smooth',
    });
  };
  return (
    <section>
      <ul className='rail_container' id={title}>
        <button className='rail_container-arrorL' type='button' onClick={() => moveRail(false)}>
          <img src='https://img.icons8.com/flat-round/64/000000/arrow-left.png' alt='arrow left' />
        </button>
        {
        // eslint-disable-next-line react/jsx-props-no-spreading
          data.map((e) => e.poster_path && <RailItem key={e.id} id={e.id} {...e} />)
        }
        <button className='rail_container-arrowR' type='button' onClick={() => moveRail(true)}>
          <img src='https://img.icons8.com/flat-round/64/000000/arrow-right.png' alt='arrow rigth' />
        </button>
      </ul>
    </section>
  );
};

export default categories;

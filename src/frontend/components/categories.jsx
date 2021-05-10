import React from 'react';
import RailItem from './RaiItem';
import '../assets/style/components/categories.scss';

const categories = ({ title, data = [] }) => (
  <section>
    <h2 className='rail_title'>{title}</h2>
    <ul className='rail_container'>
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        data.map((e) => e.poster_path && <RailItem key={e.id} {...e} />)
      }
    </ul>
  </section>
);

export default categories;

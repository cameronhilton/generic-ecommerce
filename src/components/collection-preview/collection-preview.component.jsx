import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({ items, title }) => (
  <div>
    <h1>{ title.toLocaleUpperCase() }</h1>
    <div className='preview'>
      {
        items
          .slice(0, 4)
          .map(item => (
            <div key={item.id}>{ item.name }</div>
          ))
      }
    </div>
  </div>
);

export default CollectionPreview;

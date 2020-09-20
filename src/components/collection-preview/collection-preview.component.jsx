import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ items, title }) => (
  <div className='collection-preview'>
    <h1>{ title.toLocaleUpperCase() }</h1>
    <div className='preview'>
      {
        items
          .slice(0, 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))
      }
    </div>
  </div>
);

export default CollectionPreview;

/* eslint-disable */
import React from 'react';
import SplitPane from '../../../common/SplitPane/SplitPane';
import SplitPaneLayout from '../../../common/SplitPane/SplitPaneLayout';
import styles from './RocketRow.module.scss';

const RocketRow = ({title, description, image}) => {

  return (
    <SplitPane
      layout={
        new SplitPaneLayout('row', 'col', 'col', styles)
      }
      first={
        <>
          <img src={image} />
        </>
      }
      second={
        <>
          <span>{title}</span>
          <span>{description}</span>
          <button type='button'>Reserve</button>
        </>
      }
    />
  );

}

export default RocketRow;
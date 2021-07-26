import React, { useState } from 'react';
import { StarFilled } from '@ant-design/icons';

const Netherlands = ({
  Netherlands,
  setClickedRegion,
  NetherlandsInfluence,
}) => {
  const [selectedNetherlands, setSelectedNetherlands] = useState(false);
  return (
    <>
      <StarFilled
        style={{
          fontSize: '38px',
          position: 'absolute',
          top: '40%',
          right: '49%',
          filter: 'saturate(10%)',
          color: selectedNetherlands ? 'white' : 'black',
          border: 'solid',
          borderColor: 'black',
          boxShadow: '1px 1px 1px black',
        }}
        onMouseEnter={() => {
          setSelectedNetherlands(true);
        }}
        onMouseLeave={() => {
          setSelectedNetherlands(false);
        }}
        onClick={() => {
          setClickedRegion('Netherlands');
        }}
      />
      <p
        style={{
          fontSize: '18px',
          position: 'absolute',
          fontWeight: 'bold',
          color: 'black',
          top: '12%',
          right: '49%',
          filter: 'saturate(10%)',
          border: 'solid',
          borderColor: 'black',
          boxShadow: '1px 1px 1px black',
        }}
      >
        {NetherlandsInfluence}
      </p>
      <svg id='Netherlands' height='150' width='150' viewBox='0 0 800 800'>
        <path
          id='XMLID_2_'
          className='netherlands-st0'
          d='M463.1,791.1l22.4-67.4l-46.2-39v-27l34.5-60.2l-11.9-33l0.4-28.2l-19.7-22.8l-23.9-23.9
		l44.8-73.5l-1.1-30v-39l-24.2-24l25.3-12l65.5-30l22-13.4l24.1-46.6l-34.2-37.5l32.7-12l17.5-64V68.6l-13.5-36.3L534.3,4.9l-38.7-4
		l-72.9,9l-29.8,37.5l-9.2,27.2L366.8,94l-19.3,13.1l-29-1.2l3-27L277.4,94v75.7l-5.7,39.4l-54.6,22.2l4.7,42.5l-22.3,29l4.5,32
		l-7.4,12.5l-10.4,33l-22.8,3l-37.7-1L86.7,396l-17.3,9.4v17.8H38.3L9.1,437.3c0,0,0.4,28.8,7.1,45.8s1.9,48.7,30.1,32.2
		s41.6,9.9,41.6,9.9h25.3l24,48.6l28,4.1v36.5c25.5,26.9,15.1,16.4,25.5,26.9c10.4,10.5,10.4,10.5,10.4,10.5l16,24.9l37.6-4
		c0,0,6-9.1,16.4,4.5c10.4,13.6,4.5,36,4.5,36s31.2,8.9,31.3,9c0,0.1,22.3,28.5,22.3,28.5s50.6,22.4,50.6,22.5
		c0,0.1,34.2,18,34.2,18l23.8-7.5L463.1,791.1z'
          style={{
            fill: Netherlands,
            filter: selectedNetherlands ? 'saturate(50%)' : '',
          }}
        />
      </svg>
    </>
  );
};
export default Netherlands;

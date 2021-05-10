/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={64}
      height={64}
      viewBox='0 0 172 172'
      {...props}
    >
      <defs>
        <linearGradient
          x1={86}
          y1={43}
          x2={86}
          y2={130.3}
          gradientUnits='userSpaceOnUse'
          id='prefix__a'
        >
          <stop offset={0} stopColor='#1a6dff' />
          <stop offset={1} stopColor='#c822ff' />
        </linearGradient>
        <linearGradient
          x1={86}
          y1={47.9}
          x2={86}
          y2={84.8}
          gradientUnits='userSpaceOnUse'
          id='prefix__b'
        >
          <stop offset={0} stopColor='#8ab4ff' />
          <stop offset={1} stopColor='#e492ff' />
        </linearGradient>
      </defs>
      <g
        fill='none'
        strokeMiterlimit={10}
        fontFamily='none'
        fontWeight='none'
        fontSize='none'
        textAnchor='none'
        style={{
          mixBlendMode: 'normal',
        }}
      >
        <path d='M0 172V0h172v172z' />
        <path
          d='M86 129l-6-2-62-64-2-4V48a5 5 0 019-3l59 60h4l59-60c1-2 4-2 6-2 2 1 3 3 3 5v11l-2 4-62 64-6 2zM21 48l1 11 62 64 2 1 2-1 63-64V48l-59 60-6 3-6-3z'
          fill='url(#prefix__a)'
        />
        <path
          d='M119 53L88 84h-4L53 53c-2-2-1-5 2-5h62c3 0 4 3 2 5z'
          fill='url(#prefix__b)'
        />
      </g>
    </svg>
  );
}

export default SvgComponent;

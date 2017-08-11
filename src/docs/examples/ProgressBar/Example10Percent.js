import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** 10% progress, 10 height, 200 width */
export default function Example10Percent() {
  return <ProgressBar height={10} width={200} percent={10} />
}
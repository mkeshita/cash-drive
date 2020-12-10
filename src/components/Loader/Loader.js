import React from 'react';
import './Loading.css';

const Loader = () => {
  return (
    <div className='loading-fullscreen'>
      <div className='loading'>
        <div className='_box'>
          <div className='indicator'>
            <div className='spinner-border' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
          <div className='text'>Just a moment...</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

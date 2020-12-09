import React from 'react';
import Check from './Check';

function Culture() {
  return (
    <section className='section section--bg position-relative'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md-5'>
            <img src='./images/group-img.png' width='100%' alt='group' />
          </div>
          <div className='col-md-6'>
            <h2 className='title'>Our Culture</h2>
            <p className='title--small mb-4'>
              Nam libero tempore, cum soluta nobis est eligend
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus
            </p>
            <div className='mt-5'>
              <div className='d-flex align-items-center my-4'>
                <span className='d-block mr-4'>
                  <Check />
                </span>
                <span>Quod maxime placeat</span>
              </div>
              <div className='d-flex align-items-center my-4'>
                <span className='d-block mr-4'>
                  <Check />
                </span>
                <span>Itaque</span>
              </div>
              <div className='d-flex align-items-center my-4'>
                <span className='d-block mr-4'>
                  <Check />
                </span>
                <span>Lorem Ipsum</span>
              </div>
              <div className='d-flex align-items-center my-4'>
                <span className='d-block mr-4'>
                  <Check />
                </span>
                <span>Soluta nobis est</span>
              </div>
              <div className='d-flex align-items-center my-4'>
                <span className='d-block mr-4'>
                  <Check />
                </span>
                <span>Quod maxime placeat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Culture;

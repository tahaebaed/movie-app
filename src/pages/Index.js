import React from 'react';
import NavBar from '../layout/NavBar';
import RoutesRoot from '../routes/RoutesRoot';

function Index() {
  return (
    <>
      <section className='container'>
        <NavBar />
        <RoutesRoot />
      </section>
    </>
  );
}

export default Index;

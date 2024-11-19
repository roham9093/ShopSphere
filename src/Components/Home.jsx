import React from 'react'

import Slider from '../Components/Slider';
import MostSell from '../Components/MostSell';
import Banner from '../Components/Banner';

const Home = () => {
  return (
    <>



        <main className="container">

          <>
            <section className="mb-5">
              <Slider />
            </section>

            <section className="mb-5">
              <MostSell />
            </section>

            <section className="mb-5">
              <Banner />
            </section>
          </>

        </main>


    </>
  )
}

export default Home
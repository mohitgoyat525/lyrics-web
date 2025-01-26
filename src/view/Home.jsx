import React from 'react'
import Hero from '../components/Hero'
import Nft from '../components/Nft'
import PlayEarn from '../components/PlayEarn'
import GildedGames from '../components/GildedGames'
import GildToken from '../components/GildToken'
import Uniswap from '../components/Uniswap'
import PowerdBy from '../components/PowerdBy'
import Roadmap from '../components/Roadmap'


const Home = () => {
  return (
    <>
      <Hero />
      <Nft />
      <PlayEarn />
      <GildedGames />
      <GildToken />
      <Roadmap />
      <Uniswap />
      <PowerdBy />
    </>
  );
}

export default Home
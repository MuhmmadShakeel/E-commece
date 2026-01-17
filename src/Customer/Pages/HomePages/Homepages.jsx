import React from 'react'
import Header from '../../Component/Home/Header'
import HomesSectionCard from '../../Component/Home/HomesSectionCard'
import WomenDressSection from '../../Component/Home/WomenDressSection'

function Homepages() {
  return (
    <div>
      <Header/>
      <HomesSectionCard/>
      <WomenDressSection/>
        <HomesSectionCard name="Men's Shoes"/>
    </div>
  )
}

export default Homepages

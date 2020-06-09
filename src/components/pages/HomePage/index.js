// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
import Hero from '../../organisms/Hero'
import Footer from '../../organisms/Footer'
import FeatureList from '../../organisms/FeatureList'

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header />}
      hero={<Hero />}
      footer={<Footer />}
    >
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage

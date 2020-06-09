import React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import Heading from '../../atoms/Heading'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>404 Not Found</Heading>
    </PageTemplate>
  )
}

export default NotFoundPage

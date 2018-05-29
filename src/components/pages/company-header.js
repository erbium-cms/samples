import React from 'react'
import { Header, Container } from 'semantic-ui-react'

import { ErbiumConfig } from '../../config'

const CompanyHeaderStyle = {
  fontSize: '4em',
  fontWeight: 'normal',
  marginBottom: 0,
  marginTop: '1em'
}

const CompanyHeader = () => (
  <Container text>
    <Header
      as="h1"
      content={ErbiumConfig.companyHeader}
      inverted
      style={CompanyHeaderStyle}
    />
  </Container>
)

export default CompanyHeader

import React from 'react'
import { Header, Container, Segment } from 'semantic-ui-react'

const HomePageContainerStyle = {
  minHeight: 300,
  padding: '1em 0em'
}

const CompanyHeaderStyle = {
  fontSize: '4em',
  fontWeight: 'normal',
  marginBottom: 0,
  marginTop: '1em'
}

const HomePage = () => (
  <Segment inverted textAlign="center" style={HomePageContainerStyle} vertical>
    <Container text>
      <Header
        as="h1"
        content="THE Dev Department"
        inverted
        style={CompanyHeaderStyle}
      />
    </Container>
  </Segment>
)

export default HomePage

import React from 'react'
import { Segment } from 'semantic-ui-react'

import CompanyHeader from './company-header'
import BlogEntriesContainer from './blog-entries-container'

import { blogEntries } from '../../data/blog-entries'

const HomePageContainerStyle = {
  minHeight: 300,
  padding: '1em 0em'
}

const HomePage = () => {
  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={HomePageContainerStyle}
        vertical
      >
        <CompanyHeader />
      </Segment>

      <BlogEntriesContainer blogEntries={blogEntries} />
    </div>
  )
}

export default HomePage

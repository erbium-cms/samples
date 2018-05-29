import React from 'react'
import { Segment } from 'semantic-ui-react'

import CompanyHeader from './company-header'
import BlogEntry from './blog-entry'

import { BlogEntries } from '../../data/blog-entries'

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

      {BlogEntries.map((blogEntry, index) => (
        <BlogEntry
          key={index}
          title={blogEntry.title}
          modified={blogEntry.modified}
          author={blogEntry.author}
        >
          {blogEntry.content}
        </BlogEntry>
      ))}
    </div>
  )
}

export default HomePage

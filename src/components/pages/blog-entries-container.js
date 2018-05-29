import React from 'react'
import PropTypes from 'prop-types'

import BlogEntry from './blog-entry'

const BlogEntriesContainer = ({ blogEntries }) => (
  <div>
    {blogEntries.map((blogEntry, index) => (
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

BlogEntriesContainer.propTypes = {
  blogEntries: PropTypes.array.isRequired
}

export default BlogEntriesContainer

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*
Link to external websites, that open in a new browser tab
See https://mathiasbynens.github.io/rel-noopener
*/
export const ExternalLink = ({ url, children, ...rest }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}
ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

const Heading = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
`

export const PageTitle = ({ icon, children, extra, style }) => {
  return (
    <Heading style={{ paddingBottom: '1rem', ...style }}>
      {icon && <PageTitleIcon>{icon}</PageTitleIcon>}
      <div>
        {children}
        {extra && <PageTitleExtra>{extra}</PageTitleExtra>}
      </div>
    </Heading>
  )
}

const PageTitleIcon = styled.div`
  margin-right: 0.5rem;
  color: #fa9e59;
`

const PageTitleExtra = styled.span`
  color: #788080;
  font-size: 16px;
  margin-left: 0.25rem;
`

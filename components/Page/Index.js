import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => (
  <div
    ref={ref}
    {...rest}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>

    {children}
  </div>
))

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

Page.defaultProps = {
  title: 'DMP'
}

export default Page

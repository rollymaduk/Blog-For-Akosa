import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './subtitle.module.css'

const Component = (props) => {
  return (
    <h2 className={classes.Container}>
      {props.children}
    </h2>
  )
}

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Component

import React from 'react'

const style = {
  width: '100%',
  height: '100%',
  padding: 0,
  border: 0
}

function defaultGetWidth (element) {
  return element.clientWidth
}

function defaultGetHeight (element) {
  return element.clientHeight
}

export default function Dimensions ({ getHeight = defaultGetHeight, getWidth = defaultGetWidth } = {}) {
  return (ComposedComponent) => {
    return class DimensionsHOC extends React.Component {
      state = {}

      updateDimensions = () => {
        const container = this.refs.container
        if (!container) {
          throw new Error('Cannot find container div')
        }
        this.setState({
          containerWidth: getWidth(container),
          containerHeight: getHeight(container)
        })
      }

      onResize = () => {
        if (this.rqf) return
        this.rqf = window.requestAnimationFrame(() => {
          this.rqf = null
          this.updateDimensions()
        })
      }

      componentDidMount () {
        this.updateDimensions()
        window.addEventListener('resize', this.onResize, false)
      }

      componentWillUnmount () {
        window.removeEventListener('resize', this.onResize)
      }

      render () {
        return (
          <div style={style} ref='container'>
            {(this.state.containerWidth || this.state.containerHeight) &&
             <ComposedComponent {...this.state} {...this.props} updateDimensions={this.updateDimensions}/>}
          </div>
        )
      }
    }
  }
}

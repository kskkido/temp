import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

class ScrollBottom extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		watch: PropTypes.number
	}

	static defaultProps = {
		watch: 0
	}

	componentDidUpdate(nextProps) {
		if (this.props.watch !== nextProps.watch) {
			const { scrollHeight } = this.target

			this.target.scrollTop = scrollHeight
		}
	}

	receiveRef = (el) => { this.target = el }

	renderChildren = () => {
		const { children } = this.props
		const child = React.Children.only(children)

		return React.cloneElement(child, {
			innerRef: this.receiveRef
		})
	}

	render() {
		return this.renderChildren()
	}
}

export default ScrollBottom

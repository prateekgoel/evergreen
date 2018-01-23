import React, { PureComponent } from 'react'
import TableCell from './TableCell'

export default class TableHeaderCell extends PureComponent {
  static propTypes = {
    /**
     * Composes the TableCell component as the base.
     */
    ...TableCell.propTypes
  }

  static defaultProps = {
    height: 28,
    appearance: 'tint2',
    overflow: 'visible'
  }

  render() {
    const { ...props } = this.props
    return <TableCell {...props} />
  }
}

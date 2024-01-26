import { Card } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CardSection from '../CardSection/CardSection'
import ChartSection from '../ChartSection/ChartSection'

export class HomePage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <CardSection/>
        {/* <h3>Cell Voltages</h3> */}
        {/* <Card variant="outlined"> Min: 3841 mV </Card>
        <span> Max: 3856 mV </span>
        <span> Diff: 15 mV </span>
        <span> Avg: 3854 mV </span> */}
        <ChartSection/>
      </div>
    )
  }
}
// labels: ['Min: 3841 mV', 'Max: 3856 mV', 'Diff: 15 mV', 'Avg: 3854 mV'],
export default HomePage
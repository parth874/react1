import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import '../dashboard/dashboard.css'

function Dashboard(props) {
  const [state, setState] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91,100],
      },
      {
        name: 'series-2',
        data: [20, 10, 25, 20, 39, 70, 90, 11,10],
      },
    ],
  })

  return (
      <div className="heading">
        <h1>Dashboard</h1>
      <div className="row">
      
        <div>
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="600"
          />
        </div>
        <div >
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="600"
          />
        </div>
        <div >
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="600"
          />
        </div>
        <div >
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="600"
          />
        </div>
        <div >
          <Chart
            options={state.options}
            series={state.series}
            type="scatter"
            width="600"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

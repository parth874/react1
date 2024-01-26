
import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import '../ChartSection/ChartSection.css'

function ChartSection() {
    var options = {
        series: [
            {
                name: 'Cell Voltage',
                data: [
                    {
                        x: '1',
                        y: 3841
                    },
                    {
                        x: '2',
                        y: 3854
                    },
                    {
                        x: '3',
                        y: 3856
                    },
                    {
                        x: '4',
                        y: 3856
                    },
                    {
                        x: '5',
                        y: 3856
                    },
                    {
                        x: '6',
                        y: 3854
                    },
                    {
                        x: '7',
                        y: 3856
                    },
                    {
                        x: '8',
                        y: 3854
                    }, {
                        x: '9',
                        y: 3854
                    },
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'bar'

        },
        grid: {
            show: false
        },
        xaxis: {

            labels: {
                formatter: function (value) {
                    return value;
                }
            },
            style: {
                color: "#fff",
                fontSize: "20",
                // background: "#FF4560"
            },
        },

        title: {
            // text: "Cell Voltages",
            align: "center",
            style: {
                color: "#fff",
                fontSize: "20",
                // background: "#FF4560"
            },
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%'
            }
        },
        colors: [
            function ({ value, seriesIndex, w }) {
                if (value < 3850) {
                    return '#008DA8'
                }
                else if (value == 3854) {
                    return '#74ee15'
                }
                else if (value == 4000) {
                    return '#CCCCCC'
                }
                else {
                    return '#B8B209'
                }
            }
        ]
    }


    var options_temp = {
        series: [
            { name: "Tempreature", data: [{ x: "CT1", y: 24 }, { x: "CT2", y: 24 }, { x: "CT3", y: 24 }, { x: "CT4", y: 23 }, { x: "ICCT1", y: 26 }, { x: "ICT2", y: 29 }, { x: "PCBT1", y: 23 }, { x: "PCBT2", y: 20 }] }
        ],
        chart: {
            height: 350,
            type: 'bar'

        },
        grid: {
            show: false
        },
        xaxis: {

            labels: {
                formatter: function (value) {
                    return value;
                }
            },
            style: {
                color: "#fff",
                fontSize: "20",
                // background: "#FF4560"
            },
        },

        title: {
            // text: "Tempreature",
            align: "center",
            style: {
                color: "#fff",
                fontSize: "20",
                // background: "#FF4560"
            },
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%'
            }
        },
        colors: [
            function ({ value, seriesIndex, w }) {
                if (value == 23) {
                    return '#008DA8'
                }
                else if (value == 24) {
                    return '#B8B209'
                }
                else if (value == 4000) {
                    return '#CCCCCC'
                }
                else {
                    return '#02CCFE'
                }
            }
        ]
    }

    const series = { name: "STATE OF CHARGE", data: [3854] }
    const series2 = { name: "STATE OF CHARGE", data: [4000, 4000, 4000, 3856] }

    return (
        <div>
            <div className='homerow'>
                <div className="card text-white text-center  m-3">
                    <h4>Cell Voltages</h4>
                    <Chart
                        options={options}
                        series={options.series}
                        type="bar"
                        width="700"
                        height="400"
                    // fill = {state.series.data}
                    />
                </div>
                <div className="card text-white text-center  m-3">
                    <h4>Tempreature</h4>
                    <Chart
                        options={options_temp}
                        series={options_temp.series}
                        type="bar"
                        width="740"
                        height="400"
                    // fill = {state.series.data}
                    />
                </div>
            </div>
            <div className="homerow" >
                <div className="card text-white text-center  m-3">
                    <h4>STATE OF CHARGE</h4>
                    <h4>100%</h4>
                    <Chart
                        options={options}
                        series={series.data}
                        type="donut"
                        width="470"
                        height="400"
                    />
                </div>
                <div className="card text-white text-center  m-3">
                    <h4>STATE OF HEALTH</h4>
                    <h4>27%</h4>
                    <Chart
                        options={options}
                        series={series2.data}
                        type="donut"
                        width="470"
                        height="400"
                    />
                </div>
                <div className="card text-white text-center  m-3">
                    <h4>STATE OF POWER</h4>
                    <h4>100%</h4>
                    <Chart
                        options={options}
                        series={series.data}
                        type="donut"
                        width="470"
                        height="400"

                    />
                </div>
            </div>
            <div className='homerow'>
                <div className="card text-white text-center  m-3" style={{ width: "21rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                    <div className="card-body">
                        <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Cycle Count</h6>
                        <p className="card-text fw-bold fs-5" style={{}}>0
                        </p>
                    </div>
                </div>
                <div className="card text-white text-center  m-3" style={{ width: "21rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                    <div className="card-body">
                        <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Energy In</h6>
                        <p className="card-text fw-bold fs-5" style={{}}>1103 W
                        </p>
                    </div>
                </div>
                <div className="card text-white text-center  m-3" style={{ width: "22rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                    <div className="card-body">
                        <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Energy Out</h6>
                        <p className="card-text fw-bold fs-5" style={{}}>281 W
                        </p>
                    </div>
                </div>
                <div className="card text-white text-center  m-3" style={{ width: "22rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                    <div className="card-body">
                        <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Remaining Capacity</h6>
                        <p className="card-text fw-bold fs-5" style={{}}>16330 mAh
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartSection
import React, { Component } from 'react'
import { useState } from 'react'
import '../CardSection/CardSection.css'
import Chart from 'react-apexcharts'

export class CardSection extends Component {
    render() {

        return (
            <div>
                <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important',fontFamily: 'NHaasGroteskDSPro-65Md', backgroundColor: "rgb(43, 43, 43)"}}>
                    Dashboard
                </div>
                <section className="homerow" >
                    <div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Pack Voltage</h6>
                            <p className="card-text fw-bold fs-5" style={{ }}>
                                {this.props.mCap24} 50.1V
                            </p>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Instantaneous Power</h6>
                            <p className="card-text fw-bold fs-5" style={{ }}>
                                0kW{this.props.ath}
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Instantaneous Current</h6>
                            <p className="card-text fw-bold fs-5" style={{  }}>
                                0 A{this.props.atl}
                            </p>
                        </div>
                    </div>

                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Average Pack Current </h6>
                            <p className="card-text fw-bold fs-5" style={{  }}>
                                {this.props.sentiment} 0 A
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3" style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Maximum pack Current</h6>
                            <p className="card-text fw-bold fs-5" style={{}}>0 A
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Charging</h6>
                            <p className="card-text fw-bold fs-5" style={{  }}>
                                off{this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Discharging </h6>
                            <p className="card-text fw-bold fs-5" style={{  }}>
                                off{this.props.low24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3" style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Pack Power Mode</h6>
                            <p className="card-text fw-bold fs-5" style={{}}>ACTIVE MODE
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3" style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Pack Current State</h6>
                            <p className="card-text fw-bold fs-5" style={{}}>CURRENTSLEEP
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default CardSection
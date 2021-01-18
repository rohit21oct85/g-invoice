import React from 'react'
import './mainDash.css';

export default function Dashboard() {
    
    return (

            <>
            <div className="col-lg-10 col-md-10 main_dash_area">
                <div className="main-area-all">
                    <div className="dashboard_main-container">
                        <div className="dash-main-head">
                            <h2>Dashboard</h2>
                        </div>
                        <hr/>
                        <div className="dash_over_view">
                            <h5>Total Receivables</h5>
                            <hr/>
                            <div className="dash_over_view_main">
                                <div className="over_view_total_rec">
                                    <span className="over_view_total_head"> Total Receivables : ₹ 100.00</span>
                                    <div className="over_view_total_line">
                                        <div className="over_view_total_load"></div>
                                    </div>
                                </div>
                               
                                <div className="over_view_total_breakout">
                                    <div className="view_total_breakout_part">
                                        <span className="total_breakout_part_name name-blue">CUURENT</span>
                                        <span className="total_breakout_part_amount">₹ 0.00</span>
                                    </div>
                                    <div className="view_total_breakout_part">
                                        <span className="total_breakout_part_name name-red">OVERDUE</span>
                                        <span className="total_breakout_part_amount">₹ 0.00</span>
                                        <span className="total_breakout_part_name_sub">1 - 15 Days</span>
                                    </div>
                                    <div className="view_total_breakout_part">
                                        <span className="total_breakout_part_name"></span>
                                        <span className="total_breakout_part_amount">₹ 0.00</span>
                                        <span className="total_breakout_part_name_sub">16 - 30 Days</span>
                                    </div>
                                    <div className="view_total_breakout_part">
                                        <span className="total_breakout_part_name"></span>
                                        <span className="total_breakout_part_amount">₹ 0.00</span>
                                        <span className="total_breakout_part_name_sub">30 - 15 Days</span>
                                    </div>
                                    <div className="view_total_breakout_part">
                                        <span className="total_breakout_part_name"></span>
                                        <span className="total_breakout_part_amount">₹ 0.00</span>
                                        <span className="total_breakout_part_name_sub">Above 45 Days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                
            </>
        
    )
}
 
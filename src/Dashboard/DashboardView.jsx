import React, { memo } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiDotsThreeVertical } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { TbArrowDownRight } from "react-icons/tb";
import './Dashboardstyles/DashboardView.css';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

function DashboardView() {
    return (
        <div className='section-container'>
            <div className="background-board">
                {/* Header Section */}
                <div className="heading-board">
                    <h1>Dashboard</h1>
                    <div className="dates-dash">
                        <span>12 February, 2025</span>
                        <div className="goods-imported">
                            <button>Export</button>
                        </div>
                    </div>
                </div>

                {/* Sales Details Section */}
                <div className="sells-details">
                    <div className="average-goods">
                        <p>Total sales</p>
                        <p>$272.98</p>
                        <div className="arrow-compared">
                            <PiDotsThreeVertical className="dot-icons" />
                            <div className="right-uparrow">
                                 
                            </div>
                        </div>
                    </div>
                    
                    <div className="value-ordered">
                        <p>Average order value</p>
                        <p>$272.98</p>
                        <div className="down-vertical">
                            <PiDotsThreeVertical className="horizontal-idots" />
                            <div className="next-updated">
                                
                            </div>
                        </div>
                    </div>

                    <div className="sum-sales">
                        <p>Total orders</p>
                        <p>578</p>
                        <div className="icons-dotted">
                            <PiDotsThreeVertical className='direct-icons' />
                            <div className="latest-upgrades">
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active Users Section */}
                                   <div className="most-block">
  <div className='active-categories'>
    <h3>Active users</h3>
    <PiDotsThreeVertical className='devoloped-icon' />
  </div>
  <p>148</p>
  <div className="active-projects">
    <div className="pages-used"></div>
    <ul>
      <li>
        <span>/products/brandix-z4</span>
        <span>15</span>
      </li>
      <li>
        <span>/categories/drivetrain</span>
        <span>11</span>
      </li>
      <li>
        <span>/categories/monitors</span>
        <span>7</span>
      </li>
      <li>
        <span>/account/orders</span>
        <span>4</span>
      </li>
      <li>
        <span>/cart</span>
        <span>3</span>
      </li>
      <li>
        <span>/checkout</span>
        <span>3</span>
      </li>
      <li>
        <span>/pages/about-us</span>
        <span>1</span>
      </li>
    </ul>
  </div>
</div>

                {/* Chart Section */}
                <div className="charts-graph">
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardView;

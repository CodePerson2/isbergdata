import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';

const day = ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'];
const week = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const month = ['May 1', 'May 7', 'May 13', 'May 19', 'May 25', 'May 31'];
export const green = '89, 186, 65';


function BigChart() {
    const [timeRange, setTimeRange] = useState('Day');
    const [chartVal, setChartVal] = useState([1566, 1744, 1657, 2200, 1944, 2300, 1644, 2487, 2356, 1856, 1734, 1934]);
    const [timeLabels, setTimeLabels] = useState(day);

    let percent = "2.6%";
    let options = {
        chart: {
            height: 280,
            type: "area",
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        series: [
            {
                name: "VIEWS",
                data: chartVal
            }
        ],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.5,
                stops: [0, 60, 100]
            }
        },
        options: {
            chart: {
                height: 280,
                type: "area",
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            annotations: {
                yaxis: [
                    {
                        y: (chartVal.reduce((a, b) => a + b, 0)) / chartVal.length,
                        strokeDashArray: 5,
                        borderColor: '#00E396',
                        opacity: 1,
                        label: {
                            offsetX: 30,
                            offsetY: 7,
                            borderColor: 'transparent',
                            style: {
                                color: 'orange',
                                background: 'white',
                                fontWeight: 600
                            },
                            text: 'AVG'
                        }
                    }
                ]
            },
            yaxis: {
                opposite: true,
                min: 0,
                tickAmount: 2,
                labels: {
                    style: {
                        colors: ['rgba(158, 158, 158, 0.9)'],
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: '',
                    },
                    formatter: function (val, index) {
                        return val !== 0 ? Math.round(val / 100) / 10 + 'K' : '0';
                    }
                },
                tooltip: {
                    enabled: false,
                }
            },
            xaxis: {
                labels: { show: false },
                tooltip: {
                    enabled: false,
                }
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.55,
                    opacityTo: 0.50
                }
            },
            grid: {
                show: true,
                borderColor: 'rgba(219, 219, 219, 0.5)',
                strokeDashArray: 10,
                position: 'back',
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
                column: {
                    colors: undefined,
                    opacity: 0.5
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                colors: undefined,
                width: 2,
                dashArray: 0,
            }
        }

    };

    let randomArray = (min, max, len) => {
        let arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
        }
        return arr;
    }

    useEffect(() => {
        // Update the document title using the browser API
        if (timeRange === 'Day') {
            setChartVal(randomArray(1400, 2500, 12));
            setTimeLabels(day);
        } else if(timeRange === 'Week'){
            setChartVal(randomArray(16000, 25000, 7));
            setTimeLabels(week);
        } else {
            setChartVal(randomArray(44000, 99000, 30));
            setTimeLabels(month);
        }
    }, [timeRange]);

    return (
        <div className="flex flex-col min-w-[500px] bg-white p-4 pb-0 rounded-md">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="text-xl text-black mb-1 font-medium">
                        {'Views'}
                    </div>
                    <div className="flex flex-row">
                        <div className="text-4xl font-semibold text-black">
                            {Math.round(chartVal.reduce((a, b) => a + b, 0) / chartVal.length / 10) / 10 + 'K'}
                        </div>
                        <div>
                            <div className="flex flex-col mt-1 ml-2">
                                <div className="flex flex-row">
                                    <div className="text-m" style={{ color: 'rgba(' + green + ', 1)' }}>
                                        <BiTrendingUp />
                                    </div>
                                    <div className=" text-xs ml-1.5 font-bold" style={{ color: 'rgba(' + green + ', 1)' }}>
                                        {percent}
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400">
                                    {'VS PREV. ' + timeRange.toUpperCase()}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row">
                        <button onClick={() => { setTimeRange('Day') }} className={`border-solid border-slate-200 border py-1 px-2 rounded-l-lg text-sm font-medium text-black ${timeRange === 'Day' ? 'bg-slate-100' : ''}`} >Day</button>
                        <button onClick={() => { setTimeRange('Week') }} className={`border-solid border-slate-200 border py-1 px-2 text-sm font-medium text-black ${timeRange === 'Week' ? 'bg-slate-100' : ''}`}>Week</button>
                        <button onClick={() => { setTimeRange('Month') }} className={`border-solid border-slate-200 border py-1 px-2 rounded-r-lg text-sm font-medium text-black ${timeRange === 'Month' ? 'bg-slate-100' : ''}`}>Month</button>
                    </div>


                </div>

            </div>
            <div className="flex flex-col">
                <Chart
                    // options={options.chart}
                    series={options.series}
                    options={options.options}
                    type="area"
                    // width="700"
                    height="150"
                />
                <div className="flex flex-row text-xs ml-3 mr-14 justify-between text-slate-400">
                {timeLabels.map((m) => {
                    return <div className="relative -top-5">{m}</div>
                })}
                </div>
            </div>
        </div>
    );
}

export default BigChart;

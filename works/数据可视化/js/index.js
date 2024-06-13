(function () {
    // 实例化对象
    let myChart = echarts.init(document.querySelector(".main-left-top .bar-line"));
    // 指定配置和数据
    var colors = ['#5793f3', '#d14a61', 'lightblue', 'lightgreen'];
    var option = {
        color: colors,
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            right: '5%',
            top: "10%",
            left: "5%",
            bottom: "10%"
        },
        legend: {
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true,
                    show: false, // 隐藏刻度线
                },
                axisPointer: {
                    type: 'shadow'
                },
                data: ['2018', '2019', '2020', '2021', '2022', '2023']
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 250,
                position: 'right',
                show: false,
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 250,
                position: 'right',
                offset: 80,
                show: false,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 25,
                position: 'left',
                show: false,
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 25,
                position: 'left',
                show: false,
                axisLine: {
                    lineStyle: {
                        color: colors[3]
                    }
                },
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: '环比',
                type: 'line',
                yAxisIndex: 2,
                data: [4.5, 6.3, 10.2, 20.3, 23.4, 23.0]
            },
            {
                name: '同比',
                type: 'line',
                yAxisIndex: 2,
                data: [10.2, 20.3, 23.4, 4.5, 6.3, 23.0]
            },
            {
                name: '高速公路',
                type: 'bar',
                data: [23.2, 25.6, 76.7, 135.6, 162.2, 32.6]
            },
            {
                name: '城镇公路',
                type: 'bar',
                yAxisIndex: 1,
                data: [26.4, 28.7, 70.7, 175.6, 182.2, 48.7]
            }
        ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    // 实例化对象
    let myChart = echarts.init(document.querySelector(".main-left-center .bar-line"));
    // (1)准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    };

    // 2. 指定配置和数据
    var option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: "#dddc6b"
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },

                data: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "11",
                    "12"
                ]
            },
            {
                axisPointer: { show: false },
                axisLine: { show: false },
                position: "bottom",
                offset: 20
            }
        ],

        yAxis: [
            {
                type: "value",
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },

                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "小型车",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#0184d5",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40
                ]
            },
            {
                name: "中型车",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                // 线条样式
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                // 面积样式
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    50,
                    30,
                    50,
                    66,
                    30,
                    71,
                    22,
                    58,
                    46,
                    20,
                    50,
                    33
                ]
            },
            {
                name: "大型车",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                // 线条样式
                lineStyle: {
                    normal: {
                        color: "pink",
                        width: 2
                    }
                },
                // 面积样式
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 150, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 150, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "pink",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    70,
                    55,
                    62,
                    60,
                    30,
                    46,
                    40,
                    50,
                    76,
                    58,
                    10,
                    40
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function(){
    let myChart = echarts.init(document.querySelector(".main-right-top .rader"));
    var option = {
         "normal": {
             "top": 200,
             "left": 300,
             "width": 500,
             "height": 400,
             "zIndex": 6,
             "backgroundColor": ""
         },
         "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
         "title": {
             "show": true,
             "left": "40%",
             "top": "1%",
             "textStyle": {
                 "fontSize": 18,
                 "color": "#fff",
                 "fontStyle": "normal",
                 "fontWeight": "normal"
             }
         },
         "tooltip": {
             "show": true,
             "trigger": "item"
         },
         "legend": {
             "show": true,
             "icon": "circle",
             "left": "35%",
             "top": "90%",
             "orient": "horizontal",
             "textStyle": {
                 "fontSize": 14,
                 "color": "#fff"
             },
             "data": ["告警类型"]
         },
         "radar": {
             "center": ["50%", "50%"],
             "radius": "70%",
             "startAngle": 90,
             "splitNumber": 4,
             "shape": "circle",
             "splitArea": {
                 "areaStyle": {
                     "color": ["transparent"]
                 }
             },
             "axisLabel": {
                 "show": false,
                 "fontSize": 18,
                 "color": "#fff",
                 "fontStyle": "normal",
                 "fontWeight": "normal"
             },
             "axisLine": {
                 "show": true,
                 "lineStyle": {
                     "color": "white"//
                 }
             },
             "splitLine": {
                 "show": true,
                 "lineStyle": {
                     "color": "white"//
                 }
             },
             "indicator": [{
                 "name": "超速",
                 "max": 88
             }, {
                 "name": "闯红灯",
                 "max": 88
             }, {
                 "name": "低速",
                 "max": 88
             }, {
                 "name": "违停",
                 "max": 88
             }, {
                 "name": "逆行",
                 "max": 88
             }]
         },
         "series": [{
             "name": "违规",
             "type": "radar",
             "symbol": "circle",
             "symbolSize": 10,
             "areaStyle": {
                 "normal": {
                     "color": "rgba(245, 166, 35, 0.4)"
                 }
             },
             itemStyle:{
                 color:'rgba(245, 166, 35, 1)',
                 borderColor:'rgba(245, 166, 35, 0.3)',
                 borderWidth:10,
             },
             "lineStyle": {
                 "normal": {
                     "type": "solid",
                     "color": "rgba(245, 166, 35, 1)",
                     "width": 2
                 }
             },
             "data": [
                 [80, 50, 55, 80,  66]
             ]
         }]
     };
     // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function(){
    let myChart = echarts.init(document.querySelector(".main-right-center .pie"));
    var option = {
        legend: {
            orient: 'vertical',
            top: "center",
            right: "5%",
            textStyle: {
                color: "#fff",
                fontSize: 16
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name: '营收占比',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['40%', '50%'],
            roseType: 'radius',
            label: {
                show: true,
                normal: {
                    position: 'outside',
                    fontSize: 16
                }
            },
            labelLine: {
                length: 1,
                length2: 20,
                smooth: true
            },
            data: [{
                    value: 742031,
                    name: '临汾',
                    itemStyle: {
                        color: "rgba(50,123,250,0.7)",
                        borderColor: "rgba(50,123,250,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 385971,
                    name: '忻州',
                    itemStyle: {
                        color: "rgba(244,201,7,0.7)",
                        borderColor: "rgba(244,201,7,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 341343,
                    name: '运城',
                    itemStyle: {
                        color: "rgba(23,216,161,0.7)",
                        borderColor: "rgba(23,216,161,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 843411,
                    name: '大同',
                    itemStyle: {
                        color: "rgba(122,60,235,0.7)",
                        borderColor: "rgba(122,60,235,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 134721,
                    name: '朔州',
                    itemStyle: {
                        color: "rgba(15,197,243,0.7)",
                        borderColor: "rgba(15,197,243,1)",
                        borderWidth: 3
                    }
                }
            ]
        }]
    };
    
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
     window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
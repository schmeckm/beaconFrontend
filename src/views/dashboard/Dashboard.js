import React, { lazy, useEffect, useState } from 'react'

import loading from '../../assets/loader.gif';
import 'chartjs-adapter-luxon';
import Chart from 'chart.js/auto';
import { Bar, Chart as ReactChart, Line } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import axios from 'axios';
// Chart.pluginService.register()
Chart.register(StreamingPlugin);

const Dashboard = () => {
  const [firstBeacon, setFirstBeacon] = useState([]);
  const [timeInterval, setTimeInterval] = useState(20000);
  const [secondBeacon, setSecondBeacon] = useState([]);
  useEffect(() => {
    console.log(timeInterval);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const startTime = today.toISOString()
    let endTime = today.toISOString().split(":");
    endTime[1] = (parseInt(endTime[1]) + 2)
    const endTimeFinal = endTime.join(":")
    const interval = setInterval(() => {
        axios.post("https://indoor-localization.net/api/beacon/getRSSI", {
          "startTime": startTime,
          "endTime": endTimeFinal,
          "beaconMac": "AC233F71C993"
        }).then(result => setFirstBeacon(result.data.data));
        axios.post("https://indoor-localization.net/api/beacon/getRSSI", {
          "startTime": startTime,
          "endTime": endTimeFinal,
          "beaconMac": "AC233F71C930"
        }).then(result => setSecondBeacon(result.data.data));
    }, timeInterval);
    return () => clearInterval(interval);
    
  }, [timeInterval]);
  console.log(secondBeacon)
  console.log(firstBeacon);
  return (
    <div>
      {
        firstBeacon.length < 1 ?
        <img className="loading-style" src={loading} alt="" height={100} width={200}/>
      :
      <div className="rssi-style">
        <Line
          data={{
            datasets: [{
              label: 'Beacon Mac: AC233F71C993',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgb(255, 99, 132)',
              borderDash: [8, 4],
              fill: false,
              data: []
            }, {
              label: 'Beacon Mac: AC233F71C930',
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgb(54, 162, 235)',
              cubicInterpolationMode: 'monotone',
              fill: false,
              data: []
            }]
          }}
          options={{
            scales: {
              x: {
                type: 'realtime',
                realtime: {
                  duration: 15000,
                  refresh: 2000,
                  delay: 2000,
                  onRefresh: chart => {
                    const now = Date.now();
                    if (firstBeacon) {
                      for (const i of firstBeacon) {
                        chart.data.datasets[0].data.push({
                          x: now,
                          y:i.rssi,
                        });
                      }
                    }
                    if (secondBeacon) {
                      for (const i of secondBeacon) {
                        chart.data.datasets[1].data.push({
                          x: now,
                          y: i.rssi,
                        })
                      }
                    }
                    ;
                    chart.update("quiet")
                  }
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'rssi'
                }
              }
            },
            interaction: {
              intersect: false
            }
          }
          }

        />
      </div>
}
    </div>
  )
}

export default Dashboard;

"use client";
import React, { useEffect, useState } from "react";
import LineChart from "@/components/LineChart";
import dynamic from "next/dynamic";

const ShowWindowLocation = dynamic(() => import("../components/LineChart"), { ssr: false });

const Home = () => {
  const [mess, setMess] = useState<any>([]);
  useEffect(() => {
      if (typeof window !== 'undefined') {
        fetch("http://localhost:5000/api/get-gdb").then(
          res => res.json()
        ).then(data => {
          setMess(data.data)
        }).catch(error => {
          console.error('Error fetching data:', error);
        });
      }
  }, []);

  let get_date = mess.map((date:any) => date.date);
  let numb = mess.map((numb: any) => numb.gdb);

  const data = {
    labels: get_date,
    datasets: [{
      labels: "GBD",
      data: numb,
      // backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      fill: false
    }]
  }

  return (
    <div>
      {/* <LineChart chartData={data} /> */}
      <ShowWindowLocation chartData={data} />
    </div>
  )
}

export default Home;
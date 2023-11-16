import React, { useEffect, useState } from "react";
import { Chart } from "chart.js";

const Home = () => {
  const [mess, setMess] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/get-data").then(
      res => res.json()
    ).then(data => {
      setMess(data.data)
    })
  }, [])
  return (
    <>
      <div>
        {
          mess.map((item: any, index: any) => (
            <div key={index}>
              <p>{item.gdb}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home;
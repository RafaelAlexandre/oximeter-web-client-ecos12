import React, { useEffect, useState } from "react";
import { getLastTenMeasures } from "../../service/requests";
import { HomePage, GraphTitle } from "./styles";
import { Measure } from "../../interfaces/measureInterface";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    bpm: 4000,
    spo2: 2400,
  },
  {
    name: "Page B",
    bpm: 3000,
    spo2: 1398,
  },
  {
    name: "Page C",
    bpm: 2000,
    spo2: 9800,
  },
  {
    name: "Page D",
    bpm: 2780,
    spo2: 3908,
  },
  {
    name: "Page E",
    bpm: 1890,
    spo2: 4800,
  },
  {
    name: "Page F",
    bpm: 2390,
    spo2: 3800,
  },
  {
    name: "Page G",
    bpm: 3490,
    spo2: 4300,
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [measureList, setMeasureList] = useState<Measure[]>([]);
  const [localeDateString, setLocaleDateString] = useState<String>("");
  const [localeTimeString, setLocaleTimeString] = useState<String>("");

  async function loadLastTenMeasures() {
    const response = await getLastTenMeasures();
    if (response) {
      console.log(response);
      setMeasureList(response);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    loadLastTenMeasures();
  }, []);

  useEffect(() => {
    measureList.map((m) => {
      var date = new Date(m.date);
      setLocaleDateString(date.toLocaleDateString("pt-Br"));
      setLocaleTimeString(date.toLocaleTimeString("pt-Br"));
      setIsLoading(false);
    });
  }, [measureList]);

  return (
    <HomePage>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <>
          <GraphTitle><h1>Medidas de {localeDateString}</h1></GraphTitle>
          <LineChart
            width={800}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="bpm"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="spo2" stroke="#82ca9d" />
          </LineChart>
        </>
      )}
    </HomePage>
  );
}

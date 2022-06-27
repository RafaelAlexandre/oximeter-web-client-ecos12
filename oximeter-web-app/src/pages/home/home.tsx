import React, { useEffect, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { getLastTenMeasures } from "../../service/requests";
import { HomePage, GraphTitle, CommonText, HomeLeft, HomeRight } from "./styles";
import {
  ChartJsBpmItem,
  ChartJsItem,
  ChartJsSpo2Item,
  Measure,
} from "../../interfaces/measureInterface";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

export function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [measureList, setMeasureList] = useState<Measure[]>([]);
  const [localeDateString, setLocaleDateString] = useState<String>("");
  const [chartJsObject, setChartJsObject] = useState<ChartJsItem[]>([]);
  const [chartJsBpmObject, setChartJsBpmObject] = useState<ChartJsBpmItem[]>(
    []
  );
  const [chartJsSpo2Object, setChartJsSpo2Object] = useState<ChartJsSpo2Item[]>(
    []
  );

  async function loadLastTenMeasures() {
    const response = await getLastTenMeasures();
    if (response) {
      console.log(response);
      setMeasureList(response);
    }
  }

  function buildChartjsObject() {
    const chartJsObjectArray: React.SetStateAction<ChartJsItem[]> = [];
    const chartJsBpmObjectArray: React.SetStateAction<ChartJsBpmItem[]> = [];
    const chartJsSpo2ObjectArray: React.SetStateAction<ChartJsSpo2Item[]> = [];

    measureList.map((measure) => {
      var date = new Date(measure.date);
      var localeDateString = date.toLocaleDateString("pt-Br");
      var localeTimeString = date.toLocaleTimeString("pt-Br", {
        hour: "2-digit",
        minute: "2-digit",
      });

      var chartJsItem = {
        name: localeTimeString,
        bpm: measure.bpm,
        spo2: measure.spo2,
      };

      var chartJsBpmItem = {
        name: localeTimeString,
        bpm: measure.bpm,
      };

      var chartJsSpo2Item = {
        name: localeTimeString,
        spo2: measure.spo2,
      };

      console.log(chartJsItem);
      chartJsObjectArray.push(chartJsItem);
      chartJsBpmObjectArray.push(chartJsBpmItem);
      chartJsSpo2ObjectArray.push(chartJsSpo2Item);

      setLocaleDateString(localeDateString);
    });

    setChartJsObject(chartJsObjectArray);
    setChartJsBpmObject(chartJsBpmObjectArray);
    setChartJsSpo2Object(chartJsSpo2ObjectArray);
  }

  useEffect(() => {
    setIsLoading(true);
    loadLastTenMeasures();
  }, []);

  useEffect(() => {
    buildChartjsObject();
    setIsLoading(false);
  }, [measureList]);

  return (
    <HomePage>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <>
        <HomeLeft>

        </HomeLeft>
          <HomeRight>
            <GraphTitle>
              <span>
                Últimas 20 medidas atualizadas relativas à {localeDateString}
              </span>
            </GraphTitle>
            <div style={{ flex: "1 1 auto" }}>
              <AutoSizer>
                {({ width }) => (
                  <LineChart
                    width={width}
                    height={200}
                    data={chartJsObject}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                    style={{
                      width: "100%",
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip labelStyle={{ color: "var(--color-tooltip-label-color)" }}/>
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bpm"
                      stroke="var(--color-graph-bpm-color)"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="spo2"
                      stroke="var(--color-graph-spo2-color)"
                      activeDot={{ r: 8 }}
                    />

                  </LineChart>
                )}
              </AutoSizer>
            </div>
            <CommonText>
              <span>Dados de BPM individualizados</span>
            </CommonText>
            <div style={{ flex: "1 1 auto" }}>
              <AutoSizer>
                {({ width }) => (
                  <AreaChart
                    width={width}
                    height={200}
                    data={chartJsBpmObject}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip labelStyle={{ color: "var(--color-tooltip-label-color)" }}/>
                    <Area
                      type="monotone"
                      dataKey="bpm"
                      stroke="var(--color-graph-bpm-color)"
                      fill="var(--color-graph-bpm-color)"
                    />
                  </AreaChart>
                )}
              </AutoSizer>
            </div>

            <CommonText>
              <span>Dados de Spo2 individualizados</span>
            </CommonText>
            <div style={{ flex: "1 1 auto" }}>
              <AutoSizer>
                {({ width }) => (
                  <AreaChart
                    width={width}
                    height={200}
                    data={chartJsSpo2Object}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip labelStyle={{ color: "var(--color-tooltip-label-color)" }}/>
                    <Area
                      type="monotone"
                      dataKey="spo2"
                      stroke="var(--color-graph-spo2-color)"
                      fill="var(--color-graph-spo2-color)"
                    />
                  </AreaChart>
                )}
              </AutoSizer>
            </div>
          </HomeRight>

        </>
      )}
    </HomePage>
  );
}

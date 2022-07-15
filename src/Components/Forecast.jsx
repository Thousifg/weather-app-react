import React from "react";
import { Card4 } from "./Cards";

const weekdays = ["Sun", "Mon", "tue", "wed", "thu", "fri", "sat"];

const day = (date) => {
  return weekdays[new Date(date).getDay()];
};

const Forecast = (props) => {
  console.log(props);
  return (
    <>
      <table className="w-full h-68 dark:text-white dark:bg-zinc-900 rounded-2xl">
        <thead className="text-left">
          <tr>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((val, index) => {
            if (index === 0)
              return (
                <Card4
                  day={"Today"}
                  max_c={val.day.maxtemp_c}
                  min_c={val.day.mintemp_c}
                  imgsrc={`https:${val.day.condition.icon}`}
                />
              );
            return (
              <Card4
                day={day(val.date)}
                max_c={val.day.maxtemp_c}
                min_c={val.day.mintemp_c}
                imgsrc={`https:${val.day.condition.icon}`}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Forecast;

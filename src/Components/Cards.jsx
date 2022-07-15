const Card1 = (props) => {
  return (
    <>
      <div className="w-full py-6 flex justify-evenly items-center dark:text-white bg-indigo-50 dark:bg-zinc-900 rounded-2xl">
        <div className="flex justify-center items-center flex-col text-md font-bold pr-8 border-r-2 border-black dark:border-white">
          <div>Wind</div>
          <div>{props.wind} km/h</div>
        </div>
        <div className="flex justify-center items-center flex-col text-md font-bold">
          <div>Humidity</div>
          <div>{props.humidity} %</div>
        </div>
      </div>
    </>
  );
};

const Card2 = (props) => {
  return (
    <>
      <div className="w-full flex justify-evenly dark:text-white dark:bg-zinc-900 rounded-2xl">
        <div className="flex justify-center items-center flex-col p-1 text-md font-bold">
          <div>Sunrise</div>
          <div>{props.sunrise}</div>
          <img src="./images/sun.png" alt="img" />
        </div>
        <div className="flex justify-center items-center flex-col p-1 text-md font-bold">
          <div>Sunset</div>
          <div>{props.sunset}</div>
          <img src="./images/sunset.png" alt="img" />
        </div>
      </div>
    </>
  );
};

const Card4 = (props) => {
  return (
    <>
      <tr>
        <td className="px-4 capitalize font-semibold">{props.day}</td>
        <td>
          <img className="w-16 h-16" src={props.imgsrc} />
        </td>
        <td className="px-4 font-semibold">
          {props.max_c}
          <sup>o</sup>
        </td>
        <td className="px-4 font-semibold">
          {props.min_c}
          <sup>o</sup>
        </td>
      </tr>
    </>
  );
};

const Card6 = (props) => {
  return (
    <>
      <div className="p-2 pb-0">
        <h3 className="font-semibold ">
          {props.temp}
          <sup>o</sup>
        </h3>
        <img className="w-8 h-8" src={`https:${props.imgsrc}`} />
        <h3>{props.time}</h3>
      </div>
    </>
  );
};

export default Card1;
export { Card2, Card4, Card6 };

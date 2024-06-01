/* import React, { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: `https://google-news13.p.rapidapi.com/latest`,
  params: { lr: "en-US" },
  headers: {
    "X-RapidAPI-Key": `030089bf13mshdaec2a36e6229f8p1c3359jsn8ace8d260015`,
    "X-RapidAPI-Host": `google-news13.p.rapidapi.com`,
  },
};

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options.url);
        console.log(response.json());
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {data.map((item, index) => (
        <div className="news-item" key={index}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
 */
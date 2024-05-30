/* import { useEffect, useState } from "react";

const Apiservice = () => {
  const [Post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 
  return (
    <div>
      {Post.map((post) => (
        <div key={post.id}>
          <h1 className="text-3xl text-red-500">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Apiservice;
 */

import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getArticles = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-04-30&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    console.log(response.data);
    return response.data.articles;
  } catch (error) {
    console.log("Error fetching top headlines:", error);
  }
};

import axios from "axios";

// Ensure the environment variable is correctly accessed
const API_KEY = import.meta.env.VITE_API_KEY;

export const getArticles = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: "apple",
        from: "2024-05-30",
        to: "2024-05-30",
        sortBy: "popularity",
        apiKey: API_KEY,
      },
    });
    console.log(response.data);
    return response.data.articles;
  } catch (error) {
    // Improved error handling
    if (error.response) {
      console.error("Error response:", error.response.data);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    console.error("Error config:", error.config);
  }
};

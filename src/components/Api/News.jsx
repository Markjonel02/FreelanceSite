import { useEffect, useState } from "react";
import { getArticles } from "./Apiservice";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getArticles(page);
      setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, [page]);

  const loadMoreArticles = () => {
    setPage(page + 1);
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="p-4 border rounded">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-96 h-96 mb-4 rounded object-cover"
            />
            <h3 className="font-bold text-lg mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-2">{article.description}</p>
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-600">{article.source.name}</p>
              <p className="text-gray-600">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && articles.length >= 15 && (
        <button
          onClick={loadMoreArticles}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default News;

import React, { useEffect, useState } from "react";
import { Masonry } from "@mui/lab";
import { getArticles } from "./Apiservice";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { ApiLoaders } from "./ApiLoaders";
const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getArticles(page);
      setArticles((prevArticles) => [...prevArticles, ...data]);
      setLoading(false);
    };

    fetchArticles();
  }, [page]);

  const loadMoreArticles = () => {
    setPage(page + 1);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Latest News
      </Typography>
      {loading && <ApiLoaders />}
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {articles.map((article, index) => (
          <Card key={index} sx={{ maxWidth: "100%" }}>
            {article.urlToImage && (
              <CardMedia
                component="img"
                height="200"
                image={article.urlToImage}
                alt={article.title}
              />
            )}
            <CardContent>
              <Typography variant="h6" component="h3">
                {article.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {article.description}
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                {article.source.name} -{" "}
                {new Date(article.publishedAt).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Masonry>
      {!loading && articles.length >= 15 && (
        <div className="relative">
          <div className="bg-black absolute left-0 bottom-0 z-50 "></div>
          <Button
            variant="contained"
            color="primary"
            onClick={loadMoreArticles}
            sx={{ mt: 4 }}
          >
            See More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default News;

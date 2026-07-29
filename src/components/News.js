import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// function based component
const News = ({
  pageSize,
  country,
  category,
  color,
  setProgress,
}) =>
{
  // console.log("Hi I am a constructor from News component");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const capitalize = (str) =>
  str ? str[0].toUpperCase() + str.slice(1) : "";

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fd6b8c2e4eb34b8497ab9a2373c4517a&page=${pageNumber}&pageSize=${pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    setProgress(30);
    const parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  // replacement of ComponentDidMount 
  useEffect(() => {
    document.title = `${capitalize(category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fd6b8c2e4eb34b8497ab9a2373c4517a&page=${pageNumber+1}&pageSize=${pageSize}`;
    setPageNumber(pageNumber+1);
    const data = await fetch(url);
    const parsedData = await data.json();
    // console.log(parsedData);
    // append krenge fetchMoreData me
    setArticles((prevArticles) => {
      return prevArticles.concat(parsedData.articles)
    });
    setTotalResults(parsedData.totalResults);
  }
  
  return (
    <>
      <h2 className="text-center" style={{ margin: "80px 20px 0px" , marginTop : '80px'}}>
        NewsMasala - Top {capitalize(category)} Headlines
      </h2>
      
      {loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source?.name || "Unknown"}
                    color={color}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

News.defaultProps = {
  pageSize: 5,
  country: "us",
  category: "general",
  color: "primary",
  setProgress: () => {},
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  color: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
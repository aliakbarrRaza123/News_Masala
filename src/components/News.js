import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// extends means Component is the parent class for News class here (Inheritance)
export default class News extends Component {
  // static variable is fixed for every object of the class 
  static defaultProps = {
    pageSize : 5,
    country : 'us',
    category : 'general',
    color : 'primary',
    setProgress: () => {}
  }

  static propTypes = {
    pageSize : PropTypes.number,
    country : PropTypes.string,
    category : PropTypes.string,
    color : PropTypes.string,
    setProgress : PropTypes.func,
  }

  capitalize = (str) =>
  str ? str[0].toUpperCase() + str.slice(1) : "";

  constructor(props) {
    // super() used to run the constructor of base class first
    super(props);
    // console.log("Hi I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      totalResults : 0,
      pageNumber : 1,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }
  // using function to avoid repititive tasks
  updateNews = async() =>
  {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd6b8c2e4eb34b8497ab9a2373c4517a&page=${this.state.pageNumber}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    // set state render() hone ke baad chalega 
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })
    this.props.setProgress(100);
  }
  fetchMoreData = async () => 
  {
    let nextPage = this.state.pageNumber + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd6b8c2e4eb34b8497ab9a2373c4517a&page=${nextPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      pageNumber: nextPage,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults : parsedData.totalResults
    });
  }
  // it runs after render() method
  // fetch the api and async function wait for the response 
  async componentDidMount()
  {
    this.updateNews();
  }
  
  // previous or next ke button bnane ke liye methods

  // handlePreviousClick = async () => 
  // {
  //   this.setState({pageNumber : this.state.pageNumber - 1});
  //   this.updateNews();
  // }
  
  // handleNextClick = async () => 
  // {
  //   this.setState({pageNumber : this.state.pageNumber + 1});
  //   this.updateNews();
  // }

render() {
  return (
    <>
      <h2 className="text-center" style={{ margin: "20px" }}>
        NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
      </h2>
      
      {this.state.loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source?.name || "Unknown"}
                    color={this.props.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
      {/* <div className="container d-flex justify-content-between">
        <button
          disabled={this.state.pageNumber <= 1}
          type="button"
          className="btn btn-dark"
          onClick={this.handlePreviousClick}
        >
          &larr; Previous
        </button>

        <button
          disabled={
            this.state.pageNumber + 1 >
            Math.ceil(this.state.totalResults / this.props.pageSize)
          }
          type="button"
          className="btn btn-dark"
          onClick={this.handleNextClick}
        >
          Next &rarr;
        </button>
      </div> */}
    </>
  );
}
}
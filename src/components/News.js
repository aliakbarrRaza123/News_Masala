import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

// extends means Component is the parent class for News class here (Inheritance)
export default class News extends Component {
  // static variable is fixed for every object of the class 
  static defaultProps = {
    pageSize : 5,
    country : 'us',
    category : 'general',
    color : 'primary'
  }

  static propTypes = {
    pageSize : PropTypes.number,
    country : PropTypes.string,
    category : PropTypes.string,
    color : PropTypes.string,
  }

  constructor() {
    // super() used to run the constructor of base class first
    super();
    // console.log("Hi I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      totalResults : 0,
      pageNumber : 1,
    };
  }
  // using function to avoid repititive tasks
  async updateNews()
  {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd6b8c2e4eb34b8497ab9a2373c4517a&page=${this.state.pageNumber}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })
  }
  // it runs after render() method
  // fetch the api and async function wait for the response 
  async componentDidMount()
  {
    this.updateNews();
  }
  
  handlePreviousClick = async () => 
  {
    this.setState({pageNumber : this.state.pageNumber - 1});
    this.updateNews();
  }
  
  handleNextClick = async () => 
  {
    this.setState({pageNumber : this.state.pageNumber + 1});
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin : '20px'}}> NewsMonkey - Top headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {/* for every element/newsItem run the arrow function */}
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title? element.title.slice(0,70) : ""}
                  description={element.description? element.description.slice(0,112) : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                  color={this.props.color}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.pageNumber<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.pageNumber + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import NewsItem from "./NewsItem";

// extends means Component is the parent class for News class here (Inheritance)
export default class News extends Component {
  constructor() {
    // super() used to run the constructor of base class first
    super();
    console.log("Hi I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page : 1,
      pageSize : 20
    };
  }
  // it runs after render() method
  // fetch the api and async function wait for the response 
  async componentDidMount()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd6b8c2e4eb34b8497ab9a2373c4517a&page=1&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults
    })
  }
  
  handlePreviousClick = async () => {
    // console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd6b8c2e4eb34b8497ab9a2373c4517a&page=${this.state.page - 1}
    &pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    }, () => {
      // setState chalte sath he ye function execute hojayega 
      console.log(this.state.page);
    });
  }
  
  handleNextClick = async () => {
    // console.log("next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))
    {

    }
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd6b8c2e4eb34b8497ab9a2373c4517a&page=${this.state.page + 1}
      &pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1
      }, () => {
        console.log(this.state.page);
      });
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top headlines</h2>
        <div className="row">
          {/* for every element/newsItem run the arrow function */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title? element.title.slice(0,70) : ""}
                  description={element.description? element.description.slice(0,112) : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container" className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

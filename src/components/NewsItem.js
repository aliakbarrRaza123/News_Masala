import React, { Component } from 'react'

export default class NewsItem extends Component
{
  render() {
    // destructuring
    let {title,description,imgUrl,newsUrl,author,publishedAt,source,color} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
          src={imgUrl || "https://placehold.co/600x400?text=No+Image"}
          className="card-img-top"
          alt="News"
          style={{ height: "200px", objectFit: "cover" }}
          // used if there is any error in the imgUrl
          onError={(e) => {
            e.target.onerror = null; // infinite loop se bachata hai
            e.target.src = "https://placehold.co/600x400?text=No+Image";
          }}/>
          <div className="card-body">
            <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{left: '90%',zIndex: '1'}}> {source}
            </span>
            <h5 className="card-title">{title.slice(0,99)}</h5>
            <p className="card-text">{description.slice(0,152)}</p>
            <p className="card-text"> <small className="text-muted">
              By {!author ? "Unknown" : author} on {publishedAt && new Date(publishedAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })} </small> 
            </p>  
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

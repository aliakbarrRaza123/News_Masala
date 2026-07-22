import React, { Component } from 'react'

export default class NewsItem extends Component
{
  render() {
    // destructuring
    let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width : "18rem"}}>
          <img src={!imgUrl? "https://image.cnbcfm.com/api/v1/image/108330581-1783302717764-gettyimages-2266485037-NVIDIA_GTC.jpeg?v=1784578669&w=1920&h=1080": imgUrl} className="card-img-top" alt="."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

import React from "react";

const NewsItem = (props) => {
  // destructuring
  let {title,description,imgUrl,newsUrl,author,publishedAt,source,color} = props;

  return (
    <div className="my-3">
      <div className="card position-relative">
        {/* badge ko upar show karo image se bcz it is position absolute */}
        <span
          className={`position-absolute top-0 end-0 translate-end badge rounded-pill bg-${color}`}
          style={{ zIndex: "1" }}
        >
          {" "}
          {source}
        </span>
        <img
          src={imgUrl || "https://placehold.co/600x400?text=No+Image"}
          className="card-img-top"
          alt="News"
          style={{ height: "200px", objectFit: "cover" }}
          // used if there is any error in the imgUrl
          onError={(e) => {
            e.target.onerror = null; // infinite loop se bachata hai
            e.target.src = "https://placehold.co/600x400?text=No+Image";
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 99) : "No Title"}</h5>
          <p className="card-text">{description ? description.slice(0, 99) : "No Description"}</p>
          <p className="card-text">
            {" "}
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {publishedAt &&
                new Date(publishedAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

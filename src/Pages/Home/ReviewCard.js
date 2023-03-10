import React from "react";
import style from '../../Styles/review.module.css';

export default function ReviewCard({image, alt, reviewText, name, title}){
    return (
        <div className={`${style.card} card text-center`}>
            <div className="card-body">
              <div>
                <i className="fa-solid fa-quote-left text-warning fa-3x mb-3"></i>
              </div>
              <p>
                {reviewText}
              </p>
              <div className="w-50 h-25 m-auto">
                <img src={image} className="rounded-circle" alt={alt}/>
              </div>
              <blockquote className="pt-5">
                {name} <br/>
                <cite>
                  {title}
                </cite>
              </blockquote>
            </div>
        </div>
    )
}
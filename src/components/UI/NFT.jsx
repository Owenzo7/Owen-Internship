import React from "react";
import { Link } from "react-router-dom";
import { Countdown } from "./Countdown";

const NFT = ({ authorId, authorImage, nftImage, nftId, title, price, likes, expiryDate }) => {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        {authorId ? (
          <Link to={authorId ? `/author/${authorId}` : ""} data-bs-toggle="tooltip" data-bs-placement="top">
            <img className="lazy" src={authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        ) : (
          <Link to="" data-bs-toggle="tooltip" data-bs-placement="top">
            <img className="lazy" src={authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        )}
      </div>
      {expiryDate ? (
        <div className="de_countdown">
          <Countdown expiryDate={expiryDate} />
        </div>
      ) : (
        ""
      )}

      <div className="nft__item_wrap">
        <div className="nft__item_extra">
          <div className="nft__item_buttons">
            <button>Buy Now</button>
            <div className="nft__item_share">
              <h4>Share</h4>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                <i className="fa fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <Link to={`/item-details/${nftId}`}>
          <img src={nftImage} className="lazy nft__item_preview" alt="" />
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to={`/item-details/${nftId}`}>
          <h4>{title}</h4>
        </Link>
        <div className="nft__item_price">{price} ETH</div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default NFT;

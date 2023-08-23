import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getReviews } from '../../services/api';
import {
  ReviewsTitle,
  ReviewsAuthor,
  ShowMoreButton,
  ReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <ReviewsTitle>Reviews</ReviewsTitle>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <ReviewsAuthor>{author}</ReviewsAuthor>

              <ReviewsText>
                {showMore ? content : `${content.substring(0, 250)}`}
                <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                  {showMore ? 'Show less' : 'Show more...'}
                </ShowMoreButton>
              </ReviewsText>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;

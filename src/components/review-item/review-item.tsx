import { Review } from '../../types/reviews';
import {calcRating} from '../../utils/utils';
import dayjs from 'dayjs';

type ReviewsListProps = {
  review: Review;
}

function ReviewItem ({review}: ReviewsListProps): JSX.Element {

  return (
    <li className="reviews__item" key={review.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: calcRating(review.rating) }}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>
          {dayjs(review.date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;

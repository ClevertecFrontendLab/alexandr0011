import cn from 'classnames';
import { CommentRating } from './comment-rating/comment-rating';
import styles from './comment.module.scss';
import defaultAvatar from '../../resources/img/default_reviewer_avatar.png';

export function Comments({ comments, isAccordionOpen }) {
  const commentItems = comments.map(({id, rating, text, user}) => (
    <div key={id} className={styles.comment_item}>
      <div className={styles.comment_item_header}>
        <div>
          <img src={user.avatarUrl ? ` https://strapi.cleverland.by${user.avatarUrl}` : defaultAvatar} alt='review avatar' />
        </div>
        <div>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
        </div>
      </div>
      <CommentRating rating={rating} />
      {text ? <div className={styles.comment_message}>{text}</div> : null}
    </div>
  ));

  return <div className={isAccordionOpen ? styles.wrapper : cn(styles.wrapper, styles.hide)}>{commentItems}</div>;
}

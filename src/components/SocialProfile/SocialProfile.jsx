import PropTypes from 'prop-types';
import css from './SocialProfile.module.css';
import ProfileImage from 'images/SocialProfile.png';
export default function SocialProfile({
                                  username = "User Name",
                                  tag,
                                  location,
                                  avatar = ProfileImage,
                                  stats: { followers, views, likes },
                                }) {
  return (
    <div className={css.card}>
      <div>
        <img
          src={ProfileImage}
          alt="User avatar"
          width={100}
          height={100}
          className={css.avatar}
        />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

SocialProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

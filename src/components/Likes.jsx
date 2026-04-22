import {useEffect, useState} from 'react';
import {useLike} from '../hooks/apiHooks';

const Likes = ({mediaId}) => {
  const [likes, setLikes] = useState(0);
  const [userLike, setUserLike] = useState(false);
  const [updateLike, setUpdateLike] = useState(false);
  const {getLikesCount, getUserLike, postLike, deleteLike} = useLike();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getLikes = async () => {
      try {
        const likesCount = await getLikesCount(mediaId);
        setLikes(likesCount.count);
      } catch (error) {
        console.error(error.message);
      }
    };
    getLikes();
  }, [userLike]);

  useEffect(() => {
    const fetchUserLike = async () => {
      try {
        const userLikes = await getUserLike(mediaId, token);
        setUserLike(userLikes);
      } catch (error) {
        console.error(error.message);
      }
    };
    if (token) {
      fetchUserLike();
    }
  }, [updateLike]);

  const handleClick = async () => {
    console.log(mediaId);
    try {
      if (!userLike) {
        const postResult = await postLike(mediaId, token);
        console.log(postResult);
        setUserLike(false);
        setUpdateLike((updateLike) => {
          return !updateLike;
        });
      } else {
        const deleteResult = await deleteLike(userLike.like_id, token);
        console.log(deleteResult);
        setUserLike(null);
        setUpdateLike((updateLike) => {
          return !updateLike;
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button
      className="bg-stone-500 text-stone-50 rounded-md p-2.5 my-2.5"
      onClick={handleClick}
    >
      {userLike ? 'Unlike' : 'Like'}: {likes}
    </button>
  );
};

export default Likes;

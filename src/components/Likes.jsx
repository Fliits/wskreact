import {useEffect, useState} from 'react';
import {useLike} from '../hooks/apiHooks';

const Likes = ({media_id}) => {
  const [likes, setLikes] = useState(0);
  const [userLike, setUserLike] = useState(false);
  const [updateLike, setUpdateLike] = useState(false);
  const {getLikesCount, getUserLike, postLike, deleteLike} = useLike();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getLikes = async () => {
      try {
        const likesCount = await getLikesCount(media_id);
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
        const userLikes = await getUserLike(media_id, token);
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
    try {
      if (!userLike) {
        const postResult = await postLike(media_id, token);
        console.log(postResult);
        setUserLike(null);
        setUpdateLike((updateLike) => {
          return !updateLike;
        });
      } else {
        const deleteResult = await deleteLike(media_id, token);
        console.log(deleteResult);
        setUserLike(false);
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

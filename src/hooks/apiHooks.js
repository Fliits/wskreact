import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchData';

const useMedia = (loadMedia = true) => {
  const [mediaArray, setMediaArray] = useState([]);
  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
        const jsonWithUsers = await Promise.all(
          json.map(async (item) => {
            const user = await fetchData(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
            );
            item.username = user.username;
            return item;
          }),
        );
        setMediaArray(jsonWithUsers);
      } catch (error) {
        console.error('Error fetching media: ', error);
      }
    };
    if (loadMedia) {
      getMedia();
    }
  }, [loadMedia]);

  return mediaArray;
};

export default useMedia;

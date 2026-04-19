import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const useMedia = (loadMedia = true) => {
    const [mediaArray, setMediaArray] = useState([]);
    useEffect(() => {
      const getMedia = async () => {
        try {
          const json = await fetchData(
            import.meta.env.VITE_MEDIA_API + '/media',
          );
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

  const mediaArray = useMedia([]);

  return (
    <>
      <h2>My Media</h2>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              setSelectedItem={setSelectedItem}
              item={item}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;

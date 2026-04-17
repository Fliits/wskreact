import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useState} from 'react';
import {useMedia} from '../hooks/apiHooks';
import './Home.css';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const mediaArray = useMedia([]);

  /*useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
        const jsonWithUsers = await Promise.all(
          json.map(async (item) => {
            const user = await fetchData(
              import.meta.env.VITE_MEDIA_API + '/users/' + item.user_id,
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
    getMedia();
  }, []); */

  /*const mediaArray = [
    {
      media_id: 8,
      user_id: 5,
      filename: 'http://placehold.co/600x400/AAAAAA/FFFFFF/png',
      thumbnail: 'http://placehold.co/600x400/AAAAAA/FFFFFF/png',
      filesize: 170469,
      media_type: 'image/jpeg',
      title: 'Picture 1',
      description: 'This is a placeholder picture.',
      created_at: '2024-01-07T20:49:34.000Z',
    },
    {
      media_id: 9,
      user_id: 7,
      filename: 'http://placehold.co/600x400/BBBBBB/FFFFFF/png',
      thumbnail: 'http://placehold.co/600x400/BBBBBB/FFFFFF/png',
      filesize: 1002912,
      media_type: 'image/jpeg',
      title: 'Pic 2',
      description: '',
      created_at: '2024-01-07T21:32:27.000Z',
    },
    {
      media_id: 17,
      user_id: 2,
      filename:
        'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4',
      thumbnail: 'http://placehold.co/600x400/000000/FFFFFF/png',
      filesize: 1236616,
      media_type: 'video/mp4',
      title: 'Bunny',
      description: 'Butterflies fly around the bunny.',
      created_at: '2024-01-07T20:48:13.000Z',
    },
  ];
  */
  return (
    <div className="home-container">
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <section className="gallery-section">
        <div className="gallery-header">
          <h2>Your Media</h2>
          <p className="gallery-subtitle">Explore and manage your collection</p>
        </div>
        <div className="gallery-grid">
          {mediaArray.length > 0 ? (
            mediaArray.map((item) => (
              <MediaRow
                key={item.media_id}
                setSelectedItem={setSelectedItem}
                item={item}
              />
            ))
          ) : (
            <div className="gallery-empty">
              <p>No media yet. Start by uploading your first file.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Home;

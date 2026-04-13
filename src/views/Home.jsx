import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useState} from 'react';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const mediaArray = [
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

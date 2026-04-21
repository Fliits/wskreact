import {useMedia} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks';

// src/components/MediaRow.jsx
const MediaRow = ({item, setSelectedItem}) => {
  const {user} = useUserContext();
  const {deleteMedia} = useMedia();

  const deleteItem = async (item) => {
    try {
      if (confirm('Haluatko varmasti poistaa median?' + item.title)) {
        const token = localStorage.getItem('token');
        await deleteMedia(item.media_id, token);
        alert('Media on poistettu onnistuneesti.');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <tr key={item.media_id}>
      <td>
        <button onClick={() => setSelectedItem(item)}>Avaa</button>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>{item.username}</td>
      <td className="flex flex-col">
        {user && item.user_id === user.user_id && (
          <>
            <button className="block w-full text-center bg-stone-500 text-stone-50 rounded-md p-2.5 my-2.5">
              <Link to="/modify" state={{item}}>
                Modify
              </Link>
            </button>
            <button
              onClick={() => deleteItem(item)}
              className="block w-full text-center bg-orange-500 text-stone-50 rounded-md p-2.5 my-2.5"
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default MediaRow;

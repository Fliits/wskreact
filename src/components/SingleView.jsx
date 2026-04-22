import Likes from './Likes';

const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  if (!item) {
    return null; // Don't render anything if no item is selected
  }

  return (
    <dialog open>
      <button onClick={() => setSelectedItem(null)}>sulje</button>
      <img src={item.thumbnail} alt={item.title} />
      <Likes mediaId={item.media_id} />
    </dialog>
  );
};
export default SingleView;

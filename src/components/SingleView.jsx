const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  if (!item) {
    return null; // Don't render anything if no item is selected
  }

  return (
    // TODO: Add JSX for displaying a mediafile here
    // - use e.g. a <dialog> element for creating a modal
    // - use item prop to render the media item details
    // - use img tag for displaying images
    // - use video tag for displaying videos
    <dialog open>
      <button onClick={() => setSelectedItem(null)}>sulje</button>
      <img src={item.thumbnail} alt={item.title} />
    </dialog>
  );
};
export default SingleView;

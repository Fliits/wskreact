import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const {item} = state || {};
  const navigate = useNavigate();

  if (!item) {
    return null; // Don't render anything
  }

  return (
    <dialog open>
      <button onClick={() => navigate(-1)}>sulje</button>
      <img src={item.thumbnail} alt={item.title} />
    </dialog>
  );
};
export default Single;

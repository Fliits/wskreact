import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const {item} = state || {};
  const navigate = useNavigate();

  if (!item) {
    return null; // Don't render anything
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>sulje</button>
      <h2>{item.title}</h2>
      <p>Owner: {item.username}</p>
      <img src={item.filename} alt={item.title} />
      <p>{item.description}</p>
    </div>
  );
};
export default Single;

// src/components/MediaRow.jsx
const MediaRow = ({item, setSelectedItem}) => {
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="media-card">
      <div className="media-card-image">
        <img src={item.thumbnail} alt={item.title} />
        <div className="media-card-overlay">
          <button
            className="media-card-btn"
            onClick={() => setSelectedItem(item)}
            aria-label="Open media"
          >
            View
          </button>
        </div>
      </div>
      <div className="media-card-content">
        <h3>{item.title}</h3>
        {item.description && <p className="description">{item.description}</p>}
        <div className="media-card-meta">
          <span className="meta-badge">
            {item.media_type.split('/')[1].toUpperCase()}
          </span>
          <span className="meta-size">{formatFileSize(item.filesize)}</span>
        </div>
        <div className="media-card-footer">
          <span className="meta-date">
            {new Date(item.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          {item.username && (
            <span className="meta-user">by {item.username}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaRow;

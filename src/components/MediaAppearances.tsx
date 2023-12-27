```typescript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MediaAppearances.css';

interface MediaItem {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'podcast' | 'article';
  url: string;
  thumbnail?: string;
}

const MediaAppearances: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediaAppearances = async () => {
      try {
        const response = await axios.get('/api/media-appearances');
        setMediaItems(response.data);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching media appearances.');
        setLoading(false);
      }
    };

    fetchMediaAppearances();
  }, []);

  if (loading) {
    return <div>Loading media appearances...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="media-appearances">
      <h2>Media Appearances</h2>
      <div className="media-gallery">
        {mediaItems.map((item) => (
          <div key={item.id} className="media-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.thumbnail && <img src={item.thumbnail} alt={item.title} />}
              <div className="media-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaAppearances;
```
```tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoSeries.css';

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

const VideoSeries: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos');
        setVideos(response.data);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching the video series.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div>Loading video series...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="video-series">
      <h2>Michael Gruen's Video Series</h2>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p>Published on: {new Date(video.publishedAt).toLocaleDateString()}</p>
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSeries;
```
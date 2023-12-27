import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PodcastSeries.css';

interface Podcast {
  id: string;
  title: string;
  description: string;
  date: string;
  audioUrl: string;
  transcriptUrl?: string;
}

const PodcastSeries: React.FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axios.get('/api/podcasts');
        setPodcasts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="podcast-series">
      <h2>Podcast Series</h2>
      {loading && <p>Loading podcasts...</p>}
      {error && <p>Error loading podcasts: {error}</p>}
      <ul className="podcast-list">
        {podcasts.map((podcast) => (
          <li key={podcast.id} className="podcast-item">
            <h3>{podcast.title}</h3>
            <p>{podcast.description}</p>
            <audio controls src={podcast.audioUrl}>
              Your browser does not support the audio element.
            </audio>
            {podcast.transcriptUrl && (
              <a href={podcast.transcriptUrl} target="_blank" rel="noopener noreferrer">
                View Transcript
              </a>
            )}
            <p>Published on: {new Date(podcast.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastSeries;
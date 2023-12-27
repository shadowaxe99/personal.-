```tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SocialMediaFeed.css';

interface SocialMediaPost {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  imageUrl?: string;
}

const SocialMediaFeed: React.FC = () => {
  const [posts, setPosts] = useState<SocialMediaPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSocialMediaPosts = async () => {
      try {
        const response = await axios.get('/api/social-media-feed');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching the social media posts.');
        setLoading(false);
      }
    };

    fetchSocialMediaPosts();
  }, []);

  if (loading) {
    return <div>Loading social media feed...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="social-media-feed">
      {posts.map((post) => (
        <div key={post.id} className="social-media-post">
          <div className="post-author">{post.author}</div>
          <div className="post-content">{post.content}</div>
          {post.imageUrl && <img src={post.imageUrl} alt="Post visual content" />}
          <div className="post-timestamp">{post.timestamp.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaFeed;
```
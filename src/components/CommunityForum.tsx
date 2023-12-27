import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './CommunityForum.css';

interface ForumPost {
  id: string;
  author: string;
  message: string;
  timestamp: Date;
}

const CommunityForum: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/community');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching forum posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const onSubmit = async (data: { message: string }) => {
    try {
      const response = await axios.post('/api/community', data);
      setPosts([...posts, response.data]);
      reset();
    } catch (error) {
      console.error('Error submitting forum post:', error);
    }
  };

  return (
    <div className="community-forum">
      <h2>Community Forum</h2>
      <div className="forum-posts">
        {posts.map((post) => (
          <div key={post.id} className="forum-post">
            <div className="post-author">{post.author}</div>
            <div className="post-message">{post.message}</div>
            <div className="post-timestamp">{post.timestamp.toLocaleString()}</div>
          </div>
        ))}
      </div>
      <form className="forum-post-form" onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register('message', { required: true })} placeholder="Share your thoughts..." />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CommunityForum;
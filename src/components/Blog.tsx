```typescript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  author: string;
  imageUrl: string;
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('/api/blog');
        setBlogPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching blog posts.');
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="blog-container">
      <h1>Michael Gruen's Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-date">Published on: {new Date(post.publishedDate).toLocaleDateString()}</p>
            <p className="blog-author">By: {post.author}</p>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="blog-image" />}
            <div className="blog-content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
```
```typescript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResourceLibrary.css';

interface Resource {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  createdAt: Date;
}

const ResourceLibrary: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('/api/resources');
        setResources(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load resources. Please try again later.');
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="resource-library">
      <h1>Resource Library</h1>
      {loading ? (
        <p>Loading resources...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="resource-list">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-item">
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <a href={resource.downloadUrl} download>
                Download
              </a>
              <span className="date">
                Added on: {new Date(resource.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourceLibrary;
```
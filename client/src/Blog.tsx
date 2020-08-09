import * as React from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:8080';

const Blog: React.FC = () => {
  React.useEffect(() => getTask());
  const getTask = () => {
    axios.get(endpoint + '/api/task').then((res) => console.log(res))
  }
  return <h1>hello</h1>;
}

export default Blog;

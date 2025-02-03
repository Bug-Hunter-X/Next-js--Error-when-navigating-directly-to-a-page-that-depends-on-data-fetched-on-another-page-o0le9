```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Welcome, {user ? user.name : 'Guest'}</p>
    </div>
  );
}
```
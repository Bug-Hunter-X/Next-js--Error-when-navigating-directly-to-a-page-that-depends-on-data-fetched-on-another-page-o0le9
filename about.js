```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the user navigates directly to /about
  // without going through the Home page first
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return (
      <div>
        <h1>Please go to the home page first</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Welcome, {user.name}</p> 
    </div>
  );
}
```
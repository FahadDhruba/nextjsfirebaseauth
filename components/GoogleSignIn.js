// components/GoogleSignIn.js
'use client';

import { auth, provider, signInWithPopup } from '../lib/firebase';
import { useState } from 'react';

const GoogleSignIn = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <img src={user.photoURL} alt="User profile" />
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleSignIn;

// app/page.js
import GoogleSignIn from '../components/GoogleSignIn';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <GoogleSignIn />
    </div>
  );
}

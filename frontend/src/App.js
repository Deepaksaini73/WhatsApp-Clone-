import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {
  return (
    <GoogleOAuthProvider clientId='672134577666-6mimb2b52i6abfgh2hrdfphlfn303pa7.apps.googleusercontent.com' className="App">
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';
  
export default function App() {
    return (
      <>
        <ToastContainer />
          <UserProvider>
            <Router>
              <Routes>
                <Route path="/sign-in" element={<SignIn />} />
              </Routes>
            </Router>
          </UserProvider>
        
      </>
    );
  }
  
  
  
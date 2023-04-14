import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';
import { SignIn } from "./pages/SignIn/index.js"
import { SignUp } from "./pages/SignUp/index.js"
import { CalendarPage }  from "./pages/Calendar/index.js"

  
export default function App() {
    return (
      <>
        <ToastContainer />
          <UserProvider>
            <Router>
              <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/calendar" element={<CalendarPage />} />

              </Routes>
            </Router>
          </UserProvider>
        
      </>
    );
  }
  
  
  
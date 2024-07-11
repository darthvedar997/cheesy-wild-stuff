import { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const ContactPage = () => {
  const [showLogin, setShowLogin] = useState(true); 

  const toggleForm = () => {
    setShowLogin(!showLogin); 
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          {showLogin ? <Login /> : <Signup />}
          
          {/* Toggle between login and signup */}
          <div className="mt-4 text-center">
            <button
              onClick={toggleForm}
              className="text-sm font-medium text-white hover:text-gray-300 focus:outline-none"
            >
              {showLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Log in'}
            </button>
          </div>
        </div>
  )
};

export default ContactPage;

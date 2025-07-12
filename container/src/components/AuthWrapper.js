import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { mount } from 'auth/AuthForm';

const AuthWrapper = ({ onSignIn }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mount(ref.current, {
      onSignIn: () => {
        console.log('🚀 Container received onSignIn');
        onSignIn?.();            // ✅ Tell container to set isSignedIn
        navigate('/products');   // ✅ Navigate
      },
    });
  }, []);

  return <div ref={ref} />;
};

export default AuthWrapper;

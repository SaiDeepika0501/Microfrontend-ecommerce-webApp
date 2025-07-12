import React from 'react';

const AuthForm = ({ onSignIn }) => {
  console.log('✅ Received onSignIn prop:', onSignIn);

  return (
    <div>
      <h2>Auth App</h2>
      <button
        onClick={() => {
          console.log('✅ Sign In button clicked');
          onSignIn();
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default AuthForm;

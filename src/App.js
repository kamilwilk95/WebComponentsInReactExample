import React, { useRef, useEffect } from 'react';
import '@xkamis/error-box';
import './App.css';
import Comment from './Comment/Comment';

const App = () => {
  const errorBoxRef = useRef(null);

  useEffect(() => {
    const element = errorBoxRef.current;

    if (element) {
      element.addEventListener('remove', () => {
        console.log('REMOVE EVENT FROM ERROR BOX');
      });
    }

    return () => {
      if (errorBoxRef) {
        element.removeEventListener('remove');
      }
    }
  }, []);

  return (
    <div className="App">
      <error-box ref={errorBoxRef} class="error" self-remove>
        <span>Something is broken</span>
      </error-box>

      <Comment nick="xyz" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>
    </div>
  );
}

export default App;

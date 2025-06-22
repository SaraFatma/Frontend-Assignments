import React, { useState } from 'react';

function LiveInput() {
  const [text, setText] = useState('');

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Live Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default LiveInput;

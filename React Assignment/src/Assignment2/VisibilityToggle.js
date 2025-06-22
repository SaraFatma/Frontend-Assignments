import React, { useState } from 'react';

function VisibilityToggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Visibility Toggle</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>
      {isVisible && <p>This paragraph is visible. Click the button to hide it.</p>}
    </div>
  );
}

export default VisibilityToggle;

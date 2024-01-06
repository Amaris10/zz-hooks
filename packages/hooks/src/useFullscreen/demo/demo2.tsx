/**
 * title: 页面全屏
 * desc: 三个不同的页面全屏设置
 */

import React, { useRef } from 'react';
import { useFullscreen } from 'zz-hooks';

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { toggleFullscreen, enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div ref={ref} style={{ backgroundColor: '#4B6BCD', padding: 12 }}>
        <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'no Fullscreen'}</div>
        <button type="button" onClick={enterFullscreen}>
          enterFullscreen
        </button>
        <button type="button" onClick={exitFullscreen} style={{ margin: '0 8px' }}>
          exitFullscreen
        </button>
        <button type="button" onClick={toggleFullscreen}>
          toggleFullscreen
        </button>
      </div>
    </div>
  );
};

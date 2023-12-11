import React from 'react';
import DownloadPage from './DownloadPage';
import DownloadButton from './DownloadButton';

const App = () => {
  return (
    <div>
      <DownloadPage />
      <DownloadButton
        content={`
          <html>
            <head>
              <title>Your HTML Page</title>
            </head>
            <body>
              <h1>Your HTML Page Content</h1>
              <p>This is a sample HTML content.</p>
            </body>
          </html>
        `}
        fileName="downloaded_page.html"
      />
    </div>
  );
};
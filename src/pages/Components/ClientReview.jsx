import React from 'react';
import { useTitle } from '../../hooks/useTitle';

export const ClientReview = () => {

  return (
    <div className="py-8 px-10 dark:bg-gray-800">
      <h2 className="text-4xl text-center mb-8 font-bold dark:text-white underline  underline-offset-8 decoration-purple-500">OUR HAPPY CLIENTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Video 1 */}
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/rAgQHfu5HQA" // Video 1 ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/YmFZHmUYbw0" // Video 2 ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 3 */}
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/b1dav_DPucc" // Video 3 ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

import React from 'react';

const ShareButton = ({ content }) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Share via',
        text: content,
      });
      console.log('Content shared successfully');
    } catch (error) {
      console.error('Error sharing content:', error);
    }
  };

  return (
    <button onClick={handleShare}>Share</button>
  );
};

export default ShareButton;

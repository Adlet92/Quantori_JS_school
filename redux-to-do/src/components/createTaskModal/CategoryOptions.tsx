import React, { useState } from 'react';

interface categoryOptionsProps {
  onSelectTag: (tagName: string) => void;
}
const CategoryOptions = ({ onSelectTag } : categoryOptionsProps) => {
  const [selectedTag, setSelectedTag] = useState('');
  const handleTagClick = (tagName: string) => {
    setSelectedTag(tagName);
    onSelectTag(tagName);
  };

  const getTagClassName = (tagName: string) => {
    let className = tagName;
    if (tagName === selectedTag) {
      className += ' selected';
    }
    return className;
  };
  

  return (
    <div className="option">
       <div className={getTagClassName('health')} onClick={() => handleTagClick('health')}>
        health
      </div>
      <div className={getTagClassName('work')} onClick={() => handleTagClick('work')}>
        work
      </div>
      <div className={getTagClassName('home')} onClick={() => handleTagClick('home')}>
        home
      </div>
      <div className={getTagClassName('other')} onClick={() => handleTagClick('other')}>
        other
      </div>
    </div>
  );
};

export default CategoryOptions;
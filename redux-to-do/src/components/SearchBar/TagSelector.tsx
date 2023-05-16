import React from 'react';

interface tagSelectorProps {
  setSelectedTag: (tag: string) => void;
  handleTagClick: (tag: string) => void;
}

const TagSelector = ({ setSelectedTag, handleTagClick  }: tagSelectorProps) => {
  return (
    <select id="tag-selector" onChange={(e) => { setSelectedTag(e.target.value); handleTagClick(e.target.value) }}>
      <option value="">All Tags</option>
      <option value="health">health</option>
      <option value="work">work</option>
      <option value="home">home</option>
      <option value="other">other</option>
    </select>
  );
};

export default TagSelector;

import React from 'react';

// const CategoryOptions = () => {
//   return (
//       <div className="option">
//         <div className="option health">health</div>
//         <div className="option work">work</div>
//         <div className="option home">home</div>
//         <div className="option other">other</div>
//       </div>
//   );
// };

// export default CategoryOptions;
interface CategoryOptionsProps {
  onSelectTag: (tagName: string) => void;
}
const CategoryOptions = ({ onSelectTag } : CategoryOptionsProps) => {
  const handleTagClick = (tagName: string) => {
    onSelectTag(tagName);
  };

  return (
    <div className="option">
      <div className="option health" onClick={() => handleTagClick('health')}>
        health
      </div>
      <div className="option work" onClick={() => handleTagClick('work')}>
        work
      </div>
      <div className="option home" onClick={() => handleTagClick('home')}>
        home
      </div>
      <div className="option other" onClick={() => handleTagClick('other')}>
        other
      </div>
    </div>
  );
};

export default CategoryOptions;
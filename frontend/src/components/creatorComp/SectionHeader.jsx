import React from 'react';

/**
 * SectionHeader component for section titles with optional action link
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {Object} [props.actionLink] - Optional action link
 * @param {string} props.actionLink.label - Link text
 * @param {string} props.actionLink.url - Link URL
 * @returns {JSX.Element} SectionHeader component
 */
const SectionHeader = ({ title, actionLink }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {actionLink && (
        <a 
          href={actionLink.url} 
          className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
        >
          {actionLink.label}
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
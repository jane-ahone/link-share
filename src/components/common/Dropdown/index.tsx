import React, { useState } from "react";

const options = [
  "GitHub",
  "Frontend Mentor",
  "Twitter",
  "LinkedIn",
  "YouTube",
  "Facebook",
  "Twitch",
  "Dev.to",
  "Codewars",
  "Codepen",
  "freeCodeCamp",
  "GitLab",
  "Hashnode",
  "Stack Overflow",
];

const DropdownMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs mx-auto">
        <label
          htmlFor="dropdown"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select an Option
        </label>
        <select
          id="dropdown"
          value={selectedOption || ""}
          onChange={handleChange}
          className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {selectedOption && (
          <div className="mt-4 text-center">
            <p className="text-lg font-medium">
              You selected: {selectedOption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;

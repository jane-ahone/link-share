import { SocialPlatform } from "@/utils/SocialPlatforms";
import { useState } from "react";

interface DropdownMenuProps {
  setSelectedPlatform: React.Dispatch<
    React.SetStateAction<SocialPlatform | null>
  >;
}

const options: SocialPlatform[] = [
  SocialPlatform.GitHub,
  SocialPlatform.FrontendMentor,
  SocialPlatform.Twitter,
  SocialPlatform.LinkedIn,
  SocialPlatform.YouTube,
  SocialPlatform.Facebook,
  SocialPlatform.Twitch,
  SocialPlatform.DevTo,
  SocialPlatform.Codewars,
  SocialPlatform.Codepen,
  SocialPlatform.FreeCodeCamp,
  SocialPlatform.GitLab,
  SocialPlatform.Hashnode,
  SocialPlatform.StackOverflow,
];

const DropdownMenu: React.FC<DropdownMenuProps> = ({ setSelectedPlatform }) => {
  const [selectedOption, setSelectedOption] = useState<SocialPlatform>(
    SocialPlatform.GitHub
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as SocialPlatform;
    setSelectedOption(value);
    setSelectedPlatform(value);
  };

  return (
    <div className="dropdown-menu">
      <label
        htmlFor="dropdown"
        className="block text-sm font-normal text-linkDarkGrey"
      >
        Platform
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="block w-full px-10 py-3 mt-1 border border-linkBorder rounded-lg focus:ring-indigo-500 focus:border-indigo-500 placeholder: text-linkDarkGrey placeholder:opacity-50"
      >
        {/* <option value="" disabled>
            Select an option
          </option> */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;

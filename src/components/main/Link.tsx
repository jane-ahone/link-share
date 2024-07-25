// src/components/main/LinkForm.tsx
"use client";

import React, { useState } from "react";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import DropdownMenu from "../common/Dropdown";
import { SocialPlatform } from "@/utils/SocialPlatforms";
import LinkIcon from "../../../public/Main/link-icon.svg";

const LinkSchema = z.object({
  link: z.string().url({ message: "Invalid URL format" }),
});

interface LinkFormProps {
  index: number;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  setSelectedPlatform: React.Dispatch<
    React.SetStateAction<SocialPlatform | null>
  >;
}

const LinkForm: React.FC<LinkFormProps> = ({
  setLink,
  index,
  link,

  setSelectedPlatform,
}) => {
  const [error, setError] = useState("");

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLink = e.target.value;
    setLink(newLink);
    const result = LinkSchema.safeParse({ link: newLink });
    if (result.success) {
      setError("");
    } else {
      setError("Invalid URL format");
    }
  };

  return (
    <div className="h-fit flex flex-col gap-3 content-center items-center">
      <div className="heading w-full flex justify-between">
        <div className="">
          <LinkIcon className="inline-block mr-2" />
          <p className="inline-block text-base font-bold text-linkGrey">
            Link #{index + 1}
          </p>
        </div>
        <p className="text-linkGrey font-normal text-base">Remove</p>
      </div>

      <div>
        <DropdownMenu setSelectedPlatform={setSelectedPlatform} />
        <label
          htmlFor={`link-${index}`}
          className="block text-sm font-normal text-linkDarkGrey"
        >
          Link
        </label>
        <input
          type="url"
          id={`link-${index}`}
          value={link}
          onChange={handleLinkChange}
          placeholder="e.g. https://www.github.com/johnappleseed"
          required
          className="block w-full px-10 py-3 mt-1 border border-linkBorder rounded-lg focus:ring-indigo-500 focus:border-indigo-500 placeholder: text-linkDarkGrey placeholder:opacity-50"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default LinkForm;

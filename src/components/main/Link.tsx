"use client";

import React, { useState } from "react";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import DropdownMenu from "../common/Dropdown";

const LinkSchema = z.object({
  link: z.string().url({ message: "Invalid URL format" }),
});

const LinkForm: React.FC = () => {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleAddLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = LinkSchema.safeParse({ link });
    if (!result.success) {
      const validationError = fromZodError(result.error);
      setError(validationError.message);
      return;
    }

    setLinks([...links, link]);
    setLink("");
    setError("");
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-md mx-auto space-y-6 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Add a Link</h1>
        <form onSubmit={handleAddLink} className="space-y-4">
          <p className="">Remove</p>
          <div>
            <DropdownMenu />
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700"
            >
              Link
            </label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter a URL"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
        {/* <div className="mt-6">
          <h2 className="text-xl font-semibold">Links</h2>
          <ul className="list-disc pl-5 space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default LinkForm;

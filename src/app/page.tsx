"use client";

import Image from "next/image";
import AddLink from "../../public/Main/add-link-icon.svg";
import Button from "@/components/common/Button";
import LinkForm from "@/components/main/Link";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(false);
  };
  const [forms, setForms] = useState<number[]>([]);

  const addForm = () => {
    toggleVisibility();
    setForms([...forms, forms.length + 1]);
  };

  return (
    <main className="flex flex-col items-start gap-6 self-stretch p-4 flex-[1_0_0] min-h-screen">
      <div className="flex flex-col items-start sel">
        <div className="flex p-6 flex-col items-start gap-10 flex-[1_0_0] self-stretch">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-linkDarkGrey">
              Customize your links
            </p>
            <p className="text-base text-linkGrey font-normal ">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="flex flex-col ">
            <Button variant="secondary" onClick={addForm}>
              + Add new link
            </Button>
            <div className="">
              <div className={isVisible ? "" : "hidden"}>
                <AddLink className="w-32 h-20" />
                <p className="text-2xl font-bold text-linkDarkGrey">
                  Let&rsquo;s get you started
                </p>
                <p className="text-base text-linkGrey font-normal">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>

              {forms.map((formId) => (
                <LinkForm key={formId} />
              ))}
            </div>
          </div>
        </div>
        <div className="btn-div">
          <hr />
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </main>
  );
}

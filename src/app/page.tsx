"use client";

import AddLink from "../../public/Main/add-link-icon.svg";
import Button from "@/components/common/Button";
import LinkForm from "@/components/main/Link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { SocialPlatform } from "@/utils/SocialPlatforms";
import { addLink } from "@/utils/firestore";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user] = useAuthState(auth);
  const [isVisible, setIsVisible] = useState(true);
  const [forms, setForms] = useState<number[]>([]);
  const [link, setLink] = useState("");
  const [selectedPlatform, setSelectedPlatform] =
    useState<SocialPlatform | null>(SocialPlatform.GitHub);
  const [links, setLinks] = useState<
    Array<{ platform: SocialPlatform; url: string }>
  >([]);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  });

  const addForm = () => {
    setIsVisible(false);
    setForms([...forms, forms.length + 1]);
    setLinks([
      ...links,
      { platform: selectedPlatform as SocialPlatform, url: link },
    ]); //storing all new links and url
  };
  const saveLinks = () => {
    links.forEach((link, index) => {
      if (user) {
        if (link.platform && link.url) {
          addLink(user.uid, link.platform, link.url);
        }
      }
    });
    setForms([]);
  };

  return (
    <main className="flex flex-col  gap-6 p-4 flex-[1_0_0] min-h-screen">
      <div className="flex flex-col">
        <div className="flex p-6 flex-col  gap-10 flex-[1_0_0]">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-linkDarkGrey">
              Customize your links
            </p>
            <p className="text-base text-linkGrey font-normal ">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>

          <div className="flex flex-col gap-6 ">
            <Button type="submit" variant="secondary" onClick={addForm}>
              + Add new link
            </Button>

            <div className="flex flex-col p-5 justify-center items-center gap-3 flex-[1 0 0]">
              <div
                className={
                  isVisible ? "flex flex-col items-center gap-6" : "hidden"
                }
              >
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

              {forms.map((formId, index) => (
                <LinkForm
                  key={formId}
                  index={index}
                  link={link}
                  setLink={setLink}
                  setSelectedPlatform={setSelectedPlatform}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="btn-div ">
          <hr />
          <Button
            type="submit"
            variant={isVisible ? "disabled" : "primary"}
            onClick={saveLinks}
          >
            Save
          </Button>
        </div>
      </div>
    </main>
  );
}

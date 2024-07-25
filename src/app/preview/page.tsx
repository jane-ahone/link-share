"use client";

import Button from "@/components/common/Button";
import Link from "next/link";
import { fetchLinks } from "@/utils/firestore";
import { useEffect } from "react";

const Preview = () => {
  useEffect(() => {
    //fetch links
  });
  return (
    <div className="flex flex-col py-4 pr-5 pl-4 items-center">
      <div className="flex center gap-4">
        <Link href="/profile" className="inline-block">
          <Button type="button" variant="secondary">
            Back to Editor
          </Button>
        </Link>
        <div className="inline-block">
          <Button type="button" variant="primary">
            Share Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;

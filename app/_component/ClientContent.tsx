'use client';

import { useEffect, useState } from "react";

export default function ClientOnlyContent({ content }: { content: string }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    setHtmlContent(content.split(' ').slice(0, 15).join(' '));
  }, [content]);

  return (
    <div className="group-hover:text-[#f18017] duration-300">
      <div className="font-bold text-sm content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <span className="font-bold">[...]</span>
    </div>
  );
}
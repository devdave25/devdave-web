import React from "react";

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import ReactMarkdown from 'react-markdown';
import { TextAreaInput } from "@/components/textarea-input";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

interface FilePreviewProps {
    path: string;
    content: string;
    className?: string;
}

export const FilePreview: React.FC<FilePreviewProps> = ({ path, content, className }) => {
    const element = path.lastIndexOf(".md") === path.length - 3 ?
        (<article className=" prose prose-invert w-full flex min-w-full min-h-full">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="bg-zinc-800 w-full p-2">
                {content}</ReactMarkdown> </article>)
        : (<TextAreaInput className="bg-zinc-800 h-full" inputClassName="flex h-80" initial={content} readOnly />);

    return <div className={className}>
        <ClipboardDocumentIcon className="absolute right-2 t-2 m-2 w-5 cursor-pointer" onClick={() => navigator.clipboard.writeText(content)} />
        {element}
    </div>
};

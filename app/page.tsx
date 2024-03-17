'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import { MDXEditorMethods } from '@mdxeditor/editor'

const EditorComp = dynamic(() => import('./EditorComponent'), { ssr: false })

const markdown = `
Hello **world**!
`

export default function Home() {
  const ref = React.useRef<MDXEditorMethods>(null);
  return (
    <>
      <p>
        This is a bare-bones unstyled MDX editor without any plugins and no
        toolbar. Check the EditorComponent.tsx file for the code.
      </p>
      <p>
        To enable more features, add the respective plugins to your instance -
        see{" "}
        <a
          className="text-blue-600"
          href="https://mdxeditor.dev/editor/docs/getting-started"
        >
          the docs
        </a>{" "}
        for more details.
      </p>
      <button onClick={() => ref.current?.setMarkdown("new markdown")}>
        Set new markdown
      </button>
      <button onClick={() => alert(ref.current?.getMarkdown())}>
        Get markdown
      </button>
      <br />
      <div style={{ border: "1px solid black" }}>
        <Suspense fallback={null}>
          <EditorComp markdown={markdown} editorRef={ref} />
        </Suspense>
      </div>
    </>
  );
}

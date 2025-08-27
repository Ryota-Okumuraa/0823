"use client"

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { Callout } from "./Callout";


const components = {
    Image,
    Callout,
}

export const Mdx = ({ code }: { code: string; }) => {
    const Component = useMDXComponent(code);

    return (
        <div className="prose lg:prose-xl max-w-none">
            <Component components={components} />
        </div>
    )
}
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

    return (
        <div>
            <header className="flex items-center justify-between">
                {/* <h1 className="bg-gradient-to-r from-orange-400 via-red-400 to-purple-600 bg-clip-text text-transparent text-9xl">{project.name}</h1> */}
                <h1 className="text-black text-9xl">{project.name}</h1>
                <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-black hover:text-white transition">View Project</a>
            </header>

            {/* image goes here */}
            <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 mb-20 object-cover rounded-xl"/>


             {/* content goes here */}

             <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content} />
            </div>
        </div>
    )
}
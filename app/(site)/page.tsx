import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
import image from "../../public/img/home-hero.png"

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[200px]">Article</h1>
        <div className="w-1 h-52 bg-black"></div>
        <p className="mt-3 text-xl max-w-md text-4xl">Brand and Digital for Culture, Commerce and Good.</p>
      </div>

      <div className="py-20">
        <Image src={image} alt="hero image"/>
      </div>

      {/* <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2> */}

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="bg-gray-100 rounded-lg p-5">
            {
              project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg"
                />
              )
            }

            <div className="pt-5 pb-3">

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{project.name}</h5>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link href={`/projects/${project.slug}`} className="bg-black inline-flex items-center text-centerbg-gray-100 rounded-lg text-white font-bold py-3 px-4 whitespace-nowrap">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}

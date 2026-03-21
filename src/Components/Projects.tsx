import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  githubUrl?: string;
  toolsUsed?: string[];
  id?: number;
}

export default function Projects({
  title,
  link,
  description,
  imageUrl,
  githubUrl,
  toolsUsed,
}: Props) {
  
  return (
    <div className="group w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden 
      transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-200 dark:border-gray-700">
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Tools Used */}
        <div className="flex flex-wrap gap-2">
          {toolsUsed?.map((tool, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-semibold rounded-full
                bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-cyan-400
                border border-blue-200 dark:border-gray-600"
            >
              {tool}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm
              bg-linear-to-r from-blue-600 to-cyan-600 text-white
              hover:from-blue-700 hover:to-cyan-700
              transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span>Live Demo</span>
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm
                bg-gray-900 dark:bg-gray-700 text-white
                hover:bg-gray-800 dark:hover:bg-gray-600
                transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <SiGithub className="text-lg" />
              <span>Code</span>
            </a>
          )}
        </div>

     
      </div>
    </div>
  );
}

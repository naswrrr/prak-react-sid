import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name
        .toLowerCase()
        .includes(_searchTerm) ||
      framework.description
        .toLowerCase()
        .includes(_searchTerm);

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;



  });
  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  return (
    <div className="p-8 max-w-2xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">
        🚀 Tech <span className="text-indigo-600">Stack</span>
      </h1>

      <div className="space-y-6">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          name="selectedTag"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {filteredFrameworks.map((item,index) => (
          <div
            key={item.id}
            className="group relative bg-white border border-gray-200 p-6 rounded-2xl 
                       shadow-sm transition-all duration-300 ease-in-out 
                       hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300"
          >
            {/* Tag Tahun di Pojok Kanan Atas */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] font-bold bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md uppercase">
                Since {item.details.releaseYear}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
              {item.name}
            </h2>

            <p className="text-gray-500 leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-1 rounded-full bg-gray-300" />
              <p className="text-sm text-gray-400">
                Crafted by <span className="font-semibold text-gray-600">{item.details.developer}</span>
              </p>
            </div>



            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Tags Area */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-medium rounded-full
                               group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Link dengan animasi panah */}
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-all group/link"
              >
                Explore Site
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
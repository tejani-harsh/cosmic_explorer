import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../../component/Cards/Card";
import { fetch_mars_photos } from "../../constants";
import { INasa } from "../../types";

export default function Home() {
  const { isLoading, error, data } = useQuery<INasa>({
    queryKey: ["repoData"],
    queryFn: () => fetch(fetch_mars_photos).then((res) => res.json()),
    placeholderData: {
      photos: [],
    },
  });

  const itemsPerPage = 18;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    data?.photos?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="p-1 flex flex-col items-center justify-center pb-8 bg-slate-100 min-h-screen">
      <h1 className="mb-1 text-[2rem] py-4">Mars Surface Images By NASA</h1>
      {!isLoading && currentItems.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-4 px-4 place-items-center w-full h-full">
            {currentItems.map((e, index) => (
              <Card key={index} data={e} />
            ))}
          </div>
          <nav className="flex justify-center mt-4 w-full">
            {data?.photos && (
              <ul className="pagination flex w-full max-w-screen gap-2 flex-wrap justify-center px-4">
                {Array.from(
                  { length: Math.ceil(data.photos.length / itemsPerPage) },
                  (_, i) => i + 1
                ).map((number) => (
                  <li
                    key={number}
                    className="rounded-md bg-gray-300 hover:bg-gray-400 min-w-[40px] min-h-[40px] grid place-items-center hover:cursor-pointer"
                  >
                    <button
                      onClick={() => paginate(number)}
                      className="page-link"
                    >
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </>
      ) : (
        <div className="w-full h-[600px] grid place-items-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

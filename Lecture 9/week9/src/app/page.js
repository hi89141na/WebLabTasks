'use client'
import { useRouter } from "next/navigation";
export default function HomePage() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-950">
      <div className="flex space-x-6">
        <button
          onClick={() => navigateTo('/recipe1')}
          className="p-6 bg-white text-center rounded-lg shadow-md w-64"
        >
          View Recipes using Next.js <br /> Server Component
        </button>
        <button
          onClick={() => navigateTo('/recipe2')}
          className="p-6 bg-white text-center rounded-lg shadow-md w-64"
        >
          View Recipes using Next.js <br /> Client Component useEffect Method
        </button>
        <button
          onClick={() => navigateTo('/recipe3')}
          className="p-6 bg-white text-center rounded-lg shadow-md w-64"
        >
          View Recipes using Next.js <br /> Server Component SWR Method
        </button>
      </div>
    </div>
  );
}

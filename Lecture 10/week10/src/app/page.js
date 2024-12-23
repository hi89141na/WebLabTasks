import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Home() {
  return (
   <div className="h-screen bg-gradient-to-r from-yellow-200 to-orange-400 flex items-center flex-col gap-5 justify-center">
    <p className="text-3xl font-bold">Explore Our Blogs</p>
    <Button><Link href="/blogs">Explore</Link></Button>
   </div>

  );
}

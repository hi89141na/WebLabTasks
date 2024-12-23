import Card from "../components/Card";
import Image from 'next/image';
import { getEvents } from "@/data";
import Link from "next/link";
export default function Home() {
  const id = 2;
  const events = getEvents();
  return (
    <div className="min-h-screen flex justify-center bg-grey items-center">
      <div className="w-[60%] space-y-4">
      {
        events.map((event)=>{
          return <Card key={event.id} img={event.img} title={event.title} date={event.date} subTitle={event.subTitle} id={event.id} />
        })
      }
<Link href="/detail/3">Link</Link>
      </div>
    </div>
  );
}

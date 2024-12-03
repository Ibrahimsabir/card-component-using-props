import Image from "next/image";
import { Card } from "./components/card";

export default function Home() {
  return (
    <div className="flex justify-around items-center h-screen bg-gray-100 border-1 border-gray-200 px-24">
      
        <Card/>
    </div>
  );
}

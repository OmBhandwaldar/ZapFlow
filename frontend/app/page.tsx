import { Appbar } from "@/components/Appbar";
import { LandingSec } from "@/components/LandingSec";
import { Vid } from "@/components/Vid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-48">
    <Appbar />
    <LandingSec />
    <div className="pt-8">
      <Vid />
    </div>
</main>
  );
}

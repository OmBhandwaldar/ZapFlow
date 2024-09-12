"use client"
import { useRouter } from "next/navigation"
import { MainButton } from "@/utils/mainButton";
import { SecondaryButton } from "@/utils/secondaryButton";
import { Feature } from "./Feature";

export const LandingSec = () => {
    const router = useRouter();
    return <div>
        <div className="flex justify-center">
            <div className="text-5xl font-semibold text-center pt-8 max-w-xl">
                Automate as fast as you can type    
            </div>
        </div>
        <div className="flex justify-center pt-2">
            <div className="text-xl font-normal text-center pt-8 max-w-2xl">
                AI gives you automation superpowers, and Zapier puts them to work. Pairing AI and Zapier helps you turn ideas into workflows and bots that work for you.
            </div>
        </div>

        <div className="flex justify-center pt-4">
            <div className="flex">
                <MainButton onClick={() => {
                    router.push("/signup")
                }} size="big">Get Started free</MainButton>
                {/* <div className={`text-xl px-10 py-4 cursor-pointer hover:shadow-md bg-amber-700 text-white rounded-full text-center flex justify-center flex-col`}>
                Get Started free
                </div> */}
                <div className="pl-4">
                    <SecondaryButton  onClick={() => {}} size="big">Contact Sales</SecondaryButton>
                    {/* <div className={`text-xl px-10 py-4" cursor-pointer hover:shadow-md border text-black border-black rounded-full`}>
        Contact Sales
    </div> */}
                </div>
            </div>
        </div>

        <div className="flex justify-center pt-4">
            <Feature title={"Free Forever"} subtitle={"for core features"} />
            <Feature title={"More apps"} subtitle={"than any other platforms"} />
            <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
        </div>
    </div>
}
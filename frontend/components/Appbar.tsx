"use client";
import { useRouter } from "next/navigation"
import { Button } from "@/utils/button";
import { MainButton } from "@/utils/mainButton";

export const Appbar = () => {
    const router = useRouter();
    return <div className="flex border-b justify-between p-4">
        <div className="flex flex-col justify-center text-2xl font-extrabold cursor-pointer">
            Zapier
        </div>
        <div className="flex">
            <div className="pr-4">
                <Button onClick={() => {}}>Contact Sales</Button>
            </div>
            <div className="pr-4">
                <Button onClick={() => {
                    router.push("/login")
                }}>Login</Button>
            </div>
            <MainButton onClick={() => {
                router.push("/signup")
            }}>
                Signup
            </MainButton>            
            {/* <div  className={`text-sm px-8 py-2 cursor-pointer hover:shadow-md bg-amber-700 text-white rounded-full text-center flex justify-center flex-col`}>
                sadfsa
            </div> */}
        </div>
    </div>
}
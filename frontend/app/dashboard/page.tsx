"use client"
import { Appbar } from "@/components/Appbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL, HOOKS_URL } from "../config";
// import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";
import { Button } from "@/utils/button";
import { DarkButton } from "@/utils/darkButton";

interface Zap {
    "id": string,
    "triggerId": string,
    "userId": number,
    "actions": {
        "id": string,
        "zapId": string,
        "actionId": string,
        "sortingOrder": number,
        "type": {
            "id": string,
            "name": string
            "image": string
        }
    }[],
    "trigger": {
        "id": string,
        "zapId": string,
        "triggerId": string,
        "type": {
            "id": string,
            "name": string,
            "image": string
        }
    }
}

function useZaps() {
    const [loading, setLoading] = useState(true);
    const [zaps, setZaps] = useState<Zap[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/zap`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(res => {
                setZaps(res.data.zaps);
                setLoading(false)
            })
    }, []);

    return {
        loading, zaps
    }
}

export default function() {
    const { loading, zaps } = useZaps();
    const router = useRouter();
    
    return <div>
        <Appbar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg	 w-full">
                <div className="flex justify-between pr-8 ">
                    <div className="text-2xl font-bold">
                        My Zaps
                    </div>
                    <DarkButton onClick={() => {
                        router.push("/zap/create");
                    }}>Create</DarkButton>
                    {/* <div className={`flex flex-col justify-center px-8 py-2 cursor-pointer hover:shadow-md bg-purple-800 text-white rounded text-center`}>
                        Create
                    </div> */}
                </div>
            </div>
        </div>
        {loading ? "Loading..." : <div className="flex justify-center"> <ZapTable zaps={zaps} /> </div>}
    </div>
}

function ZapTable({ zaps }: {zaps: Zap[]}) {
    const router = useRouter();

    return <div className="p-8 max-w-screen-lg w-full">
        <div className="flex border-b pb-3 font-semibold">
                <div className="flex-1">Name</div>
                <div className="flex-1">ID</div>
                <div className="flex-1">Created at</div>
                <div className="flex-1">Webhook URL</div>
                <div className="flex-1">Go</div>
        </div>
        {zaps.map(z => <div className="flex border-b py-4">
            <div className="flex-1 flex"><img src={z.trigger.type.image} className="w-[30px] h-[30px]" /> {z.actions.map(x => <img src={x.type.image} className="w-[30px] h-[30px]" />)}</div>
            <div className="flex-1">{z.id}</div>
            <div className="flex-1">Nov 13, 2023</div>
            <div className="flex-1 hover:underline hover:cursor-pointer">{`${HOOKS_URL}/hooks/catch/1/${z.id}`}</div>
            <div className="flex-1">
                <Button onClick={() => {
                    router.push("/zap/" + z.id)
                }}>Go</Button></div>
        </div>)}
    </div>
}
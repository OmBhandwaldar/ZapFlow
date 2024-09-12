"use client";

import { ReactNode } from "react"

export const Button = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
    return <div className="flex justify-center px-2 py-2 cursor-pointer hover:bg-slate-100 font-light text-sm rounded" onClick={onClick}>
        {children}
    </div>
}
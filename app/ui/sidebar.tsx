'use client'

import Link from "next/link"
import { useState } from "react"


export default function Sidebar() {
    const [activeBar, setActiveBar] = useState('')
    return (
        <div className="flex flex-col p-4 border-r border-gray-300 h-screen gap-2">
            <Link 
                onClick={() => setActiveBar('overview')}
                href="/dashboard" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-between rounded-md hover:shadow-md">
                <p>Data Overview </p>
                {activeBar === 'overview' && <div className="w-4 h-4 bg-white rounded-full ml-2 border-2 border-blue-500 animate-pulse"></div>}
            </Link>
            <Link 
                onClick={() => setActiveBar('claims')}
                href="/dashboard/claims" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-between rounded-md hover:shadow-md">
                <p>Admin Dashboord</p>
                {activeBar === 'claims' && <div className="w-4 h-4 bg-white rounded-full ml-2 border-2 border-blue-500 animate-pulse"></div>}
            </Link>
            <Link 
                onClick={() => setActiveBar('fraud')}
                href="/dashboard/fraud" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-between rounded-md hover:shadow-md">
                <p>Fraud Detection</p>
                {activeBar === 'fraud' && <div className="w-4 h-4 bg-white rounded-full ml-2 border-2 border-blue-500 animate-pulse"></div>}
            </Link>
            <Link
                onClick={() => setActiveBar('blacklist')}
                href="/dashboard/blacklist" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-between rounded-md hover:shadow-md">
                <p>Blacklist</p>
                {activeBar === 'blacklist' && <div className="w-4 h-4 bg-white rounded-full ml-2 border-2 border-blue-500 animate-pulse"></div>}
            </Link>
            <Link href="/users" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-between rounded-md hover:shadow-md">Users</Link>
        </div>
    )
}
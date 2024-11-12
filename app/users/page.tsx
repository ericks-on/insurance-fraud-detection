import Link from "next/link";

export default function UserSelectPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>
                <p className="mb-8 text-gray-600">Select a user to view their information</p>
                
                <div className="flex flex-col space-y-4 w-full max-w-sm">
                    <Link href="/user?username=user_1">
                        <div className="w-full py-3 px-6 text-center bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-200">
                            View user_1&apos;s Profile
                        </div>
                    </Link>
                    <Link href="/user?username=jdoe">
                        <div className="w-full py-3 px-6 text-center bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-200">
                            View Jdoe&apos;s Profile
                        </div>
                    </Link>
                    <Link href="/user?username=asmith">
                        <div className="w-full py-3 px-6 text-center bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-200">
                            View asmith&apos;s Profile
                        </div>
                    </Link>
                    <Link href="/user?username=mjohnson">
                        <div className="w-full py-3 px-6 text-center bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-200">
                            View mjohnson&apos;s Profile
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
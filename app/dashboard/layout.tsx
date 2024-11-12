import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex">
        {/* sidebar   */}
        <div className="flex flex-col p-4 border-r border-gray-300 h-screen gap-2">
            <Link href="/dashboard" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-center rounded-md hover:shadow-md">Data Overview</Link>
            <Link href="/dashboard/claims" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-center rounded-md hover:shadow-md">Admin Dashboord</Link>
            <Link href="/dashboard/fraud" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-center rounded-md hover:shadow-md">Fraud Monitor</Link>
            <Link href="/dashboard/blacklist" className="bg-gray-900 text-white p-4 hover:bg-gray-500 w-64 flex items-center justify-center rounded-md hover:shadow-md">Blacklist</Link>
        </div>
        <div className="overflow-auto w-full h-screen p-2">{children}</div>
      </div>
    );
  }
  
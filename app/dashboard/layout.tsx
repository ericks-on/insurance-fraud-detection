import Link from "next/link";
import Sidebar from "../ui/sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex">
        {/* sidebar   */}
        <Sidebar />
        <div className="overflow-auto w-full h-screen p-2">{children}</div>
      </div>
    );
  }
  
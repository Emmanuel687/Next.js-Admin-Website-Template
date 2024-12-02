import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-100">Your Logo</h1>
      </div>
  
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/" 
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-00"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              href="/analytics" 
              className="flex items-center px-6 py-3 !text-red-700 hover:bg-gray-100"
            >
              Analytics
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
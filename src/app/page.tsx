import Link from 'next/link'

export default function PersonalOS() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="fixed left-0 top-0 w-64 h-full bg-white border-r border-gray-200 p-6">
        <div className="mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 flex items-center justify-center text-white font-bold text-lg">
            ND
          </div>
          <h1 className="text-lg font-medium text-gray-900">Nick Decker</h1>
          <p className="text-sm text-gray-500">Personal OS</p>
        </div>
        
        <ul className="space-y-1">
          <li><Link href="/" className="block py-2 px-3 text-sm text-gray-700 bg-gray-100 rounded font-medium">Start Here</Link></li>
          <li><Link href="/identity" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded">Identity</Link></li>
          <li><Link href="/beliefs" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded">Beliefs</Link></li>
          <li><Link href="/systems" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded">Systems</Link></li>
          <li><Link href="/projects" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded">Projects</Link></li>
          <li><Link href="/now" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded">Now</Link></li>
          <li><Link href="/library" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded">Library</Link></li>
          <li><Link href="/guidance" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded">Guidance</Link></li>
        </ul>
        
        <div className="mt-8">
          <input 
            type="text" 
            placeholder="Search OS..." 
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs text-gray-400">
            Last updated: June 2025
          </p>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">Personal Operating System</h1>
          <p className="text-lg text-gray-600">A living digital system for coherent identity and growth</p>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl space-y-6 text-gray-800 leading-relaxed mb-12">
          <p className="text-xl leading-relaxed">
            Welcome to my digital home base. This is a living, breathing document—a map of what I believe, 
            how I operate, and the tools and frameworks I use to move through life in resonance.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="text-blue-800">
              <strong>What is a Personal OS?</strong> Think of it as the fusion of a personal wiki, 
              brand bible, operating manual, and content ecosystem. It&apos;s my blueprint and broadcast—a 
              map of my inner world in public view.
            </p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/identity" className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded mb-4 flex items-center justify-center">
              <span className="text-white text-sm font-bold">ID</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Identity</h3>
            <p className="text-sm text-gray-600">Mission, values, archetypes, and core purpose</p>
          </Link>

          <Link href="/beliefs" className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded mb-4 flex items-center justify-center">
              <span className="text-white text-sm font-bold">BE</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Beliefs</h3>
            <p className="text-sm text-gray-600">Dynamic principles, frameworks, and living truths</p>
          </Link>

          <Link href="/systems" className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded mb-4 flex items-center justify-center">
              <span className="text-white text-sm font-bold">SY</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Systems</h3>
            <p className="text-sm text-gray-600">Tools, habits, rituals, and creative practices</p>
          </Link>

          <Link href="/projects" className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded mb-4 flex items-center justify-center">
              <span className="text-white text-sm font-bold">PR</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600">Projects</h3>
            <p className="text-sm text-gray-600">Live and archived work, case studies</p>
          </Link>

          <Link href="/now" className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded mb-4 flex items-center justify-center">
              <span className="text-white text-sm font-bold">NO</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600">Now</h3>
            <p className="text-sm text-gray-600">Current focus, priorities, and active projects</p>
          </Link>

          <Link href="/library" className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded mb-4 flex items-center justify-center">
              <span className="text-white text-sm font-bold">LI</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">Library</h3>
            <p className="text-sm text-gray-600">Books, media, references, and influences</p>
          </Link>

          <Link href="/guidance" className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded mb-4 flex items-center justify-center">
              <span className="text-white text-sm font-bold">GU</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Guidance</h3>
            <p className="text-sm text-gray-600">Book sessions, join newsletter, offerings</p>
          </Link>

          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="w-8 h-8 bg-gray-400 rounded mb-4 flex items-center justify-center">
              <span className="text-white text-sm font-bold">+</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-2">More Coming</h3>
            <p className="text-sm text-gray-500">Additional sections as the OS evolves</p>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Updates</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">Added Personal OS framework</span>
              <span className="text-sm text-gray-500">June 25, 2025</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">Updated identity and mission</span>
              <span className="text-sm text-gray-500">June 20, 2025</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700">Launched os.nickdecker.net</span>
              <span className="text-sm text-gray-500">June 18, 2025</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
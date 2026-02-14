'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">🎯 Job Navigator</h1>
          <p className="text-xl text-gray-600 mb-8">Your Career Roadmap Platform for Success</p>
          <p className="text-lg text-gray-500 mb-12">Welcome to Job Navigator - Your personal career management system</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Career Roadmap</h3>
              <p className="text-gray-600">Visualize your 3-year journey</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Daily Quest</h3>
              <p className="text-gray-600">Set and track daily goals</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">Project Archive</h3>
              <p className="text-gray-600">Showcase your achievements</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-gray-600">Track your progress</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

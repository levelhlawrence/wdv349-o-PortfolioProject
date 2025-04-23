export default function Home() {
  return (
    <section className="relative md:ml-64">
      <header>
        <h1 className="pl-8 py-5 text-2xl font font-bold text-gray-500 border-b-2">
          Home
        </h1>
        <p className="pl-8 mt-2 text-gray-500"> Welcome Admin </p>
      </header>

      {/* dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 mx-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 mr-4">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <p className="text-gray-600">- Open worker orders.</p>
          <p className="text-gray-600">- Employees clocked in.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 ml-4">
          <h2 className="text-xl font-bold mb-4">Notifications</h2>
          <p className="text-gray-600">Latest updates and alerts.</p>
        </div>
      </div>
    </section>
  );
}

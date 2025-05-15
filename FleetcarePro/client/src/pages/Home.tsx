export default function Home() {
  return (
    <section className="relative md:ml-64">
      <header>
        <h1 className="pl-8 py-5 text-2xl font font-bold text-gray-500 border-b-2">
          Home
        </h1>
        <h2 className="pl-8 mt-4 text-gray-500 text-lg">
          {" "}
          Welcome, Demo User{" "}
        </h2>
      </header>

      {/* dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 mx-8">
        <p>
          This is the Fleet Maintenance Demo. This app is designed to track work
          orders and fleet details
        </p>
      </div>
    </section>
  );
}

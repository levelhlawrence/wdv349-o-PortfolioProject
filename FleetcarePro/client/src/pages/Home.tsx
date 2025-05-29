import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative md:ml-64">
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-20 text-center text-gray-900">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-emerald-600">
          Fleetcare Pro
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8">
          Track your fleet. Streamline repairs. Reduce downtime. All from one
          smart dashboard.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20 w-full max-w-6xl">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2 text-emerald-600">
              Vehicle Management
            </h2>
            <p className="text-gray-600">
              Monitor vehicle details, maintenance history, and status in one
              view.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2 text-emerald-600">
              Work Order Tracking
            </h2>
            <p className="text-gray-600">
              Create and manage repair tasks with real-time updates and history
              logs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2 text-emerald-600">
              Smart Notifications
            </h2>
            <p className="text-gray-600">
              Get notified of upcoming services and critical issues before they
              cost you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

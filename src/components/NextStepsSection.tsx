export default function NextStepsSection() {
  return (
    <div className="w-11/12 mx-auto mt-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6">Next Steps & Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Get Your Free SEO Guide */}
        <div className="bg-slate-50 p-6 rounded-2xl">
          <h3 className="text-lg font-medium mb-3">Get Your Free SEO Guide</h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter your work email to receive a comprehensive guide on
            Programmatic SEO.
          </p>
          <div className="mb-4">
            <input
              type="email"
              placeholder="your.email@company.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full flex justify-center items-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Send Guide
          </button>
        </div>

        {/* Share Your Simulation */}
        <div className="bg-slate-50 p-6 rounded-2xl">
          <h3 className="text-lg font-medium mb-3">Share Your Simulation</h3>
          <p className="text-sm text-gray-600 mb-4">
            Copy a unique link to share this simulation with your current
            settings.
          </p>
          <button className="w-full flex justify-center items-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Copy Share Link
          </button>
        </div>

        {/* Download Results */}
        <div className="bg-slate-50 p-6 rounded-2xl">
          <h3 className="text-lg font-medium mb-3">Download Results</h3>
          <p className="text-sm text-gray-600 mb-4">
            Save a PDF summary of the simulation results and charts.
          </p>
          <button className="w-full flex justify-center items-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

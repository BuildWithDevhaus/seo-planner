import { SimulationInputs } from "../types";

interface AssumptionsProps {
  inputs: SimulationInputs;
  onInputChange: (name: keyof SimulationInputs, value: number) => void;
  onRunSimulation: () => void;
}

export default function Assumptions({
  inputs,
  onInputChange,
  onRunSimulation,
}: AssumptionsProps) {
  return (
    <>
      <div className="w-11/12 mx-auto py-4 md:px-6 lg:px-8  bg-slate-50 rounded-2xl">
        <h1 className="font-semibold py-4 text-2xl">Simulations assumptions</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onRunSimulation();
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <label className="text-sm font-medium text-gray-900">
              Number of pSEO Pages
            </label>
            <input
              id="pSEO_pages"
              type="number"
              value={inputs.pSEO_pages || ""}
              onChange={(e) =>
                onInputChange("pSEO_pages", parseFloat(e.target.value) || 0)
              }
              className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label className="text-sm font-medium text-gray-900">
              Avg. Monthly Search Vol (MSV) / Page
            </label>
            <input
              id="avg_msv"
              type="number"
              value={inputs.avg_msv || ""}
              onChange={(e) =>
                onInputChange("avg_msv", parseFloat(e.target.value) || 0)
              }
              className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label className="text-sm font-medium text-gray-900">
              Avg. Click-Through Rate (CTR %)
            </label>
            <input
              id="avg_ctr"
              type="number"
              value={inputs.avg_ctr || ""}
              onChange={(e) =>
                onInputChange("avg_ctr", parseFloat(e.target.value) || 0)
              }
              className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label className="text-sm font-medium text-gray-900">
              Traffic-to-Lead Conv. Rate (%)
            </label>
            <input
              id="traffic_cr"
              type="number"
              value={inputs.traffic_cr || ""}
              onChange={(e) =>
                onInputChange("traffic_cr", parseFloat(e.target.value) || 0)
              }
              className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label className="text-sm font-medium text-gray-900">
              Lead-to-Customer Conv. Rate (%)
            </label>
            <input
              id="lead_cr"
              type="number"
              value={inputs.lead_cr || ""}
              onChange={(e) =>
                onInputChange("lead_cr", parseFloat(e.target.value) || 0)
              }
              className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label className="text-sm font-medium text-gray-900">
              Avg. Customer Lifetime Value (CLTV) ($)
            </label>
            <input
              id="cltv"
              type="number"
              value={inputs.cltv || ""}
              onChange={(e) =>
                onInputChange("cltv", parseFloat(e.target.value) || 0)
              }
              className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label className="text-sm font-medium text-gray-900">
              Ramp-up Period (Months)
            </label>
            <input
              id="ramp_up"
              type="number"
              value={inputs.ramp_up || ""}
              onChange={(e) =>
                onInputChange("ramp_up", parseFloat(e.target.value) || 0)
              }
              className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label className="text-sm font-medium text-gray-900">
              Monthly Expense ($)
            </label>
            <input
              id="monthly_expense"
              type="number"
              value={inputs.monthly_expense || ""}
              onChange={(e) =>
                onInputChange(
                  "monthly_expense",
                  parseFloat(e.target.value) || 0
                )
              }
              className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center mx-auto">
        <button
          onClick={onRunSimulation}
          className="mt-8 border px-4 py-2 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition-all ease-in-out duration-300 cursor-pointer"
        >
          Run simulation
        </button>
      </div>
    </>
  );
}

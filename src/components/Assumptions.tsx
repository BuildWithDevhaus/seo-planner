import { SimulationInputs } from "../types";
import CustomTooltip from "./CustomTooltip";
import SheetInformation from "./SheetInformation";
import { Accordion, AccordionItem } from "@heroui/react";
import { ArrowRightIcon } from "lucide-react";

// Helper function to format numbers with commas
const formatNumberWithCommas = (num: number | string) => {
  if (num === null || num === undefined || num === "") return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

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
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="1"
          title="Simulations assumptions"
          indicator={<ArrowRightIcon className="w-6 h-4" />}
          className="text-left border rounded-xl mx-24  mb-4 py-1 w-auto  bg-slate-50"
        >
          <div className="w-11/12 mx-auto py-4 md:px-6 lg:px-8  bg-slate-50 rounded-2xl">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold py-4 text-2xl  max-w-md">
                Simulations assumptions
              </h1>
              <SheetInformation />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onRunSimulation();
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <label className="text-sm font-medium text-gray-900">
                  <CustomTooltip description="Total number of targeted pages created.">
                    Number of pSEO Pages
                  </CustomTooltip>
                </label>
                <input
                  id="pSEO_pages"
                  type="text"
                  value={formatNumberWithCommas(inputs.pSEO_pages || "")}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, "");
                    onInputChange("pSEO_pages", parseFloat(value) || 0);
                  }}
                  className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <label className="text-sm font-medium text-gray-900">
                  <CustomTooltip description="Estimated average monthly searches for keywords targeted by each page.">
                    Avg. Monthly Search Vol (MSV) / Page
                  </CustomTooltip>
                </label>
                <input
                  id="avg_msv"
                  type="text"
                  value={formatNumberWithCommas(inputs.avg_msv || "")}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, "");
                    onInputChange("avg_msv", parseFloat(value) || 0);
                  }}
                  className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <label className="text-sm font-medium text-gray-900">
                  <CustomTooltip description="Estimated percentage of searchers who click your link.">
                    Avg. Click-Through Rate (CTR %)
                  </CustomTooltip>
                </label>
                <input
                  id="avg_ctr"
                  type="text"
                  value={formatNumberWithCommas(inputs.avg_ctr || "")}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, "");
                    onInputChange("avg_ctr", parseFloat(value) || 0);
                  }}
                  className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <label className="text-sm font-medium text-gray-900">
                  <CustomTooltip description="Percentage of visitors who become a lead.">
                    Traffic-to-Lead Conv. Rate (%)
                  </CustomTooltip>
                </label>
                <input
                  id="traffic_cr"
                  type="text"
                  value={formatNumberWithCommas(inputs.traffic_cr || "")}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, "");
                    onInputChange("traffic_cr", parseFloat(value) || 0);
                  }}
                  className="w-1/4 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <label className="text-sm font-medium text-gray-900">
                  <CustomTooltip description="Percentage of leads who become customers.">
                    Lead-to-Customer Conv. Rate (%)
                  </CustomTooltip>
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
                  <CustomTooltip description="Estimated total revenue from one customer.">
                    Avg. Customer Lifetime Value (CLTV) ($)
                  </CustomTooltip>
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
                  <CustomTooltip description="Months for traffic to reach full potential (linear increase assumed).">
                    Ramp-up Period (Months)
                  </CustomTooltip>
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
                  <CustomTooltip description="Estimated total recurring monthly cost for this SEO strategy (tools, content, links, personnel, etc.).">
                    Monthly Expense ($)
                  </CustomTooltip>
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
            <div className="flex justify-center mx-auto">
              <button
                onClick={onRunSimulation}
                className="mt-8 border px-4 py-2 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition-all ease-in-out duration-300 cursor-pointer"
              >
                Run simulation
              </button>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}

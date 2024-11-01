import React, { useState } from "react";

const Funnel = () => {
  const [current, setCurrent] = useState(0);

  const funnelStages = [
    {
      id: 0,
      name: "Awareness",
      color: "#F56363",
      items: [
        "Organic search: Topical Authority (Blog)",
        "YouTube Ads",
        "Google Display Network: Affinity",
        "Meta Ads: Awareness campaign",
        "Programmatic campaigns",
        "Pinterest Ads",
        "TikTok Ads",
        "Google Ads: Demand Gen",
      ],
    },
    {
      id: 1,
      name: "Interest",
      color: "#4A90E2",
      items: [
        "Organic search: categories-related content",
        "YouTube Ads",
        "Google Display Network: In-Market",
        "Meta Ads: Engagement and Traffic",
        "Programmatic campaigns",
      ],
    },
    {
      id: 2,
      name: "Decision",
      color: "#50C878",
      items: [
        "Organic search: products-related content",
        "Google Display Network: Custom Audiences",
        "Google Search Ads",
        "Google Performance Max",
        "Meta Ads: Lookalike audiences",
      ],
    },
    {
      id: 3,
      name: "Action",
      color: "#F2AF29",
      items: [
        "Google Search Ads",
        "Google Performance Max",
        "Google Shopping Ads",
        "YouTube Ads: Drive conversions",
        "Meta Ads: Sales and Leads campaigns",
        "Google Display Network: Customer Lists",
      ],
    },
  ];

  return (
    <div className="funnel-container max-w-5xl mx-auto p-8">
      {/* Header Section */}
      <div className="funnel-header text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">Get visible at every place your customer is</h2>
        <div className="inline-flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
            <path d="..." stroke="#36332E" strokeWidth="1.1" />
          </svg>
          <p>Click on the funnel element to find out more</p>
        </div>
      </div>

      {/* Funnel Buttons */}
      <div className="funnel-buttons grid grid-cols-4 gap-4 mb-8">
        {funnelStages.map((stage) => (
          <button
            key={stage.id}
            className={`funnel-stage-button text-xl font-bold p-4 text-white transition-all duration-300 ease-in-out ${
              current === stage.id ? "saturate-100 shadow-lg transform scale-105" : "opacity-70"
            }`}
            style={{ backgroundColor: stage.color }}
            onClick={() => setCurrent(stage.id)}
          >
            {stage.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="funnel-content p-8 border-2 rounded-lg" style={{ borderColor: funnelStages[current].color }}>
        <div className="grid gap-4">
          {funnelStages[current].items.map((item, index) => (
            <div
              key={index}
              className="funnel-item flex items-center gap-4 bg-beige-100 py-3 px-4 rounded-lg shadow-sm"
            >
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Funnel;

import { useState } from "react";
import OverviewTab from "./OverviewTab";
import CastCrewTab from "./CastCrewTab";
import ReviewTab from "./ReviewTab";
import RelatedMovieTab from "./RelatedMovieTab";
import DescriptionTab from "./DescriptionTab";

const SingleMovieTabs = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: "Overview", content: <OverviewTab data={data} setActiveTab={setActiveTab} /> },
        { id: 1, label: "Description", content: <DescriptionTab data={data} /> },
        { id: 2, label: "Cast & Crew", content: <CastCrewTab data={data} /> },
        { id: 3, label: "Reviews", content: <ReviewTab data={data} /> },
        { id: 4, label: "Related Movies", content: <RelatedMovieTab data={data} /> },
    ];

    return (
        <div className="w-full mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-5">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2 text-base md:text-lg font-bold uppercase border-b-2 transition-colors ${activeTab === tab.id
                            ? "border-accent text-accent"
                            : "border-transparent hover:text-accent hover:border-accent"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-5 bg-[#020d18] rounded-b-md shadow-sm">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};

export default SingleMovieTabs;

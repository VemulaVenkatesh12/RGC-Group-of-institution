import React, { ReactNode, useEffect, useState } from "react";

export interface TabItem {
  label: string;
  key: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabItems: TabItem[];
  btnStyle: string;
  tabIntro?: ReactNode;
  introBackgroundColor?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabItems,
  btnStyle,
  tabIntro,
  introBackgroundColor = "",
}) => {
  const [activeTab, setActiveTab] = useState(tabItems[0]?.key);
  useEffect(() => {
    if (tabItems.length > 0 && !activeTab) {
      setActiveTab(tabItems[0].key);
    }
  }, [tabItems, activeTab]);

  return (
    <>
      {tabIntro ? (
        <div className={`pb-5  ${introBackgroundColor}`}>
          <div className="container pe-0 ">
            {tabIntro && tabIntro}

            <ul className="nav nav-pills" role="tablist">
              {tabItems.map((tab) => (
                <li className="nav-item" key={tab.key} role="presentation">
                  <button
                    className={`btn btn-md me-1 mb-2 bg-white ${btnStyle} ${
                      activeTab === tab.key ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.key)}
                    type="button"
                    role="tab"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="container">
          <ul className="nav nav-pills" role="tablist">
            {tabItems.map((tab) => (
              <li className="nav-item" key={tab.key} role="presentation">
                <button
                  className={`btn btn-md me-1 bg-white ${btnStyle} ${
                    activeTab === tab.key ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                  type="button"
                  role="tab"
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className={`tab-content mt-4 container mb-5 ${tabIntro ? "p-0" : ""} `}
      >
        {tabItems.map(
          (tab) =>
            tab.key === activeTab && (
              <div key={tab.key} className="tab-pane fade show active">
                {tab.content}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Tabs;

import { useState } from "react";
import './DriverTab.css';

const VehicleTab = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Vehicle 1", content: {} },
  ]);
  const [activeTab, setActiveTab] = useState(1);

  // Add a new tab
  const addTab = () => {
    const newTabId = tabs.length ? tabs[tabs.length - 1].id + 1 : 1;
    setTabs((prevTabs) => [
      ...prevTabs,
      { id: newTabId, title: `Vehicle ${newTabId}`, content: {} },
    ]);
    setActiveTab(newTabId); // Automatically switch to the new tab
  };

  // Remove a tab
  const removeTab = (id) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== id));
    // If the removed tab is active, switch to the first remaining tab
    if (activeTab === id && tabs.length > 1) {
      const firstTab = tabs.find((tab) => tab.id !== id);
      setActiveTab(firstTab ? firstTab.id : null);
    }
  };

  // Update content of the active tab
  const updateTabContent = (id, field, value) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === id
          ? { ...tab, content: { ...tab.content, [field]: value } }
          : tab
      )
    );
  };

  // Handle submit for the active tab
  const handleSubmit = () => {
    const activeTabData = tabs.find((tab) => tab.id === activeTab);
    console.log("Submitted Data for Tab:", activeTabData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div>
      {/* Tab Headers */}
      <div className="tabs-header">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-title ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            <button
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent switching tabs when closing
                removeTab(tab.id);
              }}
            >
              ✕
            </button>
          </div>
        ))}
        <button className="add-tab-btn" onClick={addTab}>
          Add Vehicle
        </button>
      </div>

      {/* Active Tab Content */}
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab) ? (
          <div>
            <div className="ins2-col">
              <label className="label" htmlFor="year">
                Year:
              </label>
              <br />
              <input
                className="field"
                type="text"
                id="year"
                name="year"
                value={tabs.find((tab) => tab.id === activeTab)?.content.year || ""}
                onChange={(e) =>
                  updateTabContent(activeTab, "year", e.target.value)
                }
              />
            </div>
            <div className="ins2-col">
              <label className="label" htmlFor="make">
                Make:
              </label>
              <br />
              <input
                className="field"
                type="text"
                id="make"
                name="make"
                value={tabs.find((tab) => tab.id === activeTab)?.content.make || ""}
                onChange={(e) =>
                  updateTabContent(activeTab, "make", e.target.value)
                }
              />
            </div>
            <div className="ins2-col">
              <label className="label" htmlFor="model">
                Model:
              </label>
              <br />
              <input
                className="field"
                type="text"
                id="model"
                name="model"
                value={
                  tabs.find((tab) => tab.id === activeTab)?.content.model ||
                  ""
                }
                onChange={(e) =>
                  updateTabContent(activeTab, "model", e.target.value)
                }
              />
            </div>
            
            <div className="ins2-col">
              <label className="label" htmlFor="primaryuse">
              PrimaryUse:
              </label>
              <br />
              <select
                className="field"
                id="primaryuse"
                name="primaryuse"
                value={tabs.find((tab) => tab.id === activeTab)?.content.primaryuse || ""}
                onChange={(e) => updateTabContent(activeTab, "primaryuse", e.target.value)}
              >
                <option value="">Select primaryuse</option>
                <option value="primaryuse">primaryuse1</option>
                <option value="primaryuse">primaryuse2</option>
              </select>
            </div>

            <div className="ins2-col">
              <label className="label" htmlFor="vehicletype">
              VehicleType:
              </label>
              <br />
              <select
                className="field"
                id="vehicletype"
                name="vehicletype"
                value={
                  tabs.find((tab) => tab.id === activeTab)?.content.vehicletype || ""
                }
                onChange={(e) =>
                  updateTabContent(activeTab, "vehicletype", e.target.value)
                }
              >
                <option value="">Select vehicle Type</option>
                <option value="vehicletype1">vehicletype1</option>
                <option value="vehicletype2">vehicletype2</option>
              </select>
            </div>

            {/* <form
              className="btnpanel"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form> */}
          </div>
        ) : (
          <p>No Vehicle tab available. Add a new Vehicle tab!</p>
        )}
      </div>
    </div>
  );
};

export default VehicleTab;

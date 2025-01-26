import { useState } from "react";
import './DriverTab.css';

const DriverTab = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Driver 1", content: {} },
  ]);
  const [activeTab, setActiveTab] = useState(1);

  // Add a new tab
  const addTab = () => {
    const newTabId = tabs.length ? tabs[tabs.length - 1].id + 1 : 1;
    setTabs((prevTabs) => [
      ...prevTabs,
      { id: newTabId, title: `Driver ${newTabId}`, content: {} },
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
          Add Driver
        </button>
      </div>

      {/* Active Tab Content */}
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab) ? (
          <div>
            <div className="ins2-col">
              <label className="label" htmlFor="fname">
                First Name:
              </label>
              <br />
              <input
                className="field"
                type="text"
                id="fname"
                name="fname"
                value={tabs.find((tab) => tab.id === activeTab)?.content.fname || ""}
                onChange={(e) =>
                  updateTabContent(activeTab, "fname", e.target.value)
                }
              />
            </div>
            <div className="ins2-col">
              <label className="label" htmlFor="lname">
                Last Name:
              </label>
              <br />
              <input
                className="field"
                type="text"
                id="lname"
                name="lname"
                value={tabs.find((tab) => tab.id === activeTab)?.content.lname || ""}
                onChange={(e) =>
                  updateTabContent(activeTab, "lname", e.target.value)
                }
              />
            </div>
            <div className="ins2-col">
              <label className="label" htmlFor="licenseNumber">
                License Number:
              </label>
              <br />
              <input
                className="field"
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                value={
                  tabs.find((tab) => tab.id === activeTab)?.content.licenseNumber ||
                  ""
                }
                onChange={(e) =>
                  updateTabContent(activeTab, "licenseNumber", e.target.value)
                }
              />
            </div>
            <div className="ins2-col">
              <label className="label" htmlFor="licenseState">
                License State:
              </label>
              <br />
              <input
                className="field"
                type="text"
                id="licenseState"
                name="licenseState"
                value={
                  tabs.find((tab) => tab.id === activeTab)?.content.licenseState ||
                  ""
                }
                onChange={(e) =>
                  updateTabContent(activeTab, "licenseState", e.target.value)
                }
              />
            </div>
            <div className="ins2-col">
              <label className="label" htmlFor="dob">
                Date of Birth:
              </label>
              <br />
              <input
                className="field"
                type="text"
                id="dob"
                name="dob"
                value={tabs.find((tab) => tab.id === activeTab)?.content.dob || ""}
                onChange={(e) =>
                  updateTabContent(activeTab, "dob", e.target.value)
                }
              />
            </div>
           
            <div className="ins2-col">
              <label className="label" htmlFor="gender">
                Gender:
              </label>
              <br />
              <select
                className="field"
                id="gender"
                name="gender"
                value={tabs.find((tab) => tab.id === activeTab)?.content.gender || ""}
                onChange={(e) => updateTabContent(activeTab, "gender", e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="ins2-col">
              <label className="label" htmlFor="maritalStatus">
                Marital Status:
              </label>
              <br />
              <select
                className="field"
                id="maritalStatus"
                name="maritalStatus"
                value={
                  tabs.find((tab) => tab.id === activeTab)?.content.maritalStatus || ""
                }
                onChange={(e) =>
                  updateTabContent(activeTab, "maritalStatus", e.target.value)
                }
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>

            <form
              className="btnpanel"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <p>No Driver tab available. Add a new Driver tab!</p>
        )}
      </div>
    </div>
  );
};

export default DriverTab;

import React, { useState } from "react";
import TabsManagement from "../TabsManagement/TabsManagement";
import ContentTabOne from "../ContentTabOne/ContentTabOne";
import ContentTabTwo from "../ContentTabTwo/ContentTabTwo";
import {
  TabsContainer,
  TabsParagraph,
  TabsTitle,
} from "../../styles/ManageTabs.styles";

const ManageTabs = () => {
  const [tabState, setTabState] = useState(1);

  const handleTabClicked = (index) => {
    setTabState(index);
  };
  return (
    <TabsContainer>
      <TabsTitle>
        <span>Manage Tabs</span>
      </TabsTitle>
      <TabsParagraph>
        Manage home page tabs. Adding and removing contents as well as changing
        tabs name.
      </TabsParagraph>
      <div style={{ marginTop: "36px", marginLeft: "5%", marginRight: "5%" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="admin_tabs_menu_row">
              <div
                className={
                  tabState === 1
                    ? "tabs_tab_btn active_tabs_tab_btn"
                    : "tabs_tab_btn"
                }
                onClick={() => handleTabClicked(1)}
              >
                <p
                  style={{
                    margin: "0",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                  }}
                >
                  Tabs Name
                </p>
              </div>

              <div
                className={
                  tabState === 2
                    ? "tabs_tab_btn active_tabs_tab_btn"
                    : "tabs_tab_btn"
                }
                onClick={() => handleTabClicked(2)}
              >
                <p
                  style={{
                    margin: "0",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                  }}
                >
                  Tab One
                </p>
              </div>
              <div
                className={
                  tabState === 3
                    ? "tabs_tab_btn active_tabs_tab_btn"
                    : "tabs_tab_btn"
                }
                onClick={() => handleTabClicked(3)}
              >
                <p
                  style={{
                    margin: "0",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                  }}
                >
                  Tab Two
                </p>
              </div>

              <div
                className={
                  tabState === 4
                    ? "tabs_tab_btn active_tabs_tab_btn"
                    : "tabs_tab_btn"
                }
                onClick={() => handleTabClicked(4)}
              >
                <p
                  style={{
                    margin: "0",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                  }}
                >
                  Manage
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "86px" }}>
            <div
              className={
                tabState === 1
                  ? "single_tab_content active_single_tab_content"
                  : "single_tab_content"
              }
            >
              <TabsManagement />
            </div>
            <div
              className={
                tabState === 2
                  ? "single_tab_content active_single_tab_content"
                  : "single_tab_content"
              }
            >
              <ContentTabOne />
            </div>
            <div
              className={
                tabState === 3
                  ? "single_tab_content active_single_tab_content"
                  : "single_tab_content"
              }
            >
              <ContentTabTwo />
            </div>
            <div
              className={
                tabState === 4
                  ? "single_tab_content active_single_tab_content"
                  : "single_tab_content"
              }
            >
              Post - 04
            </div>
          </div>
        </div>
      </div>
    </TabsContainer>
  );
};

export default ManageTabs;

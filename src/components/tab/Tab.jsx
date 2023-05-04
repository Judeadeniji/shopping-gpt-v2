import "./Tab.css";
import { useRef, useState } from "react";
import TabOpenBtn from "./TabOpenBtn";

const Tab = () => {
  const all_categories = useRef();
  const tab_chevron = useRef();
  const toggleCategory = () => {
    all_categories.current.classList.toggle("toggle--categories");
    tab_chevron.current.classList.toggle("toggle--categories");
  };
  const [isTabOpen, setIsTabOpen] = useState(false);
  //
  // displayign the category tab
  const openTab = () => {
    setIsTabOpen(!isTabOpen);
  };
  return (
    <>
      {!isTabOpen ? (
        <section className="category--tab">
          <div
            className="category--tab--h1"
            style={{
              fontWeight: "600",
              marginBottom: "5px",
              fontSize: "18px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Filters</div>
            <i
              className="fas fa-times"
              style={{ cursor: "pointer", color: "red" }}
              onClick={openTab}
            />
          </div>
          <div className="filters--row">
            <div className="categories">
              <div
                className="category--text"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  opacity: ".5",
                }}
                onClick={toggleCategory}
              >
                <div style={{ fontWeight: "500" }}>All Categories</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="tab-category-chevron"
                  style={{ height: "24px", width: "24px" }}
                  ref={tab_chevron}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div
                className="all--categories"
                ref={all_categories}
                style={{ marginTop: "15px" }}
              >
                <form>
                  {/* check one */}
                  <input
                    type="checkbox"
                    id="computer"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="computer"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Computer Accessories
                  </label>
                  <br />
                  {/* check two */}
                  <input
                    type="checkbox"
                    id="electronics"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="electronics"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Electronics
                  </label>
                  <br />
                  {/* check three */}
                  <input
                    type="checkbox"
                    id="clothings"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="clothings"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Clothings
                  </label>
                  <br />
                  {/* check four */}
                  <input
                    type="checkbox"
                    id="jewelries"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="jewelries"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Jewelries
                  </label>
                  <br />
                  {/* check five */}
                  <input
                    type="checkbox"
                    id="fashion"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="fashion"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Fashion
                  </label>
                  <br />
                  {/* check six */}
                  <input
                    type="checkbox"
                    id="baby-product"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="baby-product"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Baby Product
                  </label>
                  <br />
                  {/* check seven */}
                  <input
                    type="checkbox"
                    id="gaming"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="gaming"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Gaming
                  </label>
                  <br />
                  {/* check eight */}
                  <input
                    type="checkbox"
                    id="auto-mobile"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="auto-mobile"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Auto Mobile
                  </label>
                  <br />
                  {/* check nine */}
                  <input
                    type="checkbox"
                    id="health"
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="health"
                    style={{
                      marginLeft: "6px",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    Health
                  </label>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
      {isTabOpen ? <TabOpenBtn openTab={openTab} /> : <></>}
    </>
  );
};

export default Tab;

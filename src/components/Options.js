import React,{useState,useEffect} from "react";
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MenuIcon from '@mui/icons-material/Menu';

function Options(){
    const [toggleState, setToggleState] = useState(1);
    const [show, setShow] = useState(true);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

  return (
    <div>
      {width < 900 && width > 800 && (
        <button onClick={() => setShow(!show)}>
          <MenuIcon />
        </button>
      )}

      <div className={width < 900 && show ? "Options collapse" : "Options"}>
            <div className="top-btns"
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
            }}
            >
            <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
                style={{
                display: "flex",
                margin: "1rem",
                justifyContent: "space-between",
                }}
            >
                <button type="button" class="sales-btn">
                <FileUploadIcon /> Salesforce
                </button>
            </div>

            <div
                className="salesforce">
                <button type="button" class="btn">
                <PauseIcon />
                </button>
                <button
                type="button"
                class="btn"
                style={{ color: "red" }}
                >
                <StopIcon />
                </button>
            </div>
        </div>
        <div className="container1">
          <div className="blocks">
            <button
              className={
                toggleState === 1
                  ? "tabs1 active-tabs1"
                  : "tabs1"
              }
              onClick={() => toggleTab(1)}
            >
              Activity
            </button>
            <button
              className={
                toggleState === 2
                  ? "tabs1 active-tabs1"
                  : "tabs1"
              }
              onClick={() => toggleTab(2)}
            >
              Tasks
            </button>
            <button
              className={
                toggleState === 3
                  ? "tabs1 active-tabs1"
                  : "tabs1"
              }
              onClick={() => toggleTab(3)}
            >
              Progress
            </button>
          </div>

          <div className="content-tabs1">
            <div
              className={
                toggleState === 1 ? "content1  active-content1" : "content1"
              }
            >
              <h5>Activity Section</h5>
            </div>

            <div
              className={
                toggleState === 2 ? "content1  active-content1" : "content1"
              }
            >
              <h5>Task section</h5>
            </div>

            <div
              className={
                toggleState === 3 ? "content1  active-content1" : "content1"
              }
            >
              <h5>Progress section</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Options;
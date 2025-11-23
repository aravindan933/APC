const Loader = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#fff", // Optional background
      zIndex: 9999,       // Always front
    }}
  >
    <div
      style={{
        position: "relative", // Container for loader + text
        width: "74px",
        height: "74px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader" style={{ width: "100%", height: "100%" }}></div>

      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Perfect centering
          fontSize: "1rem",
          fontWeight: 800,
          fontFamily: "gotham",
          color: "#01060FFF", // Text color
        }}
      >
     AP
      </span>
    </div>
  </div>
);

export default Loader;

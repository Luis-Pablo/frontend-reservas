import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div style={{ width: "90%", display: "flex", justifyContent: "start" }}>
    <ContentLoader
      viewBox="120 0 400 200"
      width={550}
      height={200}
      title="Cargando hoteles..."
      {...props}
    >
      <rect x="42.84" y="9.93" rx="5" ry="5" width="193.55" height="176.59" />
      <rect x="252.84" y="12.67" rx="0" ry="0" width="700" height="22.12" />
      <rect x="252.84" y="46.67" rx="0" ry="0" width="700" height="22.12" />
      <rect x="252.84" y="80.67" rx="0" ry="0" width="700" height="22.12" />
      <rect x="252.84" y="116.67" rx="0" ry="0" width="700" height="22.12" />
      <rect x="252.84" y="151.67" rx="0" ry="0" width="700" height="22.12" />
    </ContentLoader>
  </div>
);

export default MyLoader;

export const ImageGrid = (props) => (
  <>
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ContentLoader
        width={800}
        height={575}
        viewBox="0 0 700 455"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        title="Cargando habitaciones..."
        {...props}
      >
        <rect x="14" y="1" rx="2" ry="2" width="140" height="10" />
        <rect x="14" y="19" rx="2" ry="2" width="140" height="10" />
        <rect x="14" y="40" rx="2" ry="2" width="667" height="11" />
        <rect x="12" y="68" rx="2" ry="2" width="211" height="181" />
        <rect x="240" y="67" rx="2" ry="2" width="211" height="181" />
        <rect x="467" y="66" rx="2" ry="2" width="211" height="181" />
        <rect x="12" y="268" rx="2" ry="2" width="211" height="181" />
        <rect x="240" y="266" rx="2" ry="2" width="211" height="181" />
        <rect x="468" y="264" rx="2" ry="2" width="211" height="181" />
      </ContentLoader>
    </div>
  </>
);

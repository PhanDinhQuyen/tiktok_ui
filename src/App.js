import { publishRoutes } from "~/routes";
import { DefaultLayout, HeaderOnly } from "~/layouts";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
function App() {
  const layoutOptions = {
    default: DefaultLayout,
    headerOnly: HeaderOnly,
  };
  return (
    <Routes>
      {publishRoutes.map((item, index) => {
        const Page = item.page;
        const Layout = layoutOptions[item.layout] || Fragment;
        return (
          <Route
            key={index}
            path={item.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;

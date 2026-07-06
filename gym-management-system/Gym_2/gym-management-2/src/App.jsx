import { useEffect, useState } from "react";

import AppRoutes from "./routes/AppRoutes";

import Loader from "./components/Loader/Loader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return <Loader />;

  }

  return (

    <>

      <ScrollProgress />

      <AppRoutes />

      <BackToTop />

    </>

  );

}

export default App;
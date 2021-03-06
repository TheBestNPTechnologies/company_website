import "../styles/tailwind.css";
import "../styles/slick.css";
import 'antd/dist/antd.css';

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);

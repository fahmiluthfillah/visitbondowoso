import "../styles/globals.css";
import HeadTitle from "../components/headTitle";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-grey">
      <HeadTitle title="Visit Bondowoso - Information Center for Tourist" />
      <div className="m-auto h-full bg-white sm:w-full md:w-1/2 lg:w-1/3 relative pb-24">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

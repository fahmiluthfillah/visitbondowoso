import "../styles/globals.css";
import * as Icon from "react-feather";
import Container from "../components/container";
import Link from "next/link";
import HeadTitle from "../components/headTitle";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-grey">
      <HeadTitle title="Visit Bondowoso - Information Center for Tourist" />
      <div className="m-auto h-full bg-white sm:w-full md:w-1/2 lg:w-1/3 relative pb-24">
        <Component {...pageProps} />
        <div className="fixed bottom-0 w-full md:w-1/2 lg:w-1/3 bg-white border border-gray py-5 rounded-tl-3xl rounded-tr-3xl">
          <Container>
            <div className="flex justify-around">
              <Link href="/">
                <div className="cursor-pointer hover:text-green-600">
                  <Icon.Home size={20} className="w-full" />
                  <p className="text-xs">Home</p>
                </div>
              </Link>
              <Link href="/">
                <div className="cursor-pointer hover:text-green-600">
                  <Icon.Search size={20} className="w-full" />
                  <p className="text-xs">Search</p>
                </div>
              </Link>
              <Link href="/">
                <div className="cursor-pointer hover:text-green-600">
                  <Icon.Map size={20} className="w-full" />
                  <p className="text-xs">Map</p>
                </div>
              </Link>
              <Link href="/">
                <div className="cursor-pointer hover:text-green-600">
                  <Icon.Image size={20} className="w-full" />
                  <p className="text-xs">Gallery</p>
                </div>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default MyApp;

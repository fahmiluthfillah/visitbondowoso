import Image from "next/image";
import HeadTitle from "../components/headTitle";
import Container from "../components/container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Waterfall from "../public/img/waterfall.svg";
import Mountain from "../public/img/mountain.svg";
import People from "../public/img/people.svg";
import Pools from "../public/img/swimming-pool.svg";
import Culinary from "../public/img/culinary.svg";
import Outdoors from "../public/img/outdoors.svg";
import Coffee from "../public/img/coffee.svg";
import Hotel from "../public/img/hotel.svg";
import Guide from "../public/img/tour-guide.svg";
import Transport from "../public/img/public-transport.svg";
import Atm from "../public/img/atm.svg";
import Rental from "../public/img/rent.svg";
import TitleBar from "../components/titleBar";

export default function Home() {
  return (
    <div className="h-auto">
      <TitleBar titleBar="Visit Bondowoso" />
      {/* <div className="bg-green-600 h-15 w-full">
        <Container>
          <div className="py-4">
            <p className="text-white text-lg text-center font-bold">
              Visit Bondowoso
            </p>
          </div>
        </Container>
      </div> */}
      {/* <div className="pt-5 px-3 relative mx-auto text-gray-600">
        <input
          className="w-full order-2 border-gray-300 bg-gray-100 h-10 px-5 pr-16 text-sm rounded-lg focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-5 mr-4"
        ></button>
      </div> */}
      <div className="relative">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          showThumbs={false}
        >
          <div>
            <Image
              src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
              layout="fill"
              className="object-cover w-full h-full"
              alt="photo-1"
            />
          </div>
          <div>
            <Image
              src="https://wisatalengkap.com/wp-content/uploads/2017/04/Situs-Megalitikum-Bondowoso.jpg"
              layout="fill"
              className="object-cover w-full h-full"
              alt="photo-2"
            />
          </div>
          <div>
            <Image
              src="https://i0.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/IMG_0991-1.jpg?resize=768%2C512&ssl=1"
              layout="fill"
              className="object-cover w-full h-full"
              alt="photo-3"
            />
          </div>
          <div>
            <Image
              src="https://i2.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/2-GLINGSERAN.jpg?w=900&ssl=1"
              layout="fill"
              className="object-cover w-full h-full"
              alt="photo-4"
            />
          </div>
          <div>
            <Image
              src="https://i2.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/IMG_6604.jpg?w=900&ssl=1"
              layout="fill"
              className="object-cover w-full h-full"
              alt="photo-5"
            />
          </div>
          <div>
            <img
              src="https://i0.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/4-kawah-gunung-ijen.jpg?resize=768%2C512&ssl=1"
              layout="fill"
              className="object-cover w-full h-full"
              alt="photo-6"
            />
          </div>
        </Carousel>
      </div>
      <div className="pt-5">
        <Container>
          <h3 className="text-lg font-bold">Menu</h3>
          <div className="content-center grid overflow-hidden grid-cols-4 grid-rows-2 gap-2 grid-flow-row pt-3">
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Waterfall}
                    className="w-10 h-10 object-cover"
                    alt="waterfall"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Waterfall
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Mountain}
                    className="w-10 h-10 object-cover"
                    alt="mountain"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Mountain
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={People}
                    className="w-10 h-10 object-cover"
                    alt="cultural-site"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Cultural Site
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Pools}
                    className="w-10 h-10 object-cover"
                    alt="pools"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">Pools</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Culinary}
                    className="w-10 h-10 object-cover"
                    alt="culinary"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Culinary
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Outdoors}
                    className="w-10 h-10 object-cover"
                    alt="outdoors"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Tourist Village
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Coffee}
                    className="w-10 h-10 object-cover"
                    alt="coffee-2"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Coffee Shop
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Hotel}
                    className="w-10 h-10 object-cover"
                    alt="=hotel"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">Hotel</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Guide}
                    className="w-10 h-10 object-cover"
                    alt="guide"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Tour Guide
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Transport}
                    className="w-10 h-10 object-cover"
                    alt="transport"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Transportation
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Atm}
                    className="w-10 h-10 object-cover"
                    alt="atm"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">ATM</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <Image
                    src={Rental}
                    className="w-10 h-10 object-cover"
                    alt="rental"
                  />
                </div>
                <p className="text-sm text-center text-gray-500 mt-2">Rental</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-5">
        <Container>
          <h3 className="text-xl font-bold">Favorite Place</h3>
        </Container>
        <div className="overflow-x-scroll w-full flex scrollbar-hide py-3">
          <div className="px-5 flex space-x-5">
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <Image
                  src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                  alt="fav-1"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Mountain</span>
                <h4 className="text-xl mt-1 font-bold">Kawah Wurung</h4>
                {/* <p className="mt-2 text-blue-500">Rp. 5.000</p> */}
              </div>
            </div>
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <Image
                  src="https://i0.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/IMG_0991-1.jpg?resize=768%2C512&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                  alt="fav-2"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Waterfall</span>
                <h4 className="text-xl mt-1 font-bold">Tancak Kembar</h4>
                {/* <p className="mt-2 text-blue-500">Rp. 6.000</p> */}
              </div>
            </div>
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <Image
                  src="https://i2.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/IMG_6604.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                  alt="fav-3"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Tourist Village</span>
                <h4 className="text-xl mt-1 font-bold">Almour</h4>
                {/* <p className="mt-2 text-blue-500">Rp. 5.000</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <Container>
          <h3 className="text-xl font-bold">Article</h3>
          <div className="mt-4">
            <div className="flex items-center space-x-5 pb-6">
              <div className="relative w-40 h-28">
                <Image
                  src="https://primaitech.id/blog/wp-content/uploads/2021/09/Primaitech-panasbumi-scaled.jpg"
                  layout="fill"
                  className="object-cover rounded-xl w-full h-full"
                  alt="article-1"
                />
              </div>
              <div>
                <h4 className="text-xl mt-1 font-bold">Title</h4>
                <span className="text-xs text-gray-500">Category</span>
                <p className="text-sm text-gray-500">Lorem Ipsum Dolor Amet</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-5 pb-6">
              <div className="relative w-40 h-28">
                <Image
                  src="https://primaitech.id/blog/wp-content/uploads/2021/09/Primaitech-panasbumi-scaled.jpg"
                  layout="fill"
                  className="object-cover rounded-xl w-full h-full"
                  alt="article-2"
                />
              </div>
              <div>
                <h4 className="text-xl mt-1 font-bold">Title</h4>
                <span className="text-xs text-gray-500">Category</span>
                <p className="text-sm text-gray-500">Lorem Ipsum Dolor Amet</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-5 pb-6">
              <div className="relative w-40 h-28">
                <Image
                  src="https://primaitech.id/blog/wp-content/uploads/2021/09/Primaitech-panasbumi-scaled.jpg"
                  layout="fill"
                  className="object-cover rounded-xl w-full h-full"
                  alt="article-3"
                />
              </div>
              <div>
                <h4 className="text-xl mt-1 font-bold">Title</h4>
                <span className="text-xs text-gray-500">Category</span>
                <p className="text-sm text-gray-500">Lorem Ipsum Dolor Amet</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-5 pb-6">
              <div className="relative w-40 h-28">
                <Image
                  src="https://primaitech.id/blog/wp-content/uploads/2021/09/Primaitech-panasbumi-scaled.jpg"
                  layout="fill"
                  className="object-cover rounded-xl w-full h-full"
                  alt="article-4"
                />
              </div>
              <div>
                <h4 className="text-xl mt-1 font-bold">Title</h4>
                <span className="text-xs text-gray-500">Category</span>
                <p className="text-sm text-gray-500">Lorem Ipsum Dolor Amet</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-5 pb-6">
              <div className="relative w-40 h-28">
                <Image
                  src="https://primaitech.id/blog/wp-content/uploads/2021/09/Primaitech-panasbumi-scaled.jpg"
                  layout="fill"
                  className="object-cover rounded-xl w-full h-full"
                  alt="article-5"
                />
              </div>
              <div>
                <h4 className="text-xl mt-1 font-bold">Title</h4>
                <span className="text-xs text-gray-500">Category</span>
                <p className="text-sm text-gray-500">Lorem Ipsum Dolor Amet</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-5">
        <div className="flex flex-col text-center w-full">
          <div className="grid h-20 card bg-base-300 rounded-box border-t-2 border-b-2 place-items-center">
            <p className="text-gray-500 text-sm">
              Copyright © 2022 Visit Bondowoso. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

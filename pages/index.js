import Image from "next/image";
import HeadTitle from "../components/headTitle";
import Container from "../components/container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Waterfall from "../public/img/waterfall.png";

export default function Home() {
  return (
    <div className="h-auto">
      <HeadTitle title="Visit Bondowoso" />
      <div className="bg-green-600 h-15 w-full">
        <Container>
          <div className="py-4">
            <p className="text-white text-lg text-center font-bold">
              Visit Bondowoso
            </p>
          </div>
        </Container>
      </div>
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
      <div className="">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          showThumbs={false}
        >
          <div>
            <img
              src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
              alt="image1"
            />
            {/* <p className="legend">Image 1</p> */}
          </div>
          <div>
            <img
              src="https://wisatalengkap.com/wp-content/uploads/2017/04/Situs-Megalitikum-Bondowoso.jpg"
              alt="image2"
            />
            {/* <p className="legend">Image 2</p> */}
          </div>
          <div>
            <img
              src="https://i0.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/IMG_0991-1.jpg?resize=768%2C512&ssl=1"
              alt="image3"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://i2.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/2-GLINGSERAN.jpg?w=900&ssl=1"
              alt="image4"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://i2.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/IMG_6604.jpg?w=900&ssl=1"
              alt="image5"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://i0.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/4-kawah-gunung-ijen.jpg?resize=768%2C512&ssl=1"
              alt="image6"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
        </Carousel>
      </div>
      <div className="pt-3">
        <Container>
          <div className="content-center grid overflow-hidden grid-cols-4 grid-rows-2 gap-2 grid-flow-row">
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img
                    className="w-full h-full object-cover"
                    src="img/waterfall.png"
                  />
                </div>
                <p className="text-sm text-center mt-2">Waterfall</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/mountain.png" />
                </div>
                <p className="text-sm text-center mt-2">Mountain</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/people.png" />
                </div>
                <p className="text-sm text-center mt-2">Cultural Site</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/swimming-pool.png" />
                </div>
                <p className="text-sm text-center mt-2">Pools</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/culinary.png" />
                </div>
                <p className="text-sm text-center mt-2">Culinary</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/outdoors.png" />
                </div>
                <p className="text-sm text-center mt-2">Tourist Village</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/coffee-cup.png" />
                </div>
                <p className="text-sm text-center mt-2">Coffee Shop</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/hotel.png" />
                </div>
                <p className="text-sm text-center mt-2">Hotel</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/tour-guide.png" />
                </div>
                <p className="text-sm text-center mt-2">Tour Guide</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/public-transport.png" />
                </div>
                <p className="text-sm text-center mt-2">Transportation</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="img/atm-machine.png" />
                </div>
                <p className="text-sm text-center mt-2">ATM</p>
              </div>
            </div>
            {/* <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1572497285282_scale_500x500_85_color_not_blur_fTQ.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Spesial Promo</p>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
      <div className="pt-5">
        <Container>
          <h3 className="text-2xl font-bold">Favorite Place</h3>
        </Container>
        <div className="overflow-x-scroll w-full flex scrollbar-hide py-3">
          <div className="px-5 flex space-x-5">
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <img
                  src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
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
                <img
                  src="https://i0.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/IMG_0991-1.jpg?resize=768%2C512&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
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
                <img
                  src="https://i2.wp.com/bondowosotourism.com/wp-content/uploads/2019/11/IMG_6604.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
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
      <div className="mt-5">
        <Container>
          <h3 className="text-2xl font-bold">Article</h3>
          <div className="mt-4">
            <div className="flex items-center space-x-5 pb-6">
              <div className="relative w-40 h-28">
                <img
                  src="https://primaitech.id/blog/wp-content/uploads/2021/09/Primaitech-panasbumi-scaled.jpg"
                  layout="fill"
                  className="object-cover rounded-xl w-full h-full"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500">Category</span>
                <h4 className="text-xl mt-1 font-bold">Description</h4>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-5 pb-6">
              <div className="relative w-40 h-28">
                <img
                  src="https://primaitech.id/blog/wp-content/uploads/2021/09/Primaitech-panasbumi-scaled.jpg"
                  layout="fill"
                  className="object-cover rounded-xl w-full h-full"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500">Category</span>
                <h4 className="text-xl mt-1 font-bold">Description</h4>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-5 pb-6">
              <div className="relative w-40 h-28">
                <img
                  src="https://primaitech.id/blog/wp-content/uploads/2021/09/Primaitech-panasbumi-scaled.jpg"
                  layout="fill"
                  className="object-cover rounded-xl w-full h-full"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500">Category</span>
                <h4 className="text-xl mt-1 font-bold">Description</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

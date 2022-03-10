import Image from "next/image";
import Container from "../../components/container";
import HeadTitle from "../../components/headTitle";
import TitleBar from "../../components/titleBar";

import Waterfall from "../../public/img/waterfall.svg";
import Mountain from "../../public/img/mountain.svg";
import Pools from "../../public/img/swimming-pool.svg";
import Guide from "../../public/img/tour-guide.svg";

export default function Category() {
  return (
    <div className="h-auto">
      <TitleBar titleBar="Menu" />
      <div className="pt-5">
        <Container>List Menu by Category</Container>

        <div className="content-center grid overflow-hidden grid-cols-2 grid-rows-2 gap-2 grid-flow-row">
          <div className="box bg-grey rounded-lg m-3 h-52 flex items-center justify-center text-black">
            <div>
              <div className="w-32 h-32 relative m-auto mt-2">
                <Image
                  src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                  alt="fav-1"
                />
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">Mountain</p>
              <p className="text-sm text-center text-gray-500 mt-2 mb-1">
                Kawah Wurung
              </p>
            </div>
          </div>
          <div className="box bg-grey rounded-lg m-3 h-52 flex items-center justify-center text-black">
            <div>
              <div className="w-32 h-32 relative m-auto mt-2">
                <Image
                  src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                  alt="fav-1"
                />
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">Mountain</p>
              <p className="text-sm text-center text-gray-500 mt-2 mb-1">
                Kawah Wurung
              </p>
            </div>
          </div>
          <div className="box bg-grey rounded-lg m-3 h-52 flex items-center justify-center text-black">
            <div>
              <div className="w-32 h-32 relative m-auto mt-2">
                <Image
                  src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                  alt="fav-1"
                />
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">Mountain</p>
              <p className="text-sm text-center text-gray-500 mt-2 mb-1">
                Kawah Wurung
              </p>
            </div>
          </div>
          <div className="box bg-grey rounded-lg m-3 h-52 flex items-center justify-center text-black">
            <div>
              <div className="w-32 h-32 relative m-auto mt-2">
                <Image
                  src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                  alt="fav-1"
                />
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">Mountain</p>
              <p className="text-sm text-center text-gray-500 mt-2 mb-1">
                Kawah Wurung
              </p>
            </div>
          </div>
          <div className="box bg-grey rounded-lg m-3 h-52 flex items-center justify-center text-black">
            <div>
              <div className="w-32 h-32 relative m-auto mt-2">
                <Image
                  src="https://i1.wp.com/bondowosotourism.com/wp-content/uploads/2019/10/3.jpg?w=900&ssl=1"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                  alt="fav-1"
                />
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">Mountain</p>
              <p className="text-sm text-center text-gray-500 mt-2 mb-1">
                Kawah Wurung
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

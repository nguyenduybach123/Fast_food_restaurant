import Image from "next/image";
import categoryImage from "../../assets/images/home/Category_1.png"
import footerImage from '../../assets/images/home/footer.jpg'

import CategoriesSwiper from "./components/category/CategoriesSwiper";
import { DeliveryQuickly } from "./components/DeliveryQuickly";
import { GuideSection } from "./components/guide/GuideSection";
import { ProductCardSwiper } from "../components/card/ProductCardSwiper";
import { ProductCardFeatured } from "../components/card/ProductCardFeatured";

export default function Home() {
  return (
    <div className='relative h-full font-semibold py-4'>
      <div className='flex flex-col'>
        <div className="relative flex items-center bg-[#fccc21] py-16 overflow-hidden">
          <div className="flex-auto w-[500px] px-5 py-6">
            <DeliveryQuickly />
          </div>
          <div className="flex-auto w-80">
            <Image className="absolute -bottom-10" src={categoryImage} alt="" width={400} height={500} />
          </div>
        </div>
        <div className="md:px-16 lg:px-32">
          <CategoriesSwiper />
        </div>
        <div className='px-16 mt-16 bg-gradient-to-b from-[#FDEDCA] via-[#FFF] to-[#FFF]'>
          <GuideSection />
        </div>
        <div className="mt-16 px-16">
          <ProductCardSwiper />
          <div className='px-32 mt-16'>
            <ProductCardFeatured />
            <ProductCardFeatured isReverse/>
            <ProductCardFeatured />
          </div>
          <div className="flex justify-center items-center" style={{backgroundImage: `url(${footerImage})`}}>
            <div className="text-center">
              <h1 className="font-semibold text-4xl my-5">Are you ready to order with the best deals?</h1>
              <button className="px-3 py-2 bg-orange-500 text-white rounded-md shadow-lg">PROCEED TO ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

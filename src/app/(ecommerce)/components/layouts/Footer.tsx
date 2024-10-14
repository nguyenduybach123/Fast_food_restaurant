import Image from "next/image";
import Link from "next/link";
import paypalImage from "@/assets/images/home/paypal.png";

const Footer = () => {
    return (
        <div className="px-4 md:p-4 lg:p-8 bg-white text-sm">
            {/* TOP */}
            <div className="flex flex-col md:flex-row">
                {/* LEFT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <div className="text-2xl tracking-wide">CORN</div>
                    </Link>
                    <p>3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United States</p>
                    <span className="font-semibold">hello@lama.dev</span>
                    <span className="font-semibold">+1 234 567 890</span>
                    <div className="flex gap-6">
                        {/* <Image src='/facebook.png' alt='' width={16} height={16} />
            <Image src='/instagram.png' alt='' width={16} height={16} />
            <Image src='/youtube.png' alt='' width={16} height={16} />
            <Image src='/pinterest.png' alt='' width={16} height={16} />
            <Image src='/x.png' alt='' width={16} height={16} /> */}
                    </div>
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex w-1/2 justify-between px-24">
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">COMPANY</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="/">About Us</Link>
                            <Link href="/">Careers</Link>
                            <Link href="/">Affiliates</Link>
                            <Link href="/">Blog</Link>
                            <Link href="/">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">SHOP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="/">About Us</Link>
                            <Link href="/">Careers</Link>
                            <Link href="/">Affiliates</Link>
                            <Link href="/">Blog</Link>
                            <Link href="/">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">HELP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="/">About Us</Link>
                            <Link href="/">Careers</Link>
                            <Link href="/">Affiliates</Link>
                            <Link href="/">Blog</Link>
                            <Link href="/">Contact Us</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                    <p>Be the first to get the latest news about trends, promotions, and much more !</p>
                    <div className="flex">
                        <input type="text" placeholder="Email address" className="p-4  w-3/4" />
                        <button className="w-1/4 bg-[#F35C7A] text-white">JOIN</button>
                    </div>
                    <span className="font-semibold">Secure Payments</span>
                    <div className="flex justify-between">
                        <Image src={paypalImage} alt="" width={40} height={20} />
                        <Image src={paypalImage} alt="" width={40} height={20} />
                        <Image src={paypalImage} alt="" width={40} height={20} />
                        <Image src={paypalImage} alt="" width={40} height={20} />
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">2024 Stuff Shop</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-500 mr-4">Language</span>
                        <span className="font-medium">United States | English</span>
                    </div>
                    <div className="">
                        <span className="text-gray-500 mr-4">Currency</span>
                        <span className="font-medium">$ USD</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

import Image from "next/image";
import { montserrat  } from "../app/font";
 import Link from "next/link";
export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      style={{ padding: "0.75rem 2rem" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="MAITRI LAB GROWN DIAMONDS"
            width={180}
            height={60}
            className="object-contain"
          />
        </div>
        {/* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5299235357347!2d73.06852637489824!3d19.346194043435215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a317ec3ec6eb%3A0x53a949c8dffe6b18!2sGreen%20Park%20Residency!5e0!3m2!1sen!2sin!4v1763557392644!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/> */}

        {/* Buttons */}
        <div className="flex items-center" style={{ gap: "1rem" }}>
          <Link href="/product" >
          
          </Link>
          <button
            className={`text-[20px] font-medium border-2 border-black rounded hover:bg-gray-50 transition-colors  duration-200 ${montserrat.className}`}
            style={{ padding: "0.625rem 2rem" }}
          >
            SIGN IN
          </button>
          <Link href="/about" >
          <button
            className={`text-[20px] font-medium bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200 ${montserrat.className} `}
            style={{ padding: "0.625rem 2rem" }}
          >
            GET ACCESS
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

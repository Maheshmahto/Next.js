// import "./globals.css";
// import { Cormorant_Garamond } from "next/font/google";
// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", ], // choose any weights you need
// });

// export const metadata = {
//   title: "MAITRI - Future of Diamonds",
//   description: "Lab-grown sustainable diamonds with environmental stewardship",
// };

// import { ReactNode } from "react";

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en" className={cormorant.className}>
//       <head>
//         {/* <link rel="preload" as="image" href="./logo_icon.png" /> */}
//         <link rel="icon" type="image/png" href="/logo_icon.png" />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
import "./globals.css";
import { ReactNode } from "react";
// import { cormorant } from "./font"; // <- from fonts.ts
import Header from "@/components/Header";
export const metadata = {
  title: "MAITRI - Future of Diamonds",
  description: "Lab-grown sustainable diamonds with environmental stewardship",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo_icon.png" />
      </head>
      <body>
        <header>My Header</header>
        {/* <Header/> */}
        {children}
        <footer>My Footer</footer>
      </body>
    </html>
  );
}

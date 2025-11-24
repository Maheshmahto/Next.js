import { Cormorant_Garamond, Montserrat } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500","300","400"], // you said font-weight: 500
});
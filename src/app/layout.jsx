import { Grandstander, Roboto } from "next/font/google";
import MomentumScroll from "@/components/momentum";
import "./globals.css";

const grandstander = Grandstander({
  subsets: ["latin"],
  variable: "--font-grandstander",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Abraham Pérez Portafolio",
  description: "Portafolio de diseño UI/UX de Abraham Pérez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${grandstander.variable} bg-portfolio-white overflow-x-hidden`}
      >
        {children}
        {/* <MomentumScroll>{children}</MomentumScroll> */}
      </body>
    </html>
  );
}

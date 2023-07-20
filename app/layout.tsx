import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const plus_jakarta_sans = localFont({
  src: [
    {
      path: "../public/fonts/PlusJakartaSans-ExtraLight.ttf",
      weight: "200",
      style: "extra-light",
    },
    {
      path: "../public/fonts/PlusJakartaSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../public/fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
      style: "extra-bold",
    },
  ],
  variable: "--font-jakarta",
});

const open_sans = localFont({
  src: [
    {
      path: "../public/fonts/OpenSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/OpenSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/OpenSans-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../public/fonts/OpenSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/OpenSans-ExtraBold.ttf",
      weight: "800",
      style: "extra-bold",
    },
  ],
  variable: "--font-open",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col w-full h-full scroll-smooth bg-semiblack ${plus_jakarta_sans.variable} ${open_sans.variable}}`}
      >
        {children}
      </body>
    </html>
  );
}

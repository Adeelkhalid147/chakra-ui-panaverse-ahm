"use client"
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
 import Header from "./components/header";
 import Footer from "./components/footer";
import Banner from "./components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
{/* <Header/> */}
<Banner/>
{/* <Footer/> */}
    </div>
  );
}

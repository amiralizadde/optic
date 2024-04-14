import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Text from "@/components/modules/Text";
import Banner from "@/components/templates/index/banner/Banner";
import Customer from "@/components/templates/index/customer/Customer";
import Products from "@/components/templates/index/products/Products";
import Promote from "@/components/templates/index/promote/Promote";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <Banner />
      <Promote />
      <Products /> 
      <Customer />

    </>
  );
}

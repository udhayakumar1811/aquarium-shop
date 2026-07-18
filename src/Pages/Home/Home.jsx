import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import ProductCard from "../../components/ProductCard/ProductCard";
import TopSelling from "../../components/TopSelling/TopSelling";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import Featured from "../../components/Featured/Featured";
import VideoSection from "../../components/VideoSection/VideoSection";
import Gallery from "../../components/Gallery/Gallery";
import Blog from "../../components/Blog/Blog";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ProductCard />
      <TopSelling />
      <OfferBanner />
      <Featured />
      <VideoSection />
      <Gallery />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
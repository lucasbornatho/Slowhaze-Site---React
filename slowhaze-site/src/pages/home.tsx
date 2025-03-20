import Header from "../components/header";
import Footer from "../components/footer";
import CarouselHome from "../components/carouselhome";

function Home() {
  return (
    <div>
        <Header />
        <CarouselHome />
        <CarouselHome />
        <Footer />
    </div>
  );
}

export default Home;
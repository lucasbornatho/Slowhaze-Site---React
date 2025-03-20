import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

function CarouselHome () {
    return (
        <Carousel   swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
            <img src='/slowhaze-logo.png' alt='slowhazelogo'></img>
            <img src='/slowhaze-logo.png' alt='slowhazelogo'></img>
            <img src='/slowhaze-logo.png' alt='slowhazelogo'></img>
            <img src='/slowhaze-logo.png' alt='slowhazelogo'></img>
        </Carousel>
    )
}

export default CarouselHome
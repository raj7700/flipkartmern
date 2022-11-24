
import { bannerData } from "../../../constants/navdata";
import { styled ,Box} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { height } from "@mui/system";
const Image = styled('img')(
    {
        width: '100 %',
        height: '280px'
    }
)
const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Banner = () =>
{
    return(
        <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
    containerClass="carousel-container"
   removeArrowOnDeviceType={["tablet", "mobile"]}
 
 dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
            {bannerData.map(data => (
                <Image src={data.url} />
            ))}
        </Carousel>
    )
}

export default Banner;
import Carousel from "./Carousel";
import FilmList from "./FilmList";
import TicketBooking from "./TicketBooking";
import News from "./News";
import TicketBookingInput from "./TicketBookingInput/TicketBookingInput";

const Home = () => {
   return (
      <>
         <Carousel />
         {/* <TicketBookingInput /> */}
         <FilmList />
         <TicketBooking />
         <News />
      </>
   );
};

export default Home;

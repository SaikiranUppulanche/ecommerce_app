import { Button } from "react-bootstrap";
import VenueList from "../components/VenueList";

const HomePage = () => {
  return (
    <>
      <div className="bg-secondary fs-1 text-center text-white fw-bold p-5 ">
        <Button variant="outline-info text-white">
          <h3 className=" m-3">Get our latest Album</h3>{" "}
        </Button>
      </div>
      <div>
        <h2 className="text-center fs-1 fw-bold p-5">Tours</h2>
        <VenueList />
      </div>
    </>
  );
};

export default HomePage;

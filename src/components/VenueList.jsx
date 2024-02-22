import { Button } from "react-bootstrap";

const list = [
  {
    date: "JUL 16",
    city: "Detroit,MI",
    venue: "DTE Energy Music Theatre",
  },
  {
    date: "JUL 19",
    city: "Toronto,ON",
    venue: "Budweiser Stage",
  },
  {
    date: "JUL 22",
    city: "Bristow,VA",
    venue: "Jiggy Lube Live",
  },
  {
    date: "JUL 29",
    city: "Pheonix,AZ",
    venue: "Ak-chin Pavilion",
  },
  {
    date: "aug 2",
    city: "Las Vegas,NV",
    venue: "T-Mobile Arena",
  },
];

const VenueList = () => {
  return (
    <ul className="container w-50 mb-5  text-start">
      {list.map((venue) => (
        <li
          key={Math.random()}
          className="row justify-content-between border-bottom border-black border-1 pt-2 pb-2"
        >
          <div className="col-2 ">{venue.date.toLocaleUpperCase()}</div>
          <div className="col-3 ">{venue.city.toLocaleUpperCase()}</div>
          <div className="col me-1 ">{venue.venue.toLocaleUpperCase()}</div>
          <Button variant="info " className="text-light fw-bold col-2">
            Buy Tickets
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default VenueList;

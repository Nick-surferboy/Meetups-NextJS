//const { default: MeetupList } = require("@/components/meetups/MeetupList");

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Saveh_Bazaar.jpg",
    address: "Some address 5, 12345",
    description: " First meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Saveh_Bazaar.jpg",
    address: "Some address 6, 99999",
    description: " Second meetup",
  },
];

function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;

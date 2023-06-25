//const { default: MeetupList } = require("@/components/meetups/MeetupList");
//"use client";
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

async function HomePage() {
  //The await getData() helps to pre render the data
  //data fetching
  const loadedMeetups = await getData();
  //console.log(loadedMeetups)
  return <MeetupList meetups={loadedMeetups} />;
}

export async function getData() {
  //const data = fetch(DUMMY_MEETUPS)
  return DUMMY_MEETUPS;
}

export const revalidate = 30 ; //updated after loading
export default HomePage;

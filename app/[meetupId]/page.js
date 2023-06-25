import MeetupDetail from "@/components/meetups/MeetupDetail";

async function DetailsPage({ params }) {

  const data = await getData();
  //console.log(params.meetupId);

  return <MeetupDetail image={data.image} title={data.title} address={data.address} description={data.description} />;
}

//pre-render the dynamic routes
// export async function generateStaticParams(){

//   //const meetups = await fetch ('')
//   return null;
// }

export async function getData() {
  //const data = fetch(DUMMY_MEETUPS)

  return {
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Saveh_Bazaar.jpg",
    title: "Title",
    address: "address 2",
    description: "",
  };
}




export default DetailsPage;

import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

async function DetailsPage({ params }) {

  const data = await getData(params);

  return <MeetupDetail image={data.image} title={data.title} address={data.address} description={data.description} />;
}



export async function getData(props) {
  //const data = fetch(DUMMY_MEETUPS)
  const uri = "mongodb+srv://nick:wILMmOy92IRgDikM@cluster0.xembtas.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  console.log(props.meetupId)

 // const meetup = await meetupsCollection.find().toArray() ;
  client.close() ;
  return {
        id: "m1",
        title: "A first meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Saveh_Bazaar.jpg",
        address: "Some address 5, 12345",
        description: " First meetup",
      } ;
}




export default DetailsPage;

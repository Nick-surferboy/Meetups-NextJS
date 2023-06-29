import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

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

  const meetup = await meetupsCollection.findOne({_id: new ObjectId(props.meetupId)}) ;
  client.close() ;

  
  return meetup ;
}




export default DetailsPage;

// api/new-meetup
import { MongoClient } from "mongodb";


export async function POST(req, res) {
  const uri = "mongodb+srv://nick:wILMmOy92IRgDikM@cluster0.xembtas.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  if (req.method === "POST") {
    const data = req.body;

    console.log("Dataaaa "+data);
    const result = await meetupsCollection.insertOne(data);
    
    console.log(result);
  }
  client.close();
  console.log("exit");
  //res.status(201).json({ message: "Meetup inserted" });

}

//export default handler;

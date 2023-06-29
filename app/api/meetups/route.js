import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  const uri = "mongodb+srv://nick:wILMmOy92IRgDikM@cluster0.xembtas.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
console.log('GET')


  client.close();

  return NextResponse.json({  meetups : meetups }); 
  
}

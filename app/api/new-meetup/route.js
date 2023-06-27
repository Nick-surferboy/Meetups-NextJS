// api/new-meetup
import { MongoClient } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req, res) {
  const uri = "mongodb+srv://nick:wILMmOy92IRgDikM@cluster0.xembtas.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  if (req.method === "POST") {
    const data = await req.json();
    const result = await meetupsCollection.insertOne(data);
  }
  client.close();
}

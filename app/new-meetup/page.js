"use client";
import NewMeetupForm from "/components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupdata) {

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupdata),
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log("Status " +response.status)
   const data = await response.json();
   // console.log(data);
   //response.
    console.log('ici')
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

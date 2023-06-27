"use client";
import NewMeetupForm from "/components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupdata) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupdata),
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      const data = await response.json() 
      return data ;
   
    } catch (err) {
      console.log("Error   " + err.message);
    }
   
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

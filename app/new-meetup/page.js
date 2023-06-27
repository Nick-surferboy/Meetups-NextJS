"use client";
import NewMeetupForm from "/components/meetups/NewMeetupForm";
import { useRouter } from "next/navigation";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupdata) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupdata),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log("Error   " + err.message);
    }
    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

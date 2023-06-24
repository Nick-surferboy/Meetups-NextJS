'use client'
import { useRouter, useSearchParams } from "next/navigation";

function DetailsPage() {
  const router = useRouter();
  const id = useSearchParams() ;
  //console.log(id) ;
  return <h1> Details Page</h1>;
}

export default DetailsPage;

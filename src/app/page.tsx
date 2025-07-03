"use client"
import React,{useEffect} from 'react'
import {redirect} from "next/navigation"

export default function (){
    redirect("/home")
}

// export const Page = () => {
//  const router =useRouter()
//  useEffect(()=>{
//   router.push("home")
//  })
 
// }

 
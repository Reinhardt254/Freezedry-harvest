import { NextResponse } from "next/server";

export async function POST(){
   try{
      const data = await prismadb.post();
   }catch(error){
      console.log(error)
   }

   return NextResponse.json("Success") 
}

export async function GET(){

}

export async function PATCH(){
   
}

export async function DELETE(){

}

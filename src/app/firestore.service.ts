import { Injectable } from '@angular/core';
import { collection, doc, getDoc,query, where, getDocs,onSnapshot} from "firebase/firestore";
import {db} from "./firebase-config";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  
 

constructor( ) {
  }

async postLikeComment(){
  const docRef = doc(db, "postLikeComment",'202303');
  const docSnap = await getDoc(docRef);


    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  
    return docSnap.data();
  }

   getAllUsers = async (callback:any) => {
    const q = query(collection(db, "profile"));
    const querySnapshot = await getDocs(q);
  
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
  
    const size = querySnapshot.size;
  
    callback(size);  
  };
  
  
 
    
  
   
   
   
   

   unsub = onSnapshot(doc(db, "notificationCollection", "4jLiBngNT1Gv1nkRXMhx"), (doc) => {
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(source, " data: ", doc.data());
  });

}
 
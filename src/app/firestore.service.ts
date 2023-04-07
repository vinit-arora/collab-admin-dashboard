import { Injectable } from '@angular/core';
import { collection, query, where, getDocs, orderBy, limit, DocumentData, QuerySnapshot, QueryDocumentSnapshot, setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  

  userCount: number = 0;

  constructor() {
  }

  async postLikeComment() {
    const q = query(collection(db, "postLikeComment"));
    const querySnapshot = await getDocs(q);
    return QuerySnapshot.length;
  }
  async userWithMaximumPost() {

    const q = query(collection(db, "profile"));
    const querySnapshot = await getDocs(q);
    let maxPostUser = querySnapshot.docs[0]
    // const maxPostUser:QueryDocumentSnapshot<DocumentData>;
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      if (doc.data()['postCount'] > maxPostUser.data()['postCount']) {
        maxPostUser = doc;
      }
    }
    );
    return maxPostUser.data();

  }


  getUserCount = async (callback: any) => {
    let x = this.getAllUsers();
    this.userCount = (await x).length
    callback(this.userCount);
  }

  getAllUsers = async () => {
    const q = query(collection(db, "profile"));
    const querySnapshot = await getDocs(q);

    const userList: {}[] = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      userList.push(doc.data());
    });


    return userList;
  };

  getTopPosts = async () => {
    const q = query(collection(db, "posts"), orderBy("likes", "desc"), limit(5));
    const querySnapshot = await getDocs(q);

    const postList: {}[] = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      postList.push(doc.data());
    });


    return postList;
  };


  getpostLikeComment = async () => {
    const q = query(collection(db, "notifications"));
    const querySnapshot = await getDocs(q);

    const notificationsList: {}[] = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      notificationsList.push(doc.data());
    });

    return notificationsList;
  }

  postsByAdmin = async () => {
    const q = query(collection(db, "posts"), where("isAdmin", "==", "true"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  }

  addEvent = async (form: any) => {
    const docRef = await addDoc(collection(db, "events"), form);
    console.log("Document written with ID: ", docRef.id);
    // await setDoc(doc(db, "events",""),form);
  }

  fetchEvents=async()=> {
    const q = query(collection(db, "events"));
    const querySnapshot = await getDocs(q);

    const eventsList: {}[] = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      eventsList.push(doc.data());
    });

    return eventsList;
  }

}

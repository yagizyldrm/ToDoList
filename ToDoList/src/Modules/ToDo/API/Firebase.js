import database from '@react-native-firebase/database';
import { getCurrentUser } from "../../Auth";

export const addNote = async item =>{
    const noteItemThumbnail ={
        taskname: item.taskname,
        endDate: item.endDate,
    };
    const userId = getCurrentUser().uid;

    const newNoteItemThumbnailRef = database()
        .ref(`/noteItemThumbnailList/${userId}`)
        .push();
    
    await newNoteItemThumbnailRef.set(noteItemThumbnail);

    const itemKey = newNoteItemThumbnailRef.key;
    database()
        .ref(`/noteItemList/${itemKey}`)
        .set(item);
}







/*
export const getData = () => {
    database()
        .ref('/todo')
        //Reading data: realtime 
        .on('value', snapshot => {
            console.log('Realtime database: ', snapshot.val());
        });

    return [];
}*/

import database from '@react-native-firebase/database'

export const getData = () => {
    database()
        .ref('/todo')
        //Reading data: realtime 
        .on('value', snapshot => {
            console.log('Realtime database: ', snapshot.val());
        });
    /*
    //Reading data: One-time read
    .once('value')
    .then(snapshot => {
      console.log('User data: ', snapshot.val());
    });
    */

    return [];
}
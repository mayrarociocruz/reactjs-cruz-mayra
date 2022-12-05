import { collection, query, where, getDocs,  doc, getDoc, orderBy } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export const firestoreFetch  = async (idCategory) => {
        let busqueda;

        if (idCategory){
            busqueda = query(collection(db, "products"), where("categoryId", "==", idCategory));
        }else{
            busqueda = query(collection(db, "products"), orderBy('articulo'));
        }

        const querySnapshot = await getDocs(busqueda);
        const datatFromFirestore= querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }));
        console.log(datatFromFirestore)
        return datatFromFirestore
        

}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {id: idItem,
            ...docSnap.data()}
        } else {
            console.log("ID inexistente");
        }
    };
import { useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const AutoDelete = () => {
  useEffect(() => {
    const deleteOldMessages = async () => {
      const now = new Date();
      const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000); // 24 hours ago

      const q = query(
        collection(db, "messages"),
        where("createdAt", "<=", twentyFourHoursAgo)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        console.log(`Document with ID ${doc.id} successfully deleted.`);
      });
    };

    // Run once on component mount, then every 24 hours (86400000 ms)
    deleteOldMessages();
    const interval = setInterval(deleteOldMessages, 86400000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return null; // This component doesn't render anything
};

export default AutoDelete;

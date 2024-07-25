import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { SocialPlatform } from "@/utils/SocialPlatforms";

type UserProfile = {
  userId: string;
  displayName: string;
  email: string;
};
type Link = {
  userId: string;
  platform: string;
  url: string;
};

const addLink = async (
  userId: string,
  platform: SocialPlatform,
  url: string
) => {
  try {
    const linkRef = doc(db, "addedLinks", userId);
    await setDoc(linkRef, {
      userId,
      platform,
      url,
    });
    console.log("Link added successfully!");
  } catch (error) {
    console.error("Error adding link: ", error);
  }
};

const fetchLinks = async (userId: string): Promise<Link | null> => {
  try {
    const linkRef = doc(db, "addedLinks", userId);
    const docSnap = await getDoc(linkRef);

    if (docSnap.exists()) {
      console.log("Link data:", docSnap.data());
      return docSnap.data() as Link;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching link: ", error);
    return null;
  }
};

const addProfile = async (
  userId: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  try {
    const profileRef = doc(db, "user", userId);
    await setDoc(profileRef, {
      userId,
      firstName,
      lastName,
      email,
    });
    console.log("Profile added successfully!");
  } catch (error) {
    console.error("Error adding profile: ", error);
  }
};
const fetchUserProfile = async (
  userId: string
): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, "userProfiles", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data() as UserProfile;
    } else {
      console.log("No such user profile!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export { addLink, addProfile, fetchUserProfile, fetchLinks };

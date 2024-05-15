import jwt from "jsonwebtoken";
import { headers } from "next/headers";


const checkIsLoggedIn = () => {
    const headersList = headers();
    const token = headersList.get("Authorization");
    if (!token) {
      throw new Error("You are not authorized!");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      throw new Error("You are not authorized!");
    }
    return decoded;
}

export default checkIsLoggedIn;
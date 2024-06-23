import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.BD_URI;
    await connect(DB_URI);
}

export default dbConnect;
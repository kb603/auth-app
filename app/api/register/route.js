import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../../../models/user";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });

    console.log(name, email, hashedPassword);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering user" },
      { status: 500 }
    );
  }
}

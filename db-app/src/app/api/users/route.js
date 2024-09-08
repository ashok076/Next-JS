import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//get all users 
export  async function GET() {

    try {
        const users = await prisma.user.findMany()
        if (!users) {
            return NextResponse.json({ message: 'Users Not found' })
        }
        return NextResponse.json(users)

    }
    catch (err) {
        return NextResponse.json({ err })
    }


}
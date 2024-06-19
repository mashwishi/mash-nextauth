import md5 from 'md5';
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {

    //get the body message and return the message also do validation if the message is empty throw error
    try {
        const { message } = await req.json();
        if (!message) {
            throw new Error('Message is required');
        }
        return NextResponse.json({
            data: {
                message,
            },
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                status: "error",
                message: error.message || "Internal Server Error",
            },
            { status: 500 }
        );
    }
}

import { startProject } from "@/lib/apiUrls";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const response = await startProject({
            data: body,
        });
        return NextResponse.json({
            success: true,
            message: response,
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
}
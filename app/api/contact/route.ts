import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Option 1: Use Resend (recommended for production)
        // To enable, install resend: npm install resend
        // Then set RESEND_API_KEY in your .env.local
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'Portfolio Contact <onboarding@resend.dev>',
        //   to: 'asing508@asu.edu',
        //   subject: `Portfolio Contact: ${subject}`,
        //   html: `
        //     <h2>New Contact Form Submission</h2>
        //     <p><strong>Name:</strong> ${name}</p>
        //     <p><strong>Email:</strong> ${email}</p>
        //     <p><strong>Subject:</strong> ${subject}</p>
        //     <p><strong>Message:</strong></p>
        //     <p>${message}</p>
        //   `,
        // });

        // Option 2: Log the message (for development/demo)
        console.log("📧 New Contact Form Submission:");
        console.log("--------------------------------");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        console.log("--------------------------------");

        // For now, we'll just return success
        // The message is logged to the console where your dev server is running
        return NextResponse.json(
            {
                success: true,
                message: "Message received! Check your terminal for the submission."
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}

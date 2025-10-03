import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getAuth } from "@/lib/firebase/firebase-admin";
import type { GenericError } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json<{ email: string }>();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const link = await getAuth().generatePasswordResetLink(email);

    const { data, error: resendError } = await resend.emails.send({
      from: "Priorityfy - Jump Source <onboarding@jumpsource.io>",
      to: [email],
      subject: "Redefinir sua Senha",
      html: `
        <p>Olá,</p>
        <p>Você solicitou a redefinição da sua senha. Clique no link abaixo para definir uma nova senha:</p>
        <p><a href="${link}">Redefinir Senha</a></p>
        <p>Se você não solicitou a redefinição da senha, ignore este e-mail.</p>
        <p>Obrigado,</p>
        <p>Sua Equipe de Aplicativos</p>
      `,
    });

    if (resendError) {
      console.error("Error sending email with Resend:", resendError);
      return NextResponse.json(
        {
          message: "Password reset link generated, but failed to send email.",
          resendError: resendError.message,
        },
        { status: 500 }
      );
    }

    console.log(
      `Password reset link generated and email sent to ${email} (Resend ID: ${data.id})`
    );

    return NextResponse.json(
      { message: "Password reset email sent successfully. Check your inbox." },
      { status: 200 }
    );
  } catch (err) {
    const error = err as GenericError;
    console.error("Error in password reset process:", error.code);

    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

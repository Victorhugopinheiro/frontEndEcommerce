import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import prisma from "./prisma";
import Google from "next-auth/providers/google";



export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        })

    ],
    secret: process.env.JWT_SECRET as string,
    callbacks: {
        async session({ session, token, user }) {
            session.user = { ...session.user, id: user.id } as {
                id: string,
                name: string,
                email: string
            }

            return session
        }
    }
}
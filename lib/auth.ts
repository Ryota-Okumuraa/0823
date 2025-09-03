import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
<<<<<<< HEAD
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "./db";
=======
>>>>>>> eb3468aa4f4b5558040343d8ade5db3a25099e9d

export const authOptions: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
<<<<<<< HEAD
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        })
    ],
    adapter: PrismaAdapter(db),
=======
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
>>>>>>> eb3468aa4f4b5558040343d8ade5db3a25099e9d
    pages: {
        signIn: "/login",
    },
    callbacks: {
<<<<<<< HEAD
        async jwt({ token, user }) {
            if (user) {
                return { ...token, id: user.id }
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
=======
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub;
>>>>>>> eb3468aa4f4b5558040343d8ade5db3a25099e9d
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
            }

            return session
        }
<<<<<<< HEAD
    },
    session: {
        strategy: "jwt",
=======
>>>>>>> eb3468aa4f4b5558040343d8ade5db3a25099e9d
    }
} 
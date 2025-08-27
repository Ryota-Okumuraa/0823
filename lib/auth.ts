import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        // Google({})
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.image;
            }

            return session
        }
    }
} 
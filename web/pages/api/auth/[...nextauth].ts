import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  // debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  session: {strategy: "jwt"},
  providers: [
    CredentialsProvider({
      id: "domain-login",
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const users = [
          {id: "1", email: "user1@example.com", password: "password1"},
          {id: "2", email: "user2@example.com", password: "password2"},
          {id: "3", email: "abc@abc", password: "123"},
        ]
        const user = users.find(user => user.email === credentials?.email);

        if (user && user?.password === credentials?.password) {
            return {id: user.id, name: user.email, email: user.email};
        } else {
            return null;
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({token, user, account, profile}) {
      // 注意: トークンをログ出力してはダメです。
      if (account) {
        if (user) {
          token.user = user
        }
        token.accessToken = account.access_token
      }
      return token;
    },
    async session({session, token}) {
      token.accessToken
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        }
      }
    }
  },
  adapter: PrismaAdapter(prisma),
  
};

export default NextAuth(authOptions);

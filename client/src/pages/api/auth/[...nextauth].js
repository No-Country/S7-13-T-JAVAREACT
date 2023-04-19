import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId:
        "261095716159-ub919ugtff0uc92lg202gfm90u1f14l4.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GithubProvider({
      clientId: "7d7f8f4c2e607380e580",
      clientSecret: "4930a75fe897e90f43d354e2480186ab693e9846",
      callbackUrl: "http://localhost:3000/onboarding",
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const payload = {
          email,
          password,
        };
        const res = await fetch(
          "https://portacode.up.railway.app/api/v1/auth/authenticate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ",
            },
            body: JSON.stringify(payload),
          }
        );

        const user = await res.json();
        console.log(user);
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      session.name = token.user.name;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};
export default NextAuth(authOptions);

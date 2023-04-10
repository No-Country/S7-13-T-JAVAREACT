import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: "7d7f8f4c2e607380e580",
      clientSecret: "4930a75fe897e90f43d354e2480186ab693e9846",
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const payload = {
          email: email, // make sure this field is mapped correctly
          password: password,
        };
        const res = await fetch(
          "https://portacode2-production.up.railway.app/api/v1/auth/authenticate",
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
};
export default NextAuth(authOptions);

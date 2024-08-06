import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // input by user
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Replace this with your own logic to verify the user's credentials
        const user = { id: 1, username: "john_doe" }; // Dummy user for demonstration

        // Check if the provided credentials match the dummy user's credentials
        if (
          credentials.username === user.username &&
          credentials.password === "password"
        ) {
          // If successful, return the user object without the password
          return user;
        } else {
          // If the credentials don't match, return null
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
  session: {
    jwt: true, // Use JSON Web Tokens for session management
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },
});

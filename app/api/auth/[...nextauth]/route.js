import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Replace this with your own logic to verify the user's credentials
        const users = [
          {
            id: 1,
            username: "John",
            password: "123",
            role: "manager",
          },
          {
            id: 2,
            username: "Emily",
            password: "456",
          },
          {
            id: 3,
            username: "Tom",
            password: "789",
          },
        ];

        const user = users.find(
          (user) =>
            user.username === credentials.username &&
            user.password === credentials.password
        );

        if (user) {
          console.log(`User found: ${JSON.stringify(user)}`);
          return user;
        } else {
          console.log("user not found");
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Customize the sign-in page path
  },
  session: {
    jwt: true, // Use JSON Web Tokens for session handling
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.role = token.role;

      return session;
    },
  },

  secret: process.env.NEXT_AUTH_SECRET,
};

// Exporting the NextAuth handler for both GET and POST methods
const handler = (req, res) => NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };

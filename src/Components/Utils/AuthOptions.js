import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Email address" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          // post data is server
          const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/login', { email, password });
          return loginResponse.data.user;
        } catch (err) {
          return false;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        console.log(account);
        if (user) {
          const { name, email, image } = user
          // post data in server
          const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/providerLogin', { name, email, image, phone: "", streetAddress: "", city: "" });
          console.log("login res", loginResponse);
          return user
        }
        return false
      } catch (err) {
        return false
      }
    }
  }
};

// const isAllowedToSignIn = true
//       if (isAllowedToSignIn) {
//         return '/unauthorized'
//       } else {
//         // Return false to display a default error message
//         return false
//         // Or you can return a URL to redirect to:
//         // return '/unauthorized'
//       }
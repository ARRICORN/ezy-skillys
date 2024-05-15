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
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        // post data
        console.log(email, password);
      }
    })

    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Username", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize(credentials, req) {
    //     // database operations
    //     return {
    //       id: "1",
    //       Email: credentials.email,
    //     };
    //   },
    // }),
  ],
  callbacks: {
    async signIn({ user, account }) {

      try {
        console.log(account);
        if (user) {
          const { name, email, image } = user
          // if (account.provider === 'google' || account.provider === 'github') {
          //   const res = await fetch('http://locahost:4000/api/user', {
          //     body: JSON.stringify(user),
          //     method: 'POST',
          //     headers: {
          //       "Content-Type": "application/json"
          //     }
          //   })
          // }
        }
        return user
      } catch (err) {
        return false
      }


      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return '/unauthorized'
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  }
};


//previous code of hridoy paul ->
// import axios from "axios";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google";


// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "email", type: "email", placeholder: "Email address" },
//         password: { label: "password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         try {
//           const { email, password } = credentials;
//           // post data is server
//           const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/login', { email, password });
//           return loginResponse.data.user;
//         } catch (err) {
//           return false;
//         }
//       }
//     })
//   ],
//   secret: process.env.JWT_SECRET_KEY,
//   jwt: {
//     secret: process.env.JWT_SECRET_KEY,
//     maxAge: 7 * 24 * 60 * 60, // 7 days
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 7 * 24 * 60 * 60, // 7 days
//   },
//   callbacks: {
//     async session({ session, token }) {
//       session.user = token.user;
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },
    // async signIn({ user, account }) {
    //   console.log(user);
    //   try {
    //     if (user) {
    //       const { name, email, image } = user
    //       // post data in server
    //       const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/providerLogin', { name, email, image, phone: "", streetAddress: "", city: "" });
    //       console.log("login res", loginResponse);
    //       return user
    //     }
    //     return false
    //   } catch (err) {
    //     return false
    //   }
    // }
//   }
// };
//---------------------------------------------------------------
//with out google provider

// import axios from "axios";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google";
// import crypto from "crypto";

// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "email", type: "email", placeholder: "Email address" },
//         password: { label: "password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         try {
//           const { email, password } = credentials;
//           const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/login', { email, password });
//           const user = {
//             id: loginResponse.data.user.id,
//             email: loginResponse.data.user.email,
//             name: loginResponse.data.user.name,
//             token: loginResponse.data.token
//           }
//           console.log(user, "user from loginResponse")
//           return user;
//         } catch (err) {
//           return null;
//         }
//       }
//     })
//   ],
//   secret: process.env.JWT_SECRET_KEY,
//   jwt: {
//     secret: process.env.JWT_SECRET_KEY,
//     maxAge: 7 * 24 * 60 * 60, // 7 days
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 7 * 24 * 60 * 60, // 7 days
//     generateSessionToken: () => {
//       // Use crypto for a fallback token generation
//       return crypto.randomBytes(32).toString('hex');
//     },
//   },
//   callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       console.log("SignIn callback called with user:", user);
//       return true;
//     },
//     async jwt({ token, user, account }) {
//       // console.log("JWT callback - user:", user);
//       // console.log("JWT callback - account:", account);
//       if (user) {
//         token.user = user;
//         token.token= user.token;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//     //  console.log(session, "session from callback session")
//       session.user = token.user;
//       session.token = token.token;
//       //console.log(session.token,"token from session token")
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/login',
//   },
//   cookies: {
//     sessionToken: {
//       name: 'token',
//       options: {
//         httpOnly: true,
//         sameSite: 'lax',
//         path: '/',
//         secure: process.env.NODE_ENV === 'production',
//       },
//     },
//   },
// };

//with google provider
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import crypto from "crypto";

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
          const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/api/login', { email, password });
          const user = {
            id: loginResponse.data.user.id,
            email: loginResponse.data.user.email,
            name: loginResponse.data.user.name,
            token: loginResponse.data.token
          }
          console.log(user, "user from loginResponse")
          return user;
        } catch (err) {
          return null;
        }
      }
    })
  ],
  secret: process.env.JWT_SECRET_KEY,
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    generateSessionToken: () => {
      return crypto.randomBytes(32).toString('hex');
    },
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("SignIn callback called with user:", user);
      if (account.provider === 'google') {
        try {
          const { name, email, image } = user;
          const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/api/providerLogin', { 
            name, 
            email, 
            image, 
            phone: "", 
            streetAddress: "", 
            city: "" 
          });
         
          const token = loginResponse.data.token
          user.token = token;
          return true;
        } catch (err) {
          console.error("Error in Google sign in:", err);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.user = user;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.token = token.token;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  cookies: {
    sessionToken: {
      name: 'token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
};
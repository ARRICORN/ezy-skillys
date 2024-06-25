import checkIsLoggedIn from "./middlewares/checkIsLoggedIn";

const { NextResponse } = require("next/server");

// This function can be marked `async` if using `await` inside
const middleware = (request) => {
  //TODO: have to get cookies
  const user = true;

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};

export default middleware;

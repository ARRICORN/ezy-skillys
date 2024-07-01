const { NextResponse } = require("next/server");

// This function can be marked `async` if using `await` inside
const middleware = async (request, response) => {
  let cookie = request.cookies.get("token");
  // Check if the token is valid (this is a placeholder; replace with your own logic)
  const isAuthenticated = Boolean(cookie);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};

export default middleware;

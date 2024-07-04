import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Define your protected route
  const protectedRoutes = [
    "/dashboard",
    "/dashboard/reviews",
    "/dashboard/leaderboard",
    "/dashboard/my-courses",
    "/dashboard/add-course",
    "/dashboard/my-students-board",
    "/dashboard/view-profile",
    "/dashboard/user-review",
    "/dashboard/user-purchased-courses",
    "/payment",
    "/payment-success",
  ];

  // Check if the user is authenticated
  const isAuthenticated = req.cookies.get("token");

  // If the route is protected and the user is not authenticated, redirect to the login page
  if (
    protectedRoutes.some((route) => pathname.startsWith(route)) &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/payment/:path*", "/payment-success/:path*"],
};

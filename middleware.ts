// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   "/sign-in(.*)",
//   "/courses/(.*)",
//   "/",
//   "/course-preview/(.*)",
//   "/sign-up(.*)",
// ]);

// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoute(request)) {
//     auth().protect();
//   }
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };


import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that do not require authentication
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/courses/(.*)", // Allow public access to course listings
  "/", // Home page
  "/course-preview/(.*)", // Allow public access to course previews
  "/sign-up(.*)", // Sign-up routes
]);

export default clerkMiddleware((auth, request) => {
  // Protect all routes that are not public
  if (!isPublicRoute(request)) {
    auth().protect(); // Redirects to the sign-in page if not authenticated
  }
});

// Configuration for the middleware's matcher
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

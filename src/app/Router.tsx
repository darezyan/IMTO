import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import OnboardingLayout from "@/components/layouts/OnboardingLayout";

// Onboarding pages (lazy loaded)
const SignIn          = lazy(() => import("@/Pages/Onboarding/SignIn"));
const ForgotPassword  = lazy(() => import("@/Pages/Onboarding/ForgotPassword"));
const EnterOtp        = lazy(() => import("@/Pages/Onboarding/Otp"));
const PasswordChanged = lazy(() => import("@/Pages/Onboarding/PasswordChanged"));

export const router = createBrowserRouter([
  // All onboarding pages share OnboardingLayout
  // The layout renders the left panel + logo, each page renders its own form
  {
    element: <OnboardingLayout />,
    children: [
      { path: "/",                 element: <Suspense fallback={null}><SignIn /></Suspense> },
      { path: "/forgot-password",  element: <Suspense fallback={null}><ForgotPassword /></Suspense> },
      { path: "/enter-otp",        element: <Suspense fallback={null}><EnterOtp /></Suspense> },
      { path: "/password-changed", element: <Suspense fallback={null}><PasswordChanged /></Suspense> },
    ],
  },

  // Catch-all
  { path: "*", element: <Navigate to="/" replace /> },
]);
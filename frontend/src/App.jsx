import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as loginAction } from "./pages/LoginPage";
import { action as signupAction } from "./pages/SignupPage";
import { loader as dashboardLoader } from "./pages/DashboardPage";
import { action as sendAction } from "./pages/SendPage";
import { action as updateAction } from "./pages/ProfilePage";
import SendPage from "./pages/SendPage";
import { LoadingTxt } from "./utils/LoadingTxt";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

const router = createBrowserRouter([
	{
		path: "/",
		action: loginAction,
		element: (
			<Suspense fallback={LoadingTxt}>
				<LoginPage />
			</Suspense>
		),
	},
	{
		path: "/signup",
		action: signupAction,
		element: (
			<Suspense fallback={LoadingTxt}>
				<SignupPage />
			</Suspense>
		),
	},
	{
		path: "/dashboard",
		loader: dashboardLoader,
		element: (
			<Suspense fallback={LoadingTxt}>
				<DashboardPage />
			</Suspense>
		),
	},
	{
		path: "/send",
		action: sendAction,
		element: (
			<Suspense fallback={LoadingTxt}>
				<SendPage />
			</Suspense>
		),
	},
	{
		path: "/profile",
		action: updateAction,
		element: (
			<Suspense fallback={LoadingTxt}>
				<ProfilePage />
			</Suspense>
		),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

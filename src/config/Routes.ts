import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/Signup";
import FAQs from "@/pages/landing/FAQs";
import Home from "@/pages/landing/Home";
import LandingLayout from "@/pages/landing/LandingLayout";
import Reviews from "@/pages/landing/Reviews";
import AiHome from "@/pages/main/app/AiHome";
import Chat from "@/pages/main/app/Chat";
import MainLayout from "@/pages/main/MainLayout";
import NotFound from "@/pages/NotFound";


export const routes = [
    {
      path: "/ai",
      Component: MainLayout,
      children: [
        {
          path: "home",
          index: true,
          Component: AiHome,
        },
        {
          path: "chat",
          Component: Chat,
          
        },
      ],
    },
    {
      path: "/",
      Component: LandingLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "FAQs",
          Component: FAQs,
        },
        {
          path: "reviews",
          Component: Reviews,
        },
      ],
    },
    {
      path: "auth",
      children: [
        {
          index: true,
          path: "login",
          Component: Login,
        },
        {
          path: "signup",
          Component: SignUp,
        },
      ],
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]
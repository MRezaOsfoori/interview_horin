import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import "./globals.css";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import { Toaster } from "@/components/ui/toaster";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;

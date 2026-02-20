import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { loginSchema, type LoginFormValues } from "@/lib/Validations/login.schema";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);
      // TODO: replace with your auth call e.g. await authService.login(values)
      console.log(values);
      navigate("/dashboard");
    } catch (error) {
      form.setError("root", {
        message: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Sign in to Squad IMTO
        </h1>
        <p className="text-sm text-gray-500">Enter your email to get started.</p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          {/* Root error */}
          {form.formState.errors.root && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              {form.formState.errors.root.message}
            </p>
          )}

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="E.g @Example.com"
                    autoComplete="email"
                    className="h-12 rounded-lg border-gray-300 placeholder:text-gray-400 focus-visible:ring-green-500 focus-visible:border-green-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      autoComplete="current-password"
                      className="h-12 rounded-lg border-gray-300 placeholder:text-gray-400 pr-12 focus-visible:ring-green-500 focus-visible:border-green-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold text-base transition-colors disabled:opacity-60"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          {/* Forgot password */}
          <p className="text-sm text-gray-600 text-center">
            Forgot your password?{" "}
            <Link
              to="/forgot-password"
              className="font-semibold text-gray-900 underline underline-offset-2 hover:text-green-700 transition-colors"
            >
              Reset your Password
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
}
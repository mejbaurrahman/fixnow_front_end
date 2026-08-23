import { LoginForm } from "../_components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

// import Link from "next/link";
// import { Wrench } from "lucide-react";

// import { LoginForm } from "@/components/forms/login-form";

// export default function LoginPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-10">
//       <div className="w-full max-w-md">
//         <div className="mb-8 text-center">
//           <Link href="/" className="inline-flex items-center gap-2">
//             <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
//               <Wrench className="size-5" />
//             </div>

//             <span className="text-2xl font-bold">
//               FixIt<span className="text-primary">Now</span>
//             </span>
//           </Link>

//           <h1 className="mt-8 text-2xl font-bold">Welcome back</h1>

//           <p className="mt-2 text-sm text-muted-foreground">
//             Sign in to continue to FixItNow
//           </p>
//         </div>

//         <LoginForm />

//         <p className="mt-6 text-center text-sm text-muted-foreground">
//           Don't have an account?{" "}
//           <Link
//             href="/auth/register"
//             className="font-medium text-primary hover:underline"
//           >
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

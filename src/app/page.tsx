import LoginForm from "@/components/LoginForm";

export default function Home() {
console.log("oi")

  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
       <LoginForm />
      </div>
    </main>
  );
}

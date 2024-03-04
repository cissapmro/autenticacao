"use client"
import { signIn } from "next-auth/react";


export default function LoginForm() {
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            login: formData.get("login"),
            senha: formData.get('senha'),
        };
        console.log(data);

        signIn("credencials", {
            ...data,
            callbackUrl: "/dashboard",
          
        });
    }

return(
<form 
  onSubmit={login}  className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
<h2 className="font-bold text-xl mb-3">Faça seu login</h2>
<input 
type="text"
name="login"
placeholder="login"
className="input input-primary w-full"
/>
<input 
type="password"
name="senha"
placeholder="Senha"
className="input input-primary w-full"
/>
<button type="submit" className="btn btn-primary w-full">
    Login
</button>
</form>
)
}


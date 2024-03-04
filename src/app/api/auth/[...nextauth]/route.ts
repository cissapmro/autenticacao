import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const handler = NextAuth({
 //   pages: {
   //    signIn: "/",
 //  },
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          login: { label: "Login", type: "text" },
          senha: { label: "Senha", type: "password" },
        },
        async authorize(credentials) {
            if(!credentials) {
                return null;
            }
                if(
                    credentials.login === "cissa" && 
                    credentials.senha === "123"
                    ) {
                   return {
                    id: "1",
                    name: "Alcirleia de Souza Barbosa",
                    login: "cissa"
                   }
                }

              /* try{
                    const response = await fetch(`${process.env.NEXTAUTH_URL}/login/api/controle_usuario.php`, {
                    method: "POST",
                    body: JSON.stringify({
                        identifier: credentials.login,
                        password: credentials.senha,
                    }),
                    headers: { "Content-Type": "applicatiion/json" },
                    });
                    if (response.status !== 200) return null;
                    const dados = await response.json();
                    if(!dados.jwt || !dados.user) return null;
                    cookies().set("jwt", dados.jwt);
                    return {
                        id: dados.usuario.id,
                        name: dados.usuario.nome,
                        login: dados.usuario.login,
                       
                    };
                } catch (e) {
                   return null; 
                }*/
                return null
            },
      }),
  ],
});

export { handler as GET, handler as POST };



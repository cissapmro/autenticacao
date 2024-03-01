
import { redirect } from "next/navigation";
import ButtonLogout from "./ButtonLogout";
import { getServerSession } from "next-auth";


export default async function Page() {

  //  const router = useRouter();
    const session = await getServerSession();

    console.log(session);
  
   if (!session) {
    redirect("/")
    //  router.push("/");

   }

    return(
        <div>
            oi
        <div>Ola, {session?.user?.name} </div>
            <div>Dashboard</div>
          <ButtonLogout />
        </div>
    );
};


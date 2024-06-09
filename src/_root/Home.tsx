import HomePageCard from "@/components/shared/HomePageCard";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { logoutAccount, signInAccount } from "@/lib/api";
import { useHomePageData } from "@/lib/react-query/queriesAndMutations";
import { useEffect, useState } from "react";

const Home = () => {
  
const { logout } = useUserContext();
  const { mutateAsync: getData, isLoading: isPending } = useHomePageData();
  const [homePageData, sethomePageData] = useState<any>([]);

  useEffect(() => {
    
    const getHomePageData = async () => {
      const res = await getData();
      if (!res) {
        throw Error;
      }
      sethomePageData(res.data);
    };

    getHomePageData();
  }, []);

  

  return (
    <div className="w-full bg-secondary">
      <Button onClick={logout}>logout</Button>
      <div className="mx-auto max-w-[1128px] pt-[64px] px-4 ">
        <p className="h3-bold mb-6">Coffe Script</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {homePageData ? (
            homePageData.map((item: any) => {
              return <HomePageCard data={item} key={item.pk} />;
            })
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

import MyInfoCard from "./MyInfoCard";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <main className="main relative w-full bg-zinc-900 text-white flex flex-col md:flex-row px-5 lg:px-12 gap-5">
      <MyInfoCard />
      <MainContainer />
    </main>
  );
};

export default Body;

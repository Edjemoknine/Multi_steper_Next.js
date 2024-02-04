import Image from "next/image";
import Steper from "./components/Steper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-72">
      <div className="absolute  inset-0 flex-row top-[50px] flex justify-center">
        <div className="shap1 opacity-50 relative rounded-[999px] h-[400px] w-[400px]  bg-teal-500 blur-3xl"></div>
        <div className="shap2 opacity-50  relative rounded-[999px] h-[400px] w-[400px] bg-sky-500 blur-3xl"></div>
        <div className="shap3 opacity-50  relative rounded-[999px] h-[400px] w-[400px] bg-rose-500 blur-3xl"></div>
      </div>
      <Steper />
    </main>
  );
}

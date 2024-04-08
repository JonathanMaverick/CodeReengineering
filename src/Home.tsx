import { FaGithub } from "react-icons/fa";
import SideBar from "./SideBar";

export default function Home() {
  return (
    <>
<div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            🏠 Home
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_14.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">🏠 Bad Code Smell - Code Reengineering
                </h1>
                <p className="font-bold text-white">
                2602070383 - Bernard  Bereness 
                </p>
                <p className="font-bold text-white">
                2602070396 - Jonathan Maverick
                </p>
                <p className="text-white text-justify">
                Bad code smells tidak selalu berarti bahwa kode tersebut secara teknis salah atau tidak berfungsi. Sebaliknya, mereka mengacu pada tanda-tanda yang menunjukkan adanya potensi perbaikan atau refactoring yang dapat meningkatkan struktur, kualitas, atau keterbacaan kode. Dengan mendeteksi dan memperbaiki bad code smells, pengembang dapat mengurangi kompleksitas, meningkatkan pemahaman terhadap kode, dan memudahkan pemeliharaan di masa mendatang.
                </p>
                <p className="text-white text-justify">
"Bad code smell" adalah istilah dalam pengembangan perangkat lunak yang digunakan untuk menggambarkan tanda-tanda atau indikasi adanya potensi masalah dalam kode sumber. Istilah ini berasal dari konsep bahwa jika ada bau di dalam kode, kemungkinan besar ada masalah di sana yang perlu diperbaiki.
                </p>
                <a href="https://github.com/JonathanMaverick/CodeReengineering"> <FaGithub size={40} color="white" /> </a>
                <p className="text-2xl font-bold text-white">
                D6665 - REZKI YUNANDA, S.Kom., M.Kom
                </p>
            </div>
        </div>
      </div>
    </>
  );
}

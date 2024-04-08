import SideBar from "../SideBar";


export default function ChangePreventers() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center text-start flex-col overflow-y-scroll ">
                <div className="text-white flex items-start w-full p-2">
                🛡️ Change Preventers
                </div>
                <img src="https://www.notion.so/images/page-cover/woodcuts_1.jpg" className="w-full max-h-48 object-cover" alt="" />
                <div className="w-4/6 p-10 flex flex-col gap-6">
                    <h1 className="text-5xl text-white font-bold">🛡️ Change Preventers</h1>
                    <p className="text-white">Istilah "Change Preventers" mengacu pada pola desain atau struktur kode yang secara tidak langsung menghambat kemampuan untuk melakukan perubahan di masa mendatang dengan mudah dan aman. Dengan kata lain, change preventer adalah bagian dari kode yang menyulitkan atau bahkan mencegah pengembang untuk membuat perubahan yang diperlukan tanpa menyebabkan efek samping atau kerusakan pada sistem secara keseluruhan.</p> 
                    <div className="gap-2 flex flex-col">
                        <a href="/change-preventers/divergent-change" className="text-white flex gap-2">🔄 <p className="underline">Divergent Change</p></a>
                        <a href="/change-preventers/shotgun-surgery" className="text-white flex gap-2">🔫 <p className="underline">Shotgun Surgery</p></a>
                        <a href="/change-preventers/hierarcy" className="text-white flex gap-2">👨‍👧‍👧 <p className="underline">Parallel Inheritance Hierarchies</p></a>
                    </div>
                </div>
        </div>
      </div>
      </>
    );
  }
  
  
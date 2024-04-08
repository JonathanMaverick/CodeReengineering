import SideBar from "../SideBar";


export default function Dispensables() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center text-start flex-col overflow-y-scroll ">
                <div className="text-white flex items-start w-full p-2">
                💣 Dispensables
                </div>
                <img src="https://www.notion.so/images/page-cover/woodcuts_5.jpg" className="w-full max-h-48 object-cover" alt="" />
                <div className="w-4/6 p-10 flex flex-col gap-6">
                    <h1 className="text-5xl text-white font-bold">💣 Dispensables</h1>
                    <p className="text-white">Merujuk pada bagian-bagian kode yang tidak lagi diperlukan atau memberikan nilai tambah dalam sistem, namun tetap ada dalam basis kode. Dengan kata lain, "the dispensables" adalah segmen kode yang sudah tidak relevan atau tidak digunakan dalam fungsionalitas aplikasi, namun masih tersisa dalam basis kode.</p> 
                    <div className="gap-2 flex flex-col">
                        <a href="/dispensables/comment" className="text-white flex gap-2">💬 <p className="underline">Comment</p></a>
                        <a href="/dispensables/duplicate-code" className="text-white flex gap-2">👯 <p className="underline">Duplicate Code</p></a>
                        <a href="/dispensables/lazy-class" className="text-white flex gap-2">🦥 <p className="underline">Lazy Class</p></a>
                        <a href="/dispensables/data-class" className="text-white flex gap-2">📝 <p className="underline">Data Class</p></a>
                        <a href="/dispensables/dead-code" className="text-white flex gap-2">💀 <p className="underline">Dead Code</p></a>
                        <a href="/dispensables/speculative-generality" className="text-white flex gap-2">🧐 <p className="underline">Speculative Generality</p></a>
                    </div>
                </div>
        </div>
      </div>
      </>
    );
  }
  
  
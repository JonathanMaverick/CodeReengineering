import SideBar from "../SideBar";


export default function DeadCode() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            💀 Dead Code
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_8.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">💀 Dead Code</h1>
                <p className="text-white">
                Mengacu pada potongan kode yang tidak pernah dieksekusi dalam program, tetapi masih ada dalam basis kode. Kode ini tidak memberikan kontribusi apa pun terhadap fungsionalitas program dan hanya memenuhi ruang dan membuat kode menjadi lebih sulit dipahami dan dipelihara.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public class Calculator {
        public int add(int a, int b) {
            return a + b;
        }
    
        public int multiply(int a, int b) {
            return a * b;
        }
    
        // Misal: Method tidak pernah dipanggil
        public int subtract(int a, int b) {
            return a - b;
        }
    }    
    `}
</code>
                </pre>
                </div>
                <h1 className="text-2xl text-white font-bold">After:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public class Calculator {
        public int add(int a, int b) {
            return a + b;
        }
    
        public int multiply(int a, int b) {
            return a * b;
        }
    }    
    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Dalam contoh di atas, metode <code>subtract</code> tidak pernah dipanggil dari kode lain dalam program. Itu adalah contoh dari dead code, sehingga kita perlu untuk menghapusnya saja.
                </p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
import SideBar from "../SideBar";


export default function DuplicateCode() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            👯 Duplicate Code
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_9.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">👯 Duplicate Code</h1>
                <p className="text-white">
                Sebuah bad code smell, terjadi ketika terdapat potongan kode yang sama atau mirip yang muncul di berbagai bagian program. Oleh karena itu, penting untuk melakukan refaktorisasi guna mengurangi atau menghilangkan duplikasi kode tersebut agar tidak menyebabkan ketidak-konsistenan.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public class Penjualan {

        public double hitungTotal(double hargaAwal, int jumlahBeli) {
          double total = hargaAwal * jumlahBeli;
          return total;
        }
      
        public double hitungDiskonMember(double total, double hargaAwal, int jumlahBeli) {
          double diskon = total * 0.1;
          double totalSetelahDiskon = total - diskon;
          return totalSetelahDiskon;
        }
      
        public double hitungDiskonNonMember(double total, double hargaAwal, int jumlahBeli) {
          double total = hargaAwal * jumlahBeli; 
          double diskon = total * 0.05;
          double totalSetelahDiskon = total - diskon;
          return totalSetelahDiskon;
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
    public class Penjualan {
        public double hitungTotal(double hargaAwal, int jumlahBeli) {
          double total = hargaAwal * jumlahBeli;
          return total;
        }
      
        public double hitungDiskon(double total, double persentaseDiskon) {
          double diskon = total * persentaseDiskon;
          double totalSetelahDiskon = total - diskon;
          return totalSetelahDiskon;
        }
      
        public double hitungDiskonMember(double total) {
          return hitungDiskon(total, 0.1);
        }
      
        public double hitungDiskonNonMember(double total) {
          return hitungDiskon(total, 0.05);
        }
    }      
    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Disebut sebagai duplicate code, karena pada method hitungDiskonMember dan hitungDiskonNonMember memiliki duplikasi kode, dimana kita bisa mengeluarkan kode-kode yang duplikasi menjadi satu method, yaitu hitungDiskon dimana untuk persentasenya bisa kita lakukan passing.
                </p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
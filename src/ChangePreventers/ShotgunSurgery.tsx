import SideBar from "../SideBar";


export default function ShotgunSurgery() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            🔫 Shotgun Surgery
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_2.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">🔫 Shotgun Surgery</h1>
                <p className="text-white">
                Shotgun Surgery adalah istilah yang digunakan dalam pemrograman untuk menggambarkan situasi di mana perubahan kecil pada kode memerlukan banyak modifikasi di banyak tempat yang berbeda dalam basis kode.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public class PriceIncludeTaxService {
        public void updatePrice(Product p, float newPrice, float tax) {
            if (newPrice < 0) {
                throw new IllegalArgumentException("price must be positive");
            }
            
            if (tax < 0 || tax > 1) {
                throw new IllegalArgumentException("tax must be between 0-1");
            }
            
            p.price = newPrice * (tax+1);
        }
    }
    
    public class PriceService {
        public void updatePrice(Product p, float newPrice) {
            if (newPrice < 0) {
                throw new IllegalArgumentException("price must be positive");
            }
            
            p.price = newPrice;
        }
    }
    
    public class Product {
        public String name;
        public float price;
        
        public Product(String name, float price) {
            this.name = name;
            this.price = price;
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
    public class PriceIncludeTaxService {
        public void updatePrice(Product p, float newPrice, float tax) {
            if (tax < 0 || tax > 1) {
                throw new IllegalArgumentException("tax must be between 0-1");
            }
            
            p.setPrice(newPrice * (tax+1));
        }
    }
    
    public class PriceService {
        public void updatePrice(Product p, float newPrice) {		
            p.setPrice(newPrice);
        }
    }
    
    public class Product {
        private String name;
        private float price;
        
        public Product(String name, float price) {
            this.name = name;
            this.price = price;
        }
        
        public void setName(String name) {
            this.name = name;
        }
        
        public String getName() {
            return name;
        }
        
        public void setPrice(float price) {
            if (price < 0) {
                throw new IllegalArgumentException("price must be positive");
            }
            this.price = price;
        }
        
        public float getPrice() {
            return price;
        }
    }    
    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Dapat dilihat adanya potensi shotgun surgery karena setiap kali ada perubahan dalam perhitungan harga atau perubahan struktur data <code>Product</code>, kita harus melakukan perubahan pada kedua kelas layanan <code>PriceIncludeTaxService</code> dan <code>PriceService.</code>
                </p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
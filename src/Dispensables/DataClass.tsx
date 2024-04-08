import SideBar from "../SideBar";


export default function DataClass() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            📝 Data Class
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_7.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">📝 Data Class</h1>
                <p className="text-white">
                Merujuk pada kelas yang terutama digunakan untuk menyimpan data tanpa banyak logika bisnis atau fungsionalitas tambahan. Data class umumnya hanya terdiri dari atribut-atribut dan getter/setter yang sesuai, tanpa metode atau operasi lain yang kompleks.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public class Product {
        private String name;
        private double price;
    
        public Product(String name, double price) {
            this.name = name;
            this.price = price;
        }
    
        public String getName() {
            return name;
        }
    
        public double getPrice() {
            return price;
        }
    }
    
    public class ShoppingCart {
        private List<Product> items = new ArrayList<>();
    
        public void addItem(Product product) {
            items.add(product);
        }
    
        public double calculateTotal() {
            double total = 0;
            for (Product item : items) {
                total += item.getPrice();
            }
            return total;
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
    public class ShoppingCart {
        private List<String> productNames = new ArrayList<>();
        private List<Double> productPrices = new ArrayList<>();
    
        public void addItem(String name, double price) {
            productNames.add(name);
            productPrices.add(price);
        }
    
        public double calculateTotal() {
            double total = 0;
            for (double price : productPrices) {
                total += price;
            }
            return total;
        }
    }    
    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Potongan code diatas merupakan contoh dari data class, dimana kelas Product hanya memiliki data-data saja tanpa adanya logika atau method-method di dalamnya. Sehingga dari itu kita melakukan refactor dengan menggabungkan data atau atribut yang ada pada kelas Product ke dalam kelas ShoppingCart.
                </p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
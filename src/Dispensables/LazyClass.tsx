import SideBar from "../SideBar";


export default function LazyClass() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            🦥 Lazy Class
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_10.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">🦥 Lazy Class</h1>
                <p className="text-white">
                Salah satu bentuk dari bad code smell yang mengacu pada kelas-kelas dalam kode yang tidak memberikan kontribusi yang cukup signifikan atau fungsionalitas yang memadai dalam sistem. Lazy class mungkin hanya memiliki sedikit metode atau bahkan tidak memiliki metode sama sekali, dan kontribusinya terhadap sistem bisa diabaikan atau diintegrasikan ke dalam kelas-kelas lain yang lebih relevan.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public class ShoppingCart {
        private List<Product> items = new ArrayList<>();
    
        public void add(Product product) {
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
    
    public class Customer {
        private String name;
        private ShoppingCart cart;
    
        public Customer(String name) {
            this.name = name;
        }
    
        public void addToCart(Product product) {
            cart.add(product);
        }
    
        public void setShoppingCart(ShoppingCart cart) {
            this.cart = cart;
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
    public class Customer {
        private String name;
        private List<Product> cart = new ArrayList<>();
    
        public Customer(String name) {
            this.name = name;
        }
    
        public void addToCart(Product product) {
            cart.add(product);
        }
    
        public double calculateTotal() {
            double total = 0;
            for (Product item : cart) {
                total += item.getPrice();
            }
            return total;
        }
    }    
    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Class Customer bersifat lazy class, karena yang method yang dipakai hanya satu, yaitu ‘addToCart’. Maka dari itu, class tersebut bisa dikatakan sebagai lazy class, dimana hanya memiliki satu method yang dipakai, sehingga kita perlu melakukan refactor dengan menggabungkan class ShoppingCart ke dalam class Customer.
                </p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
import SideBar from "../SideBar";


export default function SpeculativeGenerality() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            🧐 Speculative Generality
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_11.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">🧐 Speculative Generality</h1>
                <p className="text-white">
                Mengacu pada praktik menambahkan fungsionalitas, abstraksi, atau struktur yang tidak diperlukan atau digunakan saat ini dalam kode. Ini terjadi ketika pengembang menambahkan fitur atau kompleksitas yang tidak perlu, sering kali karena menduga bahwa fungsionalitas tersebut mungkin dibutuhkan di masa depan tanpa ada bukti yang nyata atau kebutuhan saat ini.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public interface Shape {
        double area();
        double perimeter();
    }
    
    public class Circle implements Shape {
        private double radius;
    
        public Circle(double radius) {
            this.radius = radius;
        }
    
        @Override
        public double area() {
            return Math.PI * radius * radius;
        }
    
        @Override
        public double perimeter() {
            return 2 * Math.PI * radius;
        }
    }
    
    public class Rectangle implements Shape {
        private double width;
        private double height;
    
        public Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }
    
        @Override
        public double area() {
            return width * height;
        }
    
        @Override
        public double perimeter() {
            return 2 * (width + height);
        }
    }
    
    // Ini adalah contoh speculative generality:
    public class Square implements Shape {
        private double side;
    
        public Square(double side) {
            this.side = side;
        }
    
        @Override
        public double area() {
            return side * side;
        }
    
        @Override
        public double perimeter() {
            return 4 * side;
        }
    
        // Misal: Method tidak pernah dipanggil
        public void diagonal() {
            System.out.println("Diagonal of the square is: " + Math.sqrt(2) * side);
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
   public class Square implements Shape {
    private double side;

    public Square(double side) {
        this.side = side;
    }

    @Override
    public double area() {
        return side * side;
    }

    @Override
    public double perimeter() {
        return 4 * side;
    }
}

    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Dalam contoh di atas, kita memiliki antarmuka <code>Shape</code> yang memiliki metode <code>area()</code> dan <code>perimeter()</code>, yang diimplementasikan oleh kelas <code>Circle</code>, <code>Rectangle</code>, dan <code>Square</code>. Namun, pada kelas Square, ada metode <code>diagonal()</code> yang mungkin tidak akan pernah digunakan dalam kode. 
                </p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
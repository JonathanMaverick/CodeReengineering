import SideBar from "../SideBar";


export default function ParallelInheritanceHierarchies() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            👨‍👧‍👧 Parallel Inheritance Hierarchies
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_4.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">👨‍👧‍👧 Parallel Inheritance Hierarchies</h1>
                <p className="text-white">
                Merujuk pada pola desain di mana dua atau lebih hierarki kelas berjalan sejajar satu sama lain, sering kali dengan hubungan yang saling bergantung antara kelas-kelas di masing-masing hierarki. Dalam pola ini, biasanya terdapat dua hierarki kelas yang saling terkait satu sama lain. Ketika salah satu hierarki mengalami perubahan, biasanya yang lain juga perlu disesuaikan. Ini dapat menyebabkan kode yang sulit dipelihara dan meningkatkan ketergantungan antara kelas-kelas.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    class Shape2D {
        void draw() {
            System.out.println("Drawing shape");
        }
    }
    
    class Rectangle extends Shape2D {
        @Override
        void draw() {
            System.out.println("Drawing rectangle");
        }
    }
    
    class Triangle extends Shape2D {
        @Override
        void draw() {
            System.out.println("Drawing triangle");
        }
    }
    
    class AreaCalculator {
        float calculateArea(Shape2D shape) {
            if (shape instanceof Rectangle) {
                Rectangle rectangle = (Rectangle) shape;
                return rectangle.getWidth() * rectangle.getHeight();
            } else if (shape instanceof Triangle) {
                Triangle triangle = (Triangle) shape;
                return triangle.getWidth() * triangle.getHeight() / 2;
            }
            return 0;
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
    interface Shape2D {
        void draw();
        float getWidth();
        float getHeight();
    }
    
    class Rectangle implements Shape2D {
        @Override
        public void draw() {
            System.out.println("Drawing rectangle");
        }
    
        @Override
        public float getWidth() {
    
        }
    
        @Override
        public float getHeight() {
    
        }
    }
    
    class Triangle implements Shape2D {
        @Override
        public void draw() {
            System.out.println("Drawing triangle");
        }
    
        @Override
        public float getWidth() {
    
        }
    
        @Override
        public float getHeight() {
    
        }
    }
    
    class AreaCalculator {
        float calculateArea(Shape2D shape) {
            return shape.getWidth() * shape.getHeight();
        }
    }    
    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Dalam contoh ini, kita memiliki dua hierarki kelas yang berjalan sejajar: satu untuk bentuk geometri (<code>Shape2D, Rectangle, Triangle</code>) dan satu untuk kalkulator area (<code>AreaCalculator</code>). Namun, kedua hierarki kelas ini berhubungan secara langsung, dengan kelas kalkulator area menggunakan instance-of untuk memeriksa jenis bentuk geometri yang diberikan.
                </p>
                
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
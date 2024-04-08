import SideBar from "../SideBar";


export default function Comment() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            💬 Comment
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_6.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">💬 Comment</h1>
                <p className="text-white">
                Penggunaan komentar yang berlebihan, usang, atau tidak relevan dapat menunjukkan adanya masalah dalam desain atau pemahaman kode. Oleh karena itu, penting untuk menggunakan komentar secara bijaksana dan hanya ketika diperlukan, serta menjaga agar kode itu sendiri dapat berbicara dengan jelas dan ekspresif tanpa perlu bantuan komentar.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public class Calculator {
        // Method to add two numbers
        public int add(int a, int b) {
            return a + b;
        }
        
        // Method to subtract two numbers
        public int subtract(int a, int b) {
            return a - b;
        }
        
        // Method to multiply two numbers
        public int multiply(int a, int b) {
            return a * b;
        }
        
        // Method to divide two numbers
        // Returns 0 if division by zero
        public double divide(int a, int b) {
            if (b == 0) {
                // If division by zero, return 0 and print error message
                System.out.println("Error: Division by zero");
                return 0;
            } else {
                return (double) a / b;
            }
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
    
        public int subtract(int a, int b) {
            return a - b;
        }
    
        public int multiply(int a, int b) {
            return a * b;
        }
    
        public double divide(int a, int b) {
            if (b == 0) {
                System.out.println("Error: Division by zero");
                return 0;
            } else {
                return (double) a / b;
            }
        }
    }    
    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Code diatas disebut dengan bad smell Comments, karena hal tersebut tidak diperlukan lagi, karena nama-nama method tersebut telah menggambarkan kegunaan dari method tersebut, sehingga penambahan komentar-komentar di dalamnya tidak diperlukan lagi.
                </p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
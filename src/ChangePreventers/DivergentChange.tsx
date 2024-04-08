import SideBar from "../SideBar";


export default function DivergentChange() {
    return (
      <>
      <div className="flex flex-row h-screen">
        <SideBar />
            <div className="bg-191919 w-full flex items-center flex-col overflow-y-scroll ">
            <div className="text-white flex items-start w-full p-2">
            🔄 Divergent Change
            </div>
            <img src="https://www.notion.so/images/page-cover/woodcuts_3.jpg" className="w-full max-h-48 object-cover" alt="" />
            <div className="w-4/6 p-10 flex flex-col gap-6">
                <h1 className="text-5xl text-white font-bold">🔄 Divergent Change</h1>
                <p className="text-white">
                Mirip dengan Shotgun Surgery adalah salah satu jenis "bad code smell" yang mengindikasikan bahwa sebuah kelas atau modul sering mengalami perubahan karena alasan yang berbeda-beda atau terlalu banyak tanggung jawab yang dimilikinya.
                </p>
                <h1 className="text-2xl text-white font-bold">Before:</h1>
                <div className="bg-202020 text-white">
                <pre>
<code>
    {`
    public class OrderProcessor {
        private Order order;
    
        public OrderProcessor(Order order) {
            this.order = order;
        }
    
        public boolean processOrder() {
            double totalPrice = calculateTotalPrice();
            if (!validateOrder()) {
                return false;
            }
    
            if (!processPayment()) {
                return false;
            }
    
            setOrderStatus("Processed");
            sendConfirmationEmail();
            return true;
        }
    
        private double calculateTotalPrice() {
            return 0.0;
        }
    
        private boolean validateOrder() {
            return true;
        }
    
        private boolean processPayment() {
            return true;
        }
    
        private void setOrderStatus(String status) {
            // Logika untuk mengatur status pesanan
        }
    
        private void sendConfirmationEmail() {
            // Email Confirmation
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
    public class OrderProcessor {
        private Order order;
        private PaymentProcessor paymentProcessor;
        private OrderValidator orderValidator;
        private OrderStatusManager orderStatusManager;
        private EmailSender emailSender;

        public OrderProcessor(Order order) {
            this.order = order;
            this.paymentProcessor = new PaymentProcessor();
            this.orderValidator = new OrderValidator();
            this.orderStatusManager = new OrderStatusManager();
            this.emailSender = new EmailSender();
        }

        public boolean processOrder() {
            double totalPrice = order.calculateTotalPrice();
            if (!orderValidator.validateOrder(order)) {
                return false;
            }
            
            if (!paymentProcessor.processPayment(order, totalPrice)) {
                return false;
            }
            orderStatusManager.setOrderStatus(order, "Processed");
            emailSender.sendConfirmationEmail(order);
            return true;
        }
    }

    public class PaymentProcessor {
        public boolean processPayment(Order order, double totalPrice) {
            return true;
        }
    }

    public class OrderValidator {
        public boolean validateOrder(Order order) {
            return true;
        }
    }

    public class OrderStatusManager {
        public void setOrderStatus(Order order, String status) {
            // Order Status
        }
    }

    public class EmailSender {
        public void sendConfirmationEmail(Order order) {
            // Email Confirmation
        }
    }
    `}
</code>
                </pre>
                </div>
                <p className="text-white">
                Dalam contoh ini, OrderProcessor mengalami divergent change karena bertanggung jawab atas beberapa hal yang berbeda, seperti menghitung total harga pesanan, validasi pesanan, proses pembayaran, mengatur status pesanan, dan mengirim email konfirmasi. Hal ini membuat kelas tersebut menjadi terlalu kompleks dan sulit untuk dipelihara, karena melakukan terlalu banyak hal yang seharusnya dipisahkan ke dalam kelas atau modul yang berbeda.
                </p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  
## Giới thiệu
Dự án thiết kế cơ sở dữ liệu cho hệ thống quản lý đại lý bán xe Toyota.
## Chức năng chính
- Quản lý khách hàng 
- Quản lý nhân viên  
- Quản lý xe  
- Xử lý đơn hàng  
- Quản lý dịch vụ hậu mãi  
- Quản lý nhà cung cấp  
## Thực thể
Gồm 8 thực thể:
- Customer  
- Employee  
- Car  
- Order  
- Service  
- CustomerService  
- Supplier  
- Supply  
## ERD
(Sơ đồ ERD được đính kèm trong project)
## Mô hình quan hệ
- Customer(CustomerID, CustomerName, Phone, Email, Address)  
- Employee(EmployeeID, EmployeeName, Email, Phone)  
- Car(CarID, CarName, Model, Color, ManufactureYear, Price, Status)  
- Order(OrderID, OrderDate, Status, TotalAmount, CustomerID, EmployeeID, CarID)  
- Service(ServiceID, ServiceName, Description, Price)  
- CustomerService(CustomerID, ServiceID, ServiceDate)  
- Supplier(SupplierID, SupplierName, Address, Email, Phone)  
- Supply(SupplierID, CarID)

export type BookingStatusType =
  | "REQUESTED"
  | "ACCEPTED"
  | "DECLINED"
  | "PAID"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string | null;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  status: "UNBAN" | "BAN";
  address: string | null;
  city: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IService {
  id: string;
  title: string;
  description: string;
  img: string | null;
  price: number;
  duration: number;
  technicianId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBooking {
  id: string;

  customerId: string;

  technicianId: string;

  serviceId: string;

  bookingDate: string;

  slot: string;

  status: BookingStatusType;

  totalAmount: number;

  availabilityId: string;

  note: string | null;

  createdAt: string;

  updatedAt: string;

  technician: IUser;

  customer: IUser;

  service: IService;
}

export interface IBookingResponse {
  success: boolean;

  statusCode: number;

  message: string;

  data: IBooking[];
}

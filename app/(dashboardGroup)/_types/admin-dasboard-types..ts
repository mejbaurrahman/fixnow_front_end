export interface BookingsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IRBookingByADMIN[];
}

export interface IRBookingByADMIN {
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

  customer: User;

  technician: User;

  service: Service;
}

export interface User {
  id: string;

  name: string;

  email: string;

  password?: string;

  phone: string;

  image: string | null;

  role: UserRole;

  status: UserStatus;

  address: string | null;

  city: string | null;

  createdAt: string;

  updatedAt: string;
}

export interface Service {
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

export type BookingStatusType =
  | "REQUESTED"
  | "ACCEPTED"
  | "DECLINED"
  | "PAID"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export type UserRole = "CUSTOMER" | "TECHNICIAN" | "ADMIN";

export type UserStatus = "UNBAN" | "BAN";

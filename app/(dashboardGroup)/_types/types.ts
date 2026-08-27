export interface BookingResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Booking[];
}

export interface Booking {
  id: string;

  customerId: string;

  technicianId: string;

  serviceId: string;

  bookingDate: string;

  slot: string;

  status: BookingStatus;

  totalAmount: number;

  availabilityId: string;

  note: string | null;

  createdAt: string;

  updatedAt: string;
  technician: Technician;

  service: Service;

  payment: Payment | null;

  review: Review | null;
}

export interface Technician {
  id: string;

  name: string;

  email: string;

  phone: string;
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

export interface Payment {
  id: string;

  amount: number;

  status: string;

  createdAt: string;
}

export interface Review {
  id: string;

  rating: number;

  comment: string;

  createdAt: string;
}

export type BookingStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "DECLINED"
  | "CANCELLED"
  | "COMPLETED";

export interface UserProfileResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    profile: UserProfile;
  };
}

export interface UserProfile {
  id: string;

  name: string;

  email: string;

  phone: string;

  image: string | null;

  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";

  status: "BAN" | "UNBAN";

  address: string | null;

  city: string | null;

  createdAt: string;

  updatedAt: string;

  technicianProfile?: TechnicianProfile | null;
}

export interface TechnicianProfile {
  id: string;

  userId: string;

  bio: string;

  experience: number;

  hourlyRate: number;

  location: string;

  rating: number;

  createdAt: string;

  updatedAt: string;
}

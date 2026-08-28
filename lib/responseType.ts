export interface IBooking {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;
  bookingDate: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "COMPLETED"
    | "IN PROGRESS"
    | "CANCELLED"
    | "PAID";
  totalAmount: number;
  availabilityId: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ITechnicianProfile {
  id: string;
  userId: string;
  bio: string | null;
  experience: number;
  hourlyRate: number;
  location: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

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

  technicianProfile: ITechnicianProfile | null;
  customerBookings: IBooking[];
}

export interface IUserResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    profile: IUser;
  };
}

export type NavbarProps = {
  user: IUserResponse;
};

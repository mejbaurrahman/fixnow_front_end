export interface IServiceTechnicianProfile {
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

export interface IServiceTechnician {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "TECHNICIAN";
  technicianProfile: IServiceTechnicianProfile;
}

export interface IServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
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

  technician: IServiceTechnician;
  category: IServiceCategory;
}

export interface IServiceResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IService[];
}

//categories response interface

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoriesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Category[];
}

// technicians response

export interface Availability {
  id: string;
  technicianId: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface TechnicianProfile {
  id: string;
  userId: string;
  bio: string | null;
  experience: number;
  hourlyRate: number;
  location: string | null;
  rating: number;
  createdAt: string;
  updatedAt: string;
  availability: Availability[];
}

export interface ReviewReceived {
  id: string;
  bookingId: string;
  customerId: string;
  technicianId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface Technician {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  image: string | null;
  role: "TECHNICIAN";
  status: "UNBAN";
  address: string | null;
  city: string | null;
  createdAt: string;
  updatedAt: string;
  technicianProfile: TechnicianProfile;
  reviewReceived: ReviewReceived[];
}

export interface TechniciansResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Technician[];
}

export interface IServiceTechnicianProfile {
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

export interface IServiceTechnician {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "TECHNICIAN";
  technicianProfile: IServiceTechnicianProfile | null;
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

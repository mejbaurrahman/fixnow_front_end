import { getCategories } from "@/app/(publicGroup)/_actions/getCategories";
import { getServices } from "@/app/(publicGroup)/_actions/getServices";
import { IService } from "@/app/(publicGroup)/_types/types";
import TechnicianServices from "@/components/technicians/technician-services";
import { getMe } from "@/service/getMe";

export default async function ServicesPage() {
  const servicesResult = await getServices();

  const categoriesResult = await getCategories();

  const user = await getMe();

  const technicianId = user.data?.profile?.id;

  const services = servicesResult.data.filter(
    (service: IService) => service.technicianId === technicianId,
  );

  return (
    <TechnicianServices
      initialServices={services}
      categories={categoriesResult.data}
    />
  );
}

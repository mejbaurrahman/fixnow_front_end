import { IServiceResponse } from "@/app/(publicGroup)/_types/types";
import { ServiceCard } from "@/components/services/service-card";

interface ServiceGridProps {
  result: IServiceResponse;
}
export function ServiceGrid(props: ServiceGridProps) {
  const { result } = props;
  const services = result.data;
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// import { ArrowLeft, MapPin, Star, Verified } from "lucide-react";

// import { Badge } from "@/components/ui/badge";

// import { Card, CardContent } from "@/components/ui/card";

// import { BookingForm } from "@/components/technicians/booking-form";
// import { getTechnicians } from "../../_actions/getTechnicians";
// import { Technician } from "../../_types/types";

// export default async function TechnicianProfilePage({
//   params,
// }: {
//   params: Promise<{
//     id: string;
//   }>;
// }) {
//   const { id } = await params;

//   const result = await getTechnicians();

//   const technicians = result?.data;
//   const findTechnician = technicians?.find(
//     (technician: Technician) => technician.id === id,
//   );
//   /*
//    * --------------------------------------------------
//    * IMPORTANT
//    * --------------------------------------------------
//    *
//    * Replace this sample service with the real
//    * selected service coming from your backend.
//    *
//    * Example later:
//    *
//    * const technician = await getTechnician(id);
//    * const service = technician.services[0];
//    */

//   const service = {
//     id: "YOUR_REAL_SERVICE_ID",

//     name: "Plumbing Service",

//     price: 500,
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <Link
//         href="/technicians"
//         className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
//       >
//         <ArrowLeft className="size-4" />
//         Back to technicians
//       </Link>

//       <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
//         {/* =====================
//             LEFT SIDE
//         ====================== */}

//         <div>
//           {/* Profile */}

//           <Card>
//             <CardContent className="p-6 md:p-8">
//               <div className="flex flex-col gap-6 sm:flex-row">
//                 <Image
//                   src={
//                     findTechnician?.image
//                       ? findTechnician?.image
//                       : "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
//                   }
//                   alt={findTechnician?.name ? findTechnician?.name : "alt"}
//                   width={140}
//                   height={140}
//                   loading="eager"
//                   className="size-28 rounded-2xl object-cover"
//                 />

//                 <div className="flex-1">
//                   <div className="flex items-center gap-2">
//                     <h1 className="text-2xl font-bold md:text-3xl">
//                       {findTechnician?.name}
//                     </h1>

//                     <Verified className="size-5 fill-primary text-primary" />
//                   </div>

//                   <p className="mt-1 text-muted-foreground">
//                     {findTechnician?.role}
//                   </p>

//                   <div className="mt-4 flex flex-wrap gap-4 text-sm">
//                     <span className="flex items-center gap-1">
//                       <Star className="size-4 fill-yellow-400 text-yellow-400" />
//                       4.9
//                     </span>

//                     <span className="text-muted-foreground">
//                       {findTechnician?.reviewReceived?.length} reviews
//                     </span>

//                     <span className="flex items-center gap-1 text-muted-foreground">
//                       <MapPin className="size-4" />
//                       {findTechnician?.technicianProfile?.location}
//                     </span>
//                   </div>

//                   <div className="mt-5">
//                     <Badge>For booking</Badge>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* About */}

//           <section className="mt-8">
//             <h2 className="text-2xl font-bold">About the technician</h2>

//             <p className="mt-4 leading-7 text-muted-foreground">
//               {findTechnician?.technicianProfile?.bio}
//             </p>
//           </section>

//           {/* Service */}

//           <section className="mt-8">
//             <h2 className="text-2xl font-bold">Selected service</h2>

//             <Card className="mt-4">
//               <CardContent className="flex items-center justify-between p-5">
//                 <div>
//                   <p className="font-semibold">{service.name}</p>

//                   <p className="mt-1 text-sm text-muted-foreground">
//                     Professional service
//                   </p>
//                 </div>

//                 <p className="font-semibold">৳{service.price}</p>
//               </CardContent>
//             </Card>
//           </section>

//           {/* Skills */}

//           {/* <section className="mt-8">
//             <h2 className="text-2xl font-bold">Skills & expertise</h2>

//             <div className="mt-4 flex flex-wrap gap-2">
//               {[
//                 "Plumbing",
//                 "Pipe Repair",
//                 "Water Heater",
//                 "Leak Repair",
//                 "Installation",
//               ].map((skill) => (
//                 <Badge key={skill} variant="secondary" className="px-3 py-1.5">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </section> */}

//           {/* Reviews */}

//           <section className="mt-8">
//             <h2 className="text-2xl font-bold">Customer reviews</h2>

//             <div className="mt-5 space-y-4">
//               {[
//                 {
//                   name: "Rahim Ahmed",

//                   text: "Very professional and arrived on time.",
//                 },

//                 {
//                   name: "Karim Hasan",

//                   text: "Excellent work. Highly recommended.",
//                 },
//               ].map((review) => (
//                 <Card key={review.name}>
//                   <CardContent className="p-5">
//                     <div className="flex items-center gap-2">
//                       <div className="flex">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <Star
//                             key={star}
//                             className="size-4 fill-yellow-400 text-yellow-400"
//                           />
//                         ))}
//                       </div>

//                       <span className="font-medium">{review.name}</span>
//                     </div>

//                     <p className="mt-3 text-sm leading-6 text-muted-foreground">
//                       {review.text}
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* =====================
//             BOOKING SIDEBAR
//         ====================== */}

//         <aside>
//           <div className="lg:sticky lg:top-24">
//             <BookingForm
//               technicianId={id}
//               serviceId={service.id}
//               totalAmount={service.price}
//             />
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, MapPin, Star, Verified } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Card, CardContent } from "@/components/ui/card";

import { BookingForm } from "@/components/technicians/booking-form";

import { getTechnicians } from "../../_actions/getTechnicians";

import { IService, Technician, TechniciansResponse } from "../../_types/types";
import { IUser } from "@/lib/responseType";

export default async function TechnicianProfilePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const result: TechniciansResponse = await getTechnicians();

  const technicians = result?.data ?? [];

  const findTechnician = technicians?.find(
    (technician) => technician.id === id,
  );
  // console.log(technicians);
  if (!findTechnician) {
    return (
      <div className="container mx-auto py-10">
        <p>Technician not found</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        href="/technicians"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to technicians
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
        {/* LEFT SIDE */}

        <div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row">
                <Image
                  src={
                    findTechnician?.image ??
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                  }
                  alt={findTechnician?.name ?? "alt"}
                  width={140}
                  height={140}
                  className="size-28 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold md:text-3xl">
                      {findTechnician?.name}
                    </h1>

                    <Verified className="size-5 fill-primary text-primary" />
                  </div>

                  <p className="mt-1 text-muted-foreground">
                    {findTechnician?.role}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      4.9
                    </span>

                    <span className="text-muted-foreground">
                      {findTechnician?.reviewReceived?.length ?? 0}
                      reviews
                    </span>

                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="size-4" />

                      {findTechnician?.technicianProfile?.location}
                    </span>
                  </div>

                  <div className="mt-5">
                    <Badge>Available for booking</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">About the technician</h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              {findTechnician?.technicianProfile?.bio}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">Services</h2>

            <div className="mt-5 space-y-4">
              {findTechnician?.services?.map((service: IService) => (
                <Card key={service.id}>
                  <CardContent className="p-5">
                    <div>
                      <p className="font-semibold">{service.title}</p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Professional service
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">Customer reviews</h2>

            <div className="mt-5 space-y-4">
              {[
                {
                  name: "Rahim Ahmed",
                  text: "Very professional and arrived on time.",
                },
                {
                  name: "Karim Hasan",
                  text: "Excellent work. Highly recommended.",
                },
              ].map((review) => (
                <Card key={review.name}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="size-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <span className="font-medium">{review.name}</span>
                    </div>

                    <p className="mt-3 text-sm text-muted-foreground">
                      {review.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* BOOKING */}

        <aside>
          <div className="lg:sticky lg:top-24">
            <BookingForm
              technicianId={id}
              services={findTechnician?.services ?? []}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

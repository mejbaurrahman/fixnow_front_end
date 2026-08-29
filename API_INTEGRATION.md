API INTEGRATION

Frontend ===========================> Method ====================> Backend
Frontend: (auth)/login/page.tsx, Method: POST. Endpoint_api: /auth/login
Frontend: (auth)/register/page.tsx, Method: POST, Endpoint_api: /auth/register
Frontend: /profile/page.tsx, Method: GET, Endpoint_api: /auth/me

FOR PUBLIC USER:

Frontend: /services, Method: GET, Endpoint_api: /services
Frontend: /technicians/:id, Method: GET, Endpoint_api: /technicians
Frontend: /technicians/:id, Method: GET, Endpoint_api: /technicians/:id
Frontend: /categories, Method: GET, Endpoint_api: /categories

For ADMIN:

Frontend: /admin-dashboard/users, Method: GET, Endpoint_api: /admin/users
Frontend: /admin-dashboard/users(user status update), Method: PATCH, Endpoint_api: /admin/users/:id
Frontend: /admin-dashboard/bookings, Method: GET, Endpoint_api: /admin/bookings
Frontend: /admin-dashboard/categories, Method: GET, Endpoint_api: /admin/categories
Frontend: /admin-dashboard/categories (add category), Method: POST, Endpoint_api: /admin/categories
Frontend: /admin-dashboard/categories (delete category), Method: DELETE, Endpoint_api: /admin/categories/:id

For CUSTOMER:

Frontend: /dashboard/bookings (create booking), Method: POST, Endpoint_api: /bookings (using customer id by auth)
Frontend: /dashboard/bookings (get bookings by customer) , Method: GET, Endpoint_api: /bookings (using customer id by auth)
Frontend: /dashboard/bookings/:id (get bookings by customer) , Method: GET, Endpoint_api: /bookings/:id (using customer id)
Frontend: /dashboard/bookings/:id (get bookings by customer) , Method: GET, Endpoint_api: /bookings/:id (using customer id)
Frontend: /dashboard/bookings/:id (create payment by pay now) , Method: POST, Endpoint_api: /payments/create (using customer id by auth and booking id)
Frontend: /dashboard/bookings/:id (add review) , Method: POST, Endpoint_api: /reviews (review to the technician after completing task)
Frontend: /dashboard/payments , Method: GET, Endpoint_api: /payments (using customer id by auth)

For TECHNICIAN:

Frontend: /technician-dashboard/bookings, Method: GET, Endpoint_api: /technician/bookings
Frontend: /technician-dashboard/bookings (booking status update), Method: PATCH, Endpoint_api: /technician/bookings/:id
Frontend: /technician-dashboard/availability (create slots), Method: PUT, Endpoint_api: /technician/availability
Frontend: /technician-dashboard/profile (technician update), Method: PUT, Endpoint_api: /technician/profile
Frontend: /technician-dashboard/services, Method: GET, Endpoint_api: /services (by technician id)
Frontend: /technician-dashboard/services (add service), Method: POST, Endpoint_api: /services (by technician id)
Frontend: /technicians/:id (reviews), Method: GET, Endpoint_api: /reviews (by technician id)

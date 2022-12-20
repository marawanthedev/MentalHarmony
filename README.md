# Mental Harmony

# Folder strucutre

- assets -> images,svg and etc..
- components -> components that are used within containers and are not commonly used across the application -> a bit specific components
- contiainer -> containers that are handling logic within a page and delegating data to its components
- interface -> components that are commonly used such as navbar,side-navbar and footer.
- pages -> page files such as home, dashboard and etc...
- redux -> anything related to redux state mangement
- sass -> scss styling
- util -> utility functions that are commonly used across the application

# Technologies

- React
- Redux-tool kit
- Material UI
- SASS
- prop-types
- Faker
- Yup

# Highlights

- BEM for SASS for scalable css modules
- Use container-component pattern for cleaner code
- Use rem instead of px for easier css scaling and less time making layout responsive
- Protect routes based on user role
- Identify commonly used components and build it first
- Identify areas of css reusability
- Implement code reusability as much as possible and two examples would be util functions and reusing while customizing a sticky head table component to handle all pages rendering even though they have different structure

# Quotes

- Reuse as much and customize when needed
- Clean and well written code infrastructure will make rest of development process 4x faster

# Types of Users

- Admin
- Student
- Therapist

# General Features

- Update Profile Info
- Login
- Sign-up
- Submit daily popup and get article recommendation
- View Reviews

# Student Features

- Book an appointment with therapist
- View Reviews
- View Booking History
- View Booking Details
- Copy Booking meeting link
- Rate Booking

# Admin Features

- Approve Therapist/Service Provider Sign-Up Request
- View University Students
- Remove Therapist/Service Provider
- Attach articles to each daily popup submission scenario

# Therapist/Service Provider Features

- View Booking Request
- Accept Booking Request
- Decline Booking Request
- Attach meeting info to Booking Request
- View Booking Request Given Rating
- Sign-up and waiting for admin approval

# Production serving

- npm run build

# Development serving

- npm run start

# Log ...🚀

# Project & Portfolio

### Level & Lawrence

![Degree Program](https://img.shields.io/badge/degree-web%20development-blue.svg)&nbsp;

<br>

## 📢 &nbsp; Weekly Stand Up

Each week I will summarize my milestone activity and progress by writing a stand-up. A stand-up is meant to be a
succinct update on how things are going. Use these prompts as a guide on what to write about:

### Week 1

⚙️ Overview - This past week, I focused on updating log files in the project repository and improving my time management
skills to stay on track. I also worked on understanding how to jump between branches and use GitHub workflows more
effectively, including creating and merging branches. As well as keeping track of my progress using Milestones #.

🌵 Challenges - I struggled with figuring out how to manage multiple branches without causing conflicts. I also was a bit
rocking with the time management aspect of things.

🏆 Accomplishments - I improved my proficiency with GitHub by successfully managing feature branches and improving my
workflow efficiency. I also gained some new skills in organizing and maintaining detailed log files for better project
tracking.

🔮 Next Steps - Next, I plan to focus on conducting more research into effective application design strategies and begin
working on the design and layout for the Maintenance Management System.

<br>

### Week 2

⚙️ Overview - I focused on design research and wireframing for the Maintenance Management System this week. I explored
different design principles and tools to create effective and user-friendly layouts.

🌵 Challenges - I couldn’t get the final design to my liking, and it took longer than expected to settle on a direction.
I still gained valuable insights along the way.

🏆 Accomplishments - I made significant progress in wireframing and established a solid foundation for the application
design. While it’s not finalized, I’m happy with how it’s progressing and the skills I’m developing.

🔮 Next Steps - I plan to iterate on the wireframes, finalize the design, and begin implementing the layout in code. I
will also continue researching best practices for maintaining consistent design elements.

<br>

### Week 3

⚙️ Overview - This week, I focused on design and best UI/UX practices, creating a basic frontend and developing a
working prototype. I prioritized user-friendly features and ensured the design followed modern standards while remaining
functional.

🌵 Challenges - Time management remained a significant challenge as I balanced design, coding, and researching potential
use cases. The broad scope of possibilities often made it difficult to stay focused, but I addressed this by narrowing
my research and breaking tasks into manageable sections.

🏆 Accomplishments - I successfully implemented a functional prototype while improving my understanding of UI/UX
principles. Translating design concepts into a working interface felt like a major step forward.

🔮 Next Steps - I plan to refine the frontend further, enhancing its design and usability. Once the frontend reaches a
satisfactory level, I’ll begin building a basic backend using Django, focusing on establishing essential database
connections and backend logic to support the prototype’s functionality.

<br>

### Week 4

⚙️ Overview
Added a basic Django REST Framework API to manage the bus model.
Created the login page view in React.

🌵 Challenges - This week once again I struggled with time management.
I also found it challenging to locate clear documentation for Django REST Framework.

🏆 Accomplishments - I successfully integrated the bus model API using Django REST Framework. I managed to complete the
login page in React. Finally, I gained deeper understanding of Django REST Framework’s capabilities despite the
challenges.

🔮 Next Steps - I'll be working on my time management by setting more realistic daily goals and hopefully not have a
second class to worry about. I want to research and bookmark better resources for Django REST Framework. Tech with tim
has a really good video covering it. I also plan to focus on creating more realistic GitHub issues by referring to
existing templates and examples from other repositories. I'm going to continue to iterate on the API and React front
end, incorporating feedback and refactoring as needed.

<br>

### Week 5

⚙️ Overview - This week, I transitioned the backend of my project from Python/Django to a Node.js stack using TypeScript, Express, and MongoDB. I focused on setting up the API architecture and laying the groundwork for scalable server-side development.

🌵 Challenges - I faced some roadblocks in getting the API up and running, especially when testing the routes and ensuring proper connections to the database. The shift in tech stack also came with a learning curve in adapting previous logic to the new environment.

🏆 Accomplishments - I successfully configured the backend server, established a working API, and ensured MongoDB connectivity. I now have a solid server-side foundation to build on.

🔮 Next Steps - I’ll begin building out the frontend, connecting it to the API, and focusing on user interaction with the new backend setup. I also plan to refine route testing and start writing initial frontend components with improved TypeScript structure.

<br>

### Week 6

⚙️ Overview – This week, I focused on creating the Work Order pages. I invested time in researching best practices for MongoDB document design and RESTful route design, particularly for the work order model. I also began implementing the frontend components that allow users to create and view work orders.

🌵 Challenges – I encountered some difficulties in terms of creating a pliable task model that could be slotted into work orders. Achieving normalization while keeping usability in mind took some iteration. I also had to invest extra time in aligning frontend forms with the backend schema.

🏆 Accomplishments – I succeeded in implementing the core Work Order model in Mongoose and establishing relationships with the Vehicle and User models. I also set a functional UI within React for new work order insertion, and initiated styling pages to enhance user interface.

🔮 What's Next – I'll go ahead and continue to update the Work Order pages with delete and update functionality, and add more validation on the frontend as well as backend. I will also implement automatic costing based on labor and parts. Additionally, task tracking will be tested in individual work orders, and facility-specific data will be associated.

<br>

### Week 7

⚙️ Overview – This week, I began building out the user authentication system, laying the groundwork for secure login and state handling. I also created the Fleet and Work Order pages and connected them via React Router to enable smooth in-app navigation. To manage shared state like user info and login status, I implemented useContext. Additionally, I conducted security research focused on best practices for handling authentication, route protection, and safe data flow across the stack.

🌵 Challenges – The login system is still a work in progress. Integrating authentication with protected routes and global state took some troubleshooting, especially when handling conditional rendering and redirect logic. Ensuring proper separation between public and private routes is also proving to be a key architectural decision.

🏆 Accomplishments – I made solid progress on the authentication structure and now have the context provider in place to manage state globally. The Fleet and Work Order pages are live and accessible through proper routing. My research gave me a better understanding of how to approach frontend and backend security with tools like JWT, bcrypt, and HTTPS protocols.

🔮 What's Next – I’ll complete the authentication flow, including login validation, password hashing, and JWT-based access. I also plan to protect routes based on auth status and begin adding role-based access control. On the UI side, I’ll enhance the Fleet and Work Order pages to include user-specific data filtering and action feedback.

Got it! Here's a revised **Week 8** update that accurately reflects your actual progress:

---

### Week 8

⚙️ **Overview** – This week, I made a major backend change by switching the database from MongoDB to PostgreSQL to better align with the app’s data structure and future scalability goals. On the frontend, I built out the Fleet page with React components and began refactoring the codebase for better organization and maintainability. I also spent time identifying and fixing bugs across the app.

🌵 **Challenges** – Migrating to PostgreSQL required restructuring some of the data models and adjusting API routes to support SQL queries. Refactoring while still actively developing introduced a few temporary breaking changes that had to be debugged. Getting everything synced between frontend and backend took careful testing.

🏆 **Accomplishments** – The PostgreSQL setup is now functional and integrated with the app’s backend. The Fleet page is live with modular components, and the overall codebase is cleaner thanks to the ongoing refactor. Several bugs were resolved, improving both stability and performance.

🔮 **What's Next** – I’ll continue the refactoring process and update the remaining API endpoints for PostgreSQL. Next, I plan to enhance the Fleet page with interactive features like filters and status indicators. I’ll also begin planning the database schema for upcoming features like user roles and work order tracking.

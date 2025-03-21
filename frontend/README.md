# wecode-web

This is the main website of WeCode Community

## Features

- **Responsive Design**:Optimised for all devices, ensuring a great user experience on mobile, tablet, and desktop.
- **Modern UI**: Clean and professional interface with Tailwind CSS.
- **Interactive Components**: Engaging and dynamic content powered by Next and TypeScript.
  
## Technologies Used


- **Next.js**: For building a component-based architecture.

- **TypeScript**: Ensures type safety and better code maintainability.

- **Tailwind CSS**: For modern, utility-first styling.


## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)


1. **Clone the repository:**

   ```bash
   git clone git@github.com:WeCode-Community-Dev/wecode-web.git
   cd wecode-web
   git checkout feature/next.js

   ```

2. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install  # or yarn install
   ```


### Running the application

1.  **Start the frontend server :**

  - Open a new terminal, navigate to the frontend directory, and run

    ```bash

      npm run dev # or yarn dev

    ```

   This command starts a local development server. By default, it runs on http://localhost:3000, where you can view the application in your browser. Any changes       you make to the code will automatically refresh the page.


2.  **Build the frontend project for production:**

     ```bash

      npm run build  # or yarn build
      npm start      # or yarn start

     ```

   This command generates an optimised production build in the .next folder. The build is minified and includes all necessary assets for deployment.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

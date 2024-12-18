import React from 'react';
import { Header } from './Componets/Header';
import { Footer } from './Componets/Footer';
import { AllRoutes } from './AllRoutes/Routes';
import { Whats } from './pages/Components/Whats';
export const App = () => {
  return (
    <div className="flex flex-col dark:bg-gray-800 min-h-screen">
      <Header />
      <Whats/>
      <main className="flex-grow mt-10 dark:bg-gray-800">
       <AllRoutes/>
      </main>
      <Footer className="mt-2" /> 
    </div>
  );
};


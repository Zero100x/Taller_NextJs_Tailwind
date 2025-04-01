'use client';


import React, { useState } from 'react';

export default function CarMaintenancePage() {
  const [selectedCar, setSelectedCar] = useState(0);
  
  
  // Lista de los 10 carros más populares en Colombia
  const cars = [
    
    {
      
      name: "Renault Sandero",
      image: "/Sandero.png",
      specs: {
        motor: "1.6L, 4 cilindros",
        potencia: "85-115 HP",
        transmision: "Manual de 5 velocidades / Automática CVT",
        consumo: "48-53 km/gal",
        tipo: "Hatchback"
      },
      maintenance: [
        { km: "5,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "10,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "20,000 km", services: ["Cambio de aceite", "Filtro de aire", "Filtro de combustible", "Inspección de suspensión"] },
        { km: "40,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido de frenos", "Correa de distribución"] }
      ]
    },
    {
      name: "Chevrolet Onix",
      image: "/onix.png",
      specs: {
        motor: "1.0L - 1.2L Turbo",
        potencia: "98-116 HP",
        transmision: "Manual de 5 velocidades / Automática de 6 velocidades",
        consumo: "52-57 km/gal",
        tipo: "Sedán/Hatchback"
      },
      maintenance: [
        { km: "5,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "10,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "20,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Revisión de suspensión"] },
        { km: "40,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido refrigerante"] }
      ]
    },
    {
      name: "Mazda CX-30",
      image: "/CX-30.png",
      specs: {
        motor: "2.0L, 4 cilindros Skyactiv-G",
        potencia: "153 HP",
        transmision: "Automática de 6 velocidades",
        consumo: "47-50 km/gal",
        tipo: "SUV"
      },
      maintenance: [
        { km: "10,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "20,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "40,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Inspección de suspensión"] },
        { km: "60,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido de frenos"] }
      ]
    },
    {
      name: "Kia Picanto",
      image: "/picanto.png",
      specs: {
        motor: "1.0L - 1.2L, 4 cilindros",
        potencia: "67-84 HP",
        transmision: "Manual de 5 velocidades / Automática de 4 velocidades",
        consumo: "57-63 km/gal",
        tipo: "Hatchback"
      },
      maintenance: [
        { km: "5,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "15,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "30,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Revisión de suspensión"] },
        { km: "45,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido de frenos"] }
      ]
    },
    {
      name: "Toyota Corolla",
      image: "/corolla.png",
      specs: {
        motor: "1.8L - 2.0L, 4 cilindros",
        potencia: "139-170 HP",
        transmision: "CVT",
        consumo: "77-87 km/gal",
        tipo: "Sedán"
      },
      maintenance: [
        { km: "5,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "10,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "20,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Inspección de suspensión"] },
        { km: "40,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido refrigerante"] }
      ]
    },
    {
      name: "Nissan Qashqai",
      image: "/Qashqai.png",
      specs: {
        motor: "1.6L - 2.0L, 4 cilindros",
        potencia: "128-163 HP",
        transmision: "Manual de 6 velocidades / CVT",
        consumo: "47-52 km/gal",
        tipo: "SUV"
      },
      maintenance: [
        { km: "5,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "10,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "20,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Inspección de suspensión"] },
        { km: "40,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido de frenos", "Correa de distribución"] }
      ]
    },
    {
      name: "Ford EcoSport",
      image: "/EcoSport.png",
      specs: {
        motor: "1.5L - 2.0L, 4 cilindros",
        potencia: "123-166 HP",
        transmision: "Manual de 5 velocidades / Automática de 6 velocidades",
        consumo: "44-49 km/gal",
        tipo: "SUV Compacto"
      },
      maintenance: [
        { km: "5,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "15,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "30,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Inspección de suspensión"] },
        { km: "60,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido de frenos", "Líquido refrigerante"] }
      ]
    },
    {
      name: "Suzuki Swift",
      image: "/Swift.png",
      specs: {
        motor: "1.2L - 1.4L, 4 cilindros",
        potencia: "83-140 HP",
        transmision: "Manual de 5 velocidades / Automática CVT",
        consumo: "57-63 km/gal",
        tipo: "Hatchback"
      },
      maintenance: [
        { km: "5,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "10,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "20,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Inspección de suspensión"] },
        { km: "40,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido de frenos"] }
      ]
    },
    {
      name: "Volkswagen Gol",
      image: "/Gol.png",
      specs: {
        motor: "1.6L, 4 cilindros",
        potencia: "101 HP",
        transmision: "Manual de 5 velocidades / Automática de 6 velocidades",
        consumo: "52-57 km/gal",
        tipo: "Hatchback/Sedán"
      },
      maintenance: [
        { km: "7,500 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "15,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "30,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Inspección de suspensión"] },
        { km: "60,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido de frenos", "Correa de distribución"] }
      ]
    },
    {
      name: "Hyundai Tucson",
      image: "/Tucson.png",
      specs: {
        motor: "2.0L - 2.5L, 4 cilindros",
        potencia: "156-187 HP",
        transmision: "Automática de 6 velocidades / DCT de 7 velocidades",
        consumo: "44-49 km/gal",
        tipo: "SUV"
      },
      maintenance: [
        { km: "5,000 km", services: ["Cambio de aceite", "Revisión general"] },
        { km: "15,000 km", services: ["Cambio de aceite", "Filtro de aire", "Revisión de frenos"] },
        { km: "30,000 km", services: ["Cambio de aceite", "Filtro de combustible", "Inspección de suspensión"] },
        { km: "60,000 km", services: ["Cambio de aceite", "Filtro de aire", "Bujías", "Líquido de frenos", "Correa de distribución"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center">Mantenimiento y Especificacion de Veiculos</h1>
          <p className="text-center mt-2">de los 10 autos más populares</p>
        </div>
      </header>

      {/* Menu de navegación */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-1 md:space-x-4 pb-2">
            {cars.map((car, index) => (
              <button
                key={index}
                className={`px-3 py-2 rounded-md text-sm whitespace-nowrap transition-colors duration-200 ${
                  selectedCar === index
                    ? "bg-blue-600 text-white font-medium"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedCar(index)}
              >
                {car.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Cabecera del auto seleccionado */}
          <div className="bg-gray-800 text-white p-6">
            <h2 className="text-2xl md:text-3xl font-bold">{cars[selectedCar].name}</h2>
            <p className="mt-2 text-gray-300">Información de especificaciones y mantenimiento recomendado</p>
          </div>

          {/* Imagen y especificaciones */}
          <div className="md:flex p-6 border-b">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <img 
                src={cars[selectedCar].image} 
                alt={cars[selectedCar].name} 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Especificaciones Técnicas</h3>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(cars[selectedCar].specs).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-3 rounded-md">
                    <span className="text-gray-500 font-medium capitalize">{key}: </span>
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mantenimiento recomendado */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Calendario de Mantenimiento Recomendado</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left text-gray-600 font-semibold">Kilometraje</th>
                    <th className="py-3 px-4 text-left text-gray-600 font-semibold">Servicios Recomendados</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cars[selectedCar].maintenance.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-3 px-4 text-gray-800 font-medium">{item.km}</td>
                      <td className="py-3 px-4">
                        <ul className="list-disc pl-5">
                          {item.services.map((service, sIndex) => (
                            <li key={sIndex} className="text-gray-700">{service}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recomendaciones generales */}
          <div className="p-6 bg-blue-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recomendaciones Generales</h3>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-gray-700 mb-3">
                Recuerde que estos son intervalos de mantenimiento recomendados. El uso real, 
                las condiciones de manejo y el clima pueden requerir mantenimiento más frecuente.
             
              </p>
            </div>
          </div>
        </div>
      </main>

      
      
        
          
          
        </div>
  );
}
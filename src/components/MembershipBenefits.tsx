import React from 'react';
import { ShoppingBag, Film, Fuel, Stethoscope, Dumbbell, Building } from 'lucide-react';

const MembershipBenefits = () => {
  const benefits = [
    {
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      title: "Clube de Descontos",
      description: "Economize em diversos estabelecimentos parceiros em todo o Brasil."
    },
    {
      icon: <Film className="h-8 w-8 text-white" />,
      title: "Cinema Grátis",
      description: "Ingresso gratuito na rede Cinesystem todo mês para associados."
    },
    {
      icon: <Fuel className="h-8 w-8 text-white" />,
      title: "Descontos em Postos",
      description: "Economize no combustível com nossos postos parceiros."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Assistência Odontológica",
      description: "Descontos especiais em clínicas odontológicas parceiras."
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-white" />,
      title: "Academias",
      description: "Preços exclusivos em academias conveniadas por todo o país."
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: "Consultas e Clínicas",
      description: "Atendimento com valores reduzidos em clínicas médicas e laboratórios parceiros."
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">Clube de Benefícios Exclusivos</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ser um associado da Federal Associados é muito mais que ter internet ilimitada. Conheça nossos benefícios exclusivos.
          </p>
        </div>

        {/* Cinema Benefit Highlight */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="bg-white rounded-xl p-6 md:p-8 relative overflow-hidden border border-gray-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src="/images/ChatGPT Image 3_06_2025, 15_48_17.png"
                  alt="Ingresso Gratuito Cinesystem"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Benefício exclusivo para os nossos associados</h3>
                <p className="text-base md:text-lg text-gray-600">
                  Sem sorteio, sem pegadinhas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl p-4 md:p-6 shadow-md group-hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="absolute -top-4 md:-top-6 left-4 md:left-6 bg-gradient-to-r from-blue-600 to-blue-800 p-2 md:p-3 rounded-xl shadow-lg">
                  {benefit.icon}
                </div>
                <div className="pt-6 md:pt-8">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
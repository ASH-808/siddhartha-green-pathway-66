
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const StatisticsBand = () => {
  const stats = [
    {
      value: '24',
      unit: 'Lakh',
      description: 'students vie for 1,07,948 medical seats in India',
      icon: '/stats-india.svg',
      bgClass: 'from-emerald-800/80 to-emerald-700/80'
    },
    {
      value: '154',
      unit: '',
      description: 'MD schools in the US and 17 in Canada',
      icon: '/stats-usa.svg',
      bgClass: 'from-emerald-700/80 to-emerald-600/80'
    },
    {
      value: '42',
      unit: '%',
      description: 'US medical school acceptance rate',
      icon: '/stats-percentage.svg',
      bgClass: 'from-emerald-600/80 to-emerald-500/80'
    },
    {
      value: '<10',
      unit: '%',
      description: 'Canadian medical school acceptance rate',
      icon: '/stats-canada.svg',
      bgClass: 'from-emerald-700/80 to-emerald-600/80'
    },
  ];

  return (
    <section className="section relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/medical-statistics-bg.jpg" 
          alt="Medical students in classroom" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070";
            e.currentTarget.onerror = null;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/90"></div>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Why an Alternate Pathway to MD Program?</h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Medical school admissions are highly competitive globally. Our program offers a reliable alternative.
          </p>
        </div>
        
        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="reveal transform transition-all duration-500 hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`flex flex-col items-center p-8 bg-gradient-to-br ${stat.bgClass} backdrop-blur-sm rounded-2xl h-full border border-emerald-500/30 hover:border-emerald-400/70 transition-all duration-300 shadow-lg`}>
                <div className="mb-6 bg-white/20 p-4 rounded-full">
                  <img 
                    src={stat.icon || '/icon-stats.svg'} 
                    alt="" 
                    className="w-12 h-12"
                    onError={(e) => {
                      e.currentTarget.src = "/icon-stats.svg";
                      e.currentTarget.onerror = null;
                    }}
                  />
                </div>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-white">{stat.value}</span>
                  <span className="text-2xl text-emerald-300 ml-2 mb-1">{stat.unit}</span>
                </div>
                <p className="text-emerald-100 text-center">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {stats.map((stat, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className={`flex flex-col items-center p-8 bg-gradient-to-br ${stat.bgClass} backdrop-blur-sm rounded-2xl h-full border border-emerald-500/30 hover:border-emerald-400/70 transition-all duration-300 shadow-lg`}>
                      <div className="mb-6 bg-white/20 p-4 rounded-full">
                        <img 
                          src={stat.icon || '/icon-stats.svg'} 
                          alt="" 
                          className="w-12 h-12"
                          onError={(e) => {
                            e.currentTarget.src = "/icon-stats.svg";
                            e.currentTarget.onerror = null;
                          }}
                        />
                      </div>
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="text-5xl md:text-6xl font-bold text-white">{stat.value}</span>
                        <span className="text-2xl text-emerald-300 ml-2 mb-1">{stat.unit}</span>
                      </div>
                      <p className="text-emerald-100 text-center">{stat.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StatisticsBand;

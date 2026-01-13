import { Camera, DollarSign, Settings } from 'lucide-react';

function BookingCard() {
  const features = [
    {
      id: 1,
      title: "Professional Equipment",
      description: "Record with top grade Cameras from Sony, Shure and Blackmagic.",
      icon: <Camera className="w-8 h-8 text-red-600" />,
      bgColor: "bg-white"
    },
    {
      id: 2,
      title: "Affordable and Flexible",
      description: "Record with top grade Cameras from Sony, Shure and Blackmagic.",
      icon: <DollarSign className="w-8 h-8 text-red-600" />,
      bgColor: "bg-white"
    },
    {
      id: 3,
      title: "Affordable and Flexible",
      description: "Record with top grade Cameras from Sony, Shure and Blackmagic.",
      icon: <Settings className="w-8 h-8 text-red-600" />,
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`${feature.bgColor} rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6 mx-auto">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                {feature.title}
              </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

    </div>
  );
}

export default BookingCard;
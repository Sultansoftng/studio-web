import { useState } from 'react';
import { Calendar, Check } from 'lucide-react';
import { FaFilm, FaMicrophone, FaVideo } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa6';

function StudioBooking() {
  const [duration, setDuration] = useState(2);
  const [date, setDate] = useState('');
  const [selectedService, setSelectedService] = useState('Podcast Studio');
  const [estimatorAddons, setEstimatorAddons] = useState({
    extraCamera: false,
    professionalLighting: true,
    videoEditing: false,
    greenScreen: false,
  });

  const handleAddonToggle = (addon) => {
    if (addon === 'professionalLighting') return;
    setEstimatorAddons(prev => ({
      ...prev,
      [addon]: !prev[addon]
    }));
  };

  const services = [
    {
      title: "Podcast Studio",
      description: "Professional soundproof environment perfect for up to 4 speakers",
      price: 80,
      unit: "Per Hour",
      icon: <FaMicrophone className="w-6 h-6 text-red-600" />,
      features: [
        { label: "4X Shure SM7B Mics", included: true },
        { label: "Rodcaster pro ||", included: true },
        { label: "4K Video option", included: true },
        { label: "Sound engineer", included: true },
      ],
      defaultAddons: {
        extraCamera: false,
        professionalLighting: true,
        videoEditing: false,
        greenScreen: false,
      }
    },
    {
      title: "Video Production",
      description: "Ideal for YouTube, Interviews and high quality Social Content.",
      price: 80,
      unit: "Per Hour",
      icon: <FaVideo className="w-6 h-6 text-blue-600" />,
      features: [
        { label: "3X Sony FX3 Cameras", included: true },
        { label: "Aputure lighting kit", included: true },
        { label: "Telephone", included: true },
        { label: "Light switching", included: true },
      ],
      defaultAddons: {
        extraCamera: true,
        professionalLighting: true,
        videoEditing: false,
        greenScreen: false,
      }
    },
    {
      title: "Commercial Shots",
      description: "Full set access for Product Photography and brand commercials.",
      price: 80,
      unit: "Per Hour",
      icon: <FaFilm className="w-6 h-6 text-orange-500" />,
      features: [
        { label: "Full set Styling", included: true },
        { label: "Greenscreen Cyclorama", included: true },
        { label: "Product Turntable", included: true },
        { label: "Assistant Included", included: true },
      ],
      defaultAddons: {
        extraCamera: false,
        professionalLighting: true,
        videoEditing: true,
        greenScreen: true,
      }
    },
    {
      title: "Event / Custom Project",
      description: "Host workshops, Launch parties or Private Screening.",
      price: 80,
      unit: "Per Hour",
      icon: <FaFilm className="w-6 h-6 text-purple-500" />,
      features: [
        { label: "Capacity: 40ppl", included: true },
        { label: "Projector & Audio", included: true },
        { label: "Catering Setup Area", included: true },
        { label: "Flexible Furniture", included: true },
      ],
      defaultAddons: {
        extraCamera: false,
        professionalLighting: true,
        videoEditing: false,
        greenScreen: false,
      }
    }
  ];

  const currentService = services.find(service => service.title === selectedService) || services[0];
  
  const hourlyRate = currentService.price;
  const subtotal = hourlyRate * duration;
  
  const addonPrices = {
    extraCamera: estimatorAddons.extraCamera ? 50 : 0,
    professionalLighting: 0,
    videoEditing: estimatorAddons.videoEditing ? 200 : 0,
    greenScreen: estimatorAddons.greenScreen ? 30 : 0,
  };

  const addonsTotal = Object.values(addonPrices).reduce((sum, price) => sum + price, 0);
  const estimatedTotal = subtotal + addonsTotal;

  const handleEstimatorBook = () => {
    const selectedAddons = [];
    if (estimatorAddons.extraCamera) selectedAddons.push('Extra camera set-up (+$50)');
    if (estimatorAddons.professionalLighting) selectedAddons.push('Professional lighting (Included)');
    if (estimatorAddons.videoEditing) selectedAddons.push('Video editing (+$200)');
    if (estimatorAddons.greenScreen) selectedAddons.push('Green screen prep (+$30)');
    
    alert(`Booking ${selectedService}...\n\nDuration: ${duration} hours\nDate: ${date || 'Not selected'}\nAdd-ons:\n${selectedAddons.map(a => '• ' + a).join('\n')}\n\nTotal: $${estimatedTotal.toFixed(2)}`);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service.title);
    setEstimatorAddons(service.defaultAddons);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-3 rounded-xl sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
         <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Services Breakdown</h1>
          <p className="text-gray-600 mt-2">Explore what is included in each of our studio package</p>
        </div>

         <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-xl ${
                    selectedService === service.title ? 'ring-2 ring-red-500' : ''
                  }`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h2>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">${service.price}</div>
                      <div className="text-sm text-gray-500">{service.unit}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-gray-700">INCLUDES:</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-4 h-4 flex items-center justify-center rounded border mr-2 flex-shrink-0 ${
                          feature.included 
                            ? 'bg-green-600 border-white' 
                            : 'border-gray-300'
                        }`}>
                          {feature.included && (
                            <Check className="w-2.5 h-2.5 text-white" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          feature.included ? 'text-black' : 'text-black'
                        }`}>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-right">
                    <span className="text-sm text-red-600 font-medium">
                      {selectedService === service.title ? '✓ Selected' : 'Click to select'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-6">
               <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FaCalculator className='text-red-500' />
                  Estimator
                </h1>
               </div>

               <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-gray-900 font-medium">
                    {currentService.title} (${currentService.price} per hour)
                  </span>
                </div>
              </div>

              {/* Service Duration */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Duration (Hours)
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setDuration(Math.max(1, duration - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl text-gray-600">−</span>
                  </button>
                  <div className="flex-1 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
                    <span className="text-xl font-semibold text-gray-900">{duration}</span>
                  </div>
                  <button
                    onClick={() => setDuration(duration + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl text-gray-600">+</span>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Add-ons
                </label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimatorAddons.extraCamera}
                        onChange={() => handleAddonToggle('extraCamera')}
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500 focus:ring-2 focus:ring-offset-0 border-red-300"
                      />
                      <span className="ml-3 text-black">Extra camera set-up (+$50)</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimatorAddons.professionalLighting}
                        disabled
                        readOnly
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500 border-red-300 bg-red-50"
                      />
                      <span className="ml-3 text-black">Professional lighting (Included)</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimatorAddons.videoEditing}
                        onChange={() => handleAddonToggle('videoEditing')}
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500 focus:ring-2 focus:ring-offset-0 border-red-300"
                      />
                      <span className="ml-3 text-black">Video editing (+$200)</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={estimatorAddons.greenScreen}
                        onChange={() => handleAddonToggle('greenScreen')}
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500 focus:ring-2 focus:ring-offset-0 border-red-300"
                      />
                      <span className="ml-3 text-black">Green screen prep (+$30)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center py-2">
                  <span className="text-black">Sub-total</span>
                  <span className="text-lg font-semibold text-black">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-black">Add-ons</span>
                  <span className="text-lg font-semibold text-black">${addonsTotal.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-300"></div>

                <div className="flex justify-between items-center pt-3">
                  <span className="text-xl font-bold text-black">Estimated Total</span>
                  <span className="text-2xl font-bold text-black">${estimatedTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleEstimatorBook}
                className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mb-4"
              >
                Book a session
              </button>

              <p className="text-center text-sm text-gray-500">
                No payment required until confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudioBooking;
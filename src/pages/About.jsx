import React from 'react';
import { 
  Target, 
  Award, 
  Users, 
  Rocket, 
  CheckCircle 
} from 'lucide-react';

const About = () => (
  <div className="container mx-auto px-4 py-12 max-w-4xl">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Presentation Platform</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Empowering professionals with high-quality, ready-to-use presentation templates
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Target className="text-blue-600 mr-4" size={40} />
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          We aim to empower individuals and organizations by providing professionally crafted 
          PowerPoint presentations that save time and boost productivity across various domains.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Rocket className="text-blue-600 mr-4" size={40} />
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          To become the go-to platform for professionals seeking high-quality, 
          impactful presentation templates that help communicate ideas effectively.
        </p>
      </div>
    </div>

    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Users,
            title: 'Diverse Collection',
            description: 'Presentations for every industry and need'
          },
          {
            icon: Award,
            title: 'Professional Quality',
            description: 'Designed by expert designers and professionals'
          },
          {
            icon: CheckCircle,
            title: 'Easy to Use',
            description: 'Simple customization and instant download'
          }
        ].map((feature, index) => (
          <div 
            key={index} 
            className="
              bg-white 
              shadow-md 
              rounded-lg 
              p-6 
              text-center 
              hover:shadow-xl 
              transition-shadow
            "
          >
            <feature.icon 
              className="mx-auto mb-4 text-blue-600" 
              size={50} 
            />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
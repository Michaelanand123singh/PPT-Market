import React from 'react';
import { 
  Target, 
  Award, 
  Users, 
  Rocket, 
  CheckCircle 
} from 'lucide-react';

const About = () => (
  <div 
    className="
      min-h-screen 
      bg-gradient-to-br 
      from-blue-50 
      to-blue-100 
      py-16 
      px-4 
      overflow-hidden 
      relative
    "
  >
    {/* Animated Background Bubbles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div 
          key={i} 
          className="
            absolute 
            bg-blue-200/30 
            rounded-full 
            animate-blob 
            blur-xl
          "
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>

    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Header with Gradient and Animation */}
      <div 
        className="
          text-center 
          mb-16 
          transform 
          transition-all 
          duration-700 
          hover:scale-105
        "
      >
        <h1 
          className="
            text-5xl 
            font-extrabold 
            mb-4 
            bg-clip-text 
            text-transparent 
            bg-gradient-to-r 
            from-blue-600 
            to-blue-900
            animate-gradient-x
          "
        >
          About Presentation Platform
        </h1>
        <p 
          className="
            text-xl 
            text-blue-800 
            max-w-2xl 
            mx-auto 
            opacity-80
            animate-fade-in
          "
        >
          Empowering professionals with high-quality, ready-to-use presentation templates
        </p>
      </div>

      {/* Mission and Vision Cards with 3D Hover Effect */}
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Target,
            title: 'Our Mission',
            description: 'We aim to empower individuals and organizations by providing professionally crafted PowerPoint presentations that save time and boost productivity across various domains.'
          },
          {
            icon: Rocket,
            title: 'Our Vision',
            description: 'To become the go-to platform for professionals seeking high-quality, impactful presentation templates that help communicate ideas effectively.'
          }
        ].map((section, index) => (
          <div 
            key={index}
            className="
              bg-white/80 
              backdrop-blur-lg 
              shadow-2xl 
              rounded-2xl 
              p-8 
              border-2 
              border-blue-100 
              transform 
              transition-all 
              duration-500 
              hover:-translate-y-4 
              hover:shadow-blue-300/50
            "
          >
            <div className="flex items-center mb-6">
              <section.icon 
                className="
                  text-blue-600 
                  mr-6 
                  animate-pulse-slow
                " 
                size={50} 
              />
              <h2 className="text-3xl font-bold text-blue-900">
                {section.title}
              </h2>
            </div>
            <p className="text-blue-800 leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>

      {/* Features Section with Hover Effects */}
      <div className="mt-16">
        <h2 
          className="
            text-4xl 
            font-bold 
            text-center 
            mb-12 
            text-blue-900
            animate-gradient-text
          "
        >
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
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
                bg-white/70 
                backdrop-blur-lg 
                shadow-xl 
                rounded-2xl 
                p-8 
                text-center 
                border 
                border-blue-100 
                transform 
                transition-all 
                duration-500 
                hover:-translate-y-4 
                hover:shadow-blue-300/50
                group
              "
            >
              <feature.icon 
                className="
                  mx-auto 
                  mb-6 
                  text-blue-600 
                  group-hover:scale-110 
                  transition-transform
                " 
                size={60} 
              />
              <h3 
                className="
                  text-2xl 
                  font-semibold 
                  mb-4 
                  text-blue-900 
                  group-hover:text-blue-700
                  transition-colors
                "
              >
                {feature.title}
              </h3>
              <p className="text-blue-800 opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
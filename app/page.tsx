import Image from "next/image";
import { FaRegCompass } from "react-icons/fa";

export default function Home() {
const tech_image_urls = [
  '/tech-images/Scikit_learn_logo_small.svg.png',
  '/tech-images/Python-logo-notext.svg.png',
  '/tech-images/Amazon_Web_Services_Logo.svg.png',
  '/tech-images/Flask_logo.png',
  '/tech-images/Tensorflow_logo.svg.png',
  '/tech-images/TB.png',
]
  return (
    <div className="w-screen flex flex-col justify-between h-screen p-4 relative pt-20 md:pt-4">
      <div className="absolute top-4 md:top-4 md:right-4 p-4 bg-black rounded text-white cursor-pointer shadow flex gap-2 justify-center items-center animate-bounce">
        <p>Click to explore</p>
        <FaRegCompass />
      </div>
      <div className="flex items-center w-full flex-col mb-8">
        <h1 className="text-2xl md:text-4xl">Insurance Fraud Detection System</h1>
        <p className="text-sm">Guarding Trust, Detecting Fraud : Protecting Every Claim</p>
      </div>
      {/* tech container */}
      <div className="w-full flex flex-col gap-2 items-center">
        <h2 className="text-xl">Tech Stack</h2>
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {tech_image_urls.map((url, index) => (
            <div key={index} className="w-16 h-16">
              <Image 
                src={url}
                alt="tech"
                width={64}
                height={64} />
              </div>
          ))}
        </div>
      </div>
      {/* container of some cards */}
      <div className='flex flex-col gap-4 justify-center items-center w-full md:flex-row'>
        {/* cards */}
        <div className="flex flex-col rounded  border border-gray-100 w-80 shadow">
          <div className="w-full h-32 bg-gray-100 p-2 rounded-t">
            <h2 className="text-2xl max-w-40">Real-Time Fraud Detection</h2>
          </div>
          <div className="w-full h-64 p-2">
            <p>Some text here</p>
          </div>
        </div>
        <div className="flex flex-col rounded  border border-gray-100 w-80 shadow">
          <div className="w-full h-32 bg-gray-100 p-2 rounded-t">
            <h2 className="text-2xl max-w-40">Ai-Powered Predictive Modelling</h2>
          </div>
          <div className="w-full h-64 p-2">
            <p>Some text here</p>
          </div>
        </div>
        <div className="flex flex-col rounded  border border-gray-100 w-80 shadow">
          <div className="w-full h-32 bg-gray-100 p-2 rounded-t">
            <h2 className="text-2xl max-w-40">Seemless Integration</h2>
          </div>
          <div className="w-full h-64 p-2">
            <p>Some text here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

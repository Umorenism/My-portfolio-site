import ServiceCard from "../component/ServiceCard";

const Service = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-4">
      <div className="container mx-auto p-4">
        <h1 className="py-4 text-3xl md:text-4xl font-bold text-white text-center">
          service
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <ServiceCard
            title="Web Design"
            content="As an experienced web developer, I specialize in creating dynamic and engaging web applications tailored to meet your specific needs. With a strong background in frontend technologies including React, TypeScript, and Tailwind CSS, I deliver user-centric solutions that enhance functionality and visual appeal"
            onReadMore={() => {}}
          />
          <ServiceCard
            title="Frontend Development"
            content="As a dedicated frontend developer, I specialize in crafting visually stunning and highly interactive user interfaces that bring your digital vision to life. With a strong command of modern frontend technologies including React, TypeScript, Tailwind CSS, and Framer Motion, I create seamless, responsive, and engaging web experiences."
            onReadMore={() => {}}
          />
          <ServiceCard
            title="Backend Development"
            content="As a skilled backend developer, I specialize in building robust and scalable server-side solutions that power dynamic web applications. With expertise in modern backend technologies and frameworks, I deliver efficient, secure, and high-performance solutions tailored to your business needs."
            onReadMore={() => {}}
          />
          <ServiceCard
            title="Digital Marketer"
            content="As a passionate digital marketer, I offer comprehensive strategies and solutions to elevate your brand’s online presence and drive meaningful engagement. With a deep understanding of the digital landscape and a focus on results, I craft data-driven marketing campaigns tailored to meet your unique business goals."
            onReadMore={() => {}}
          />
          <ServiceCard
            title="Content Writer"
            content="As a dedicated content writer, I specialize in creating compelling and high-quality content that captivates your audience and aligns with your brand’s voice. With a focus on clarity, creativity, and strategic messaging, I craft content that engages readers and drives action."
            onReadMore={() => {}}
          />
          <ServiceCard
            title="Fullstack Developer"
            content="As a versatile full-stack developer, I offer comprehensive development solutions that encompass both frontend and backend technologies. My expertise spans the entire development lifecycle, from designing intuitive user interfaces to building robust server-side systems, ensuring a seamless and integrated approach to your digital projects."
            onReadMore={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

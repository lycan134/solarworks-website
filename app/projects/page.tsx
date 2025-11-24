import React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "5kW Grid-Tie System",
      location: "Minglanilla, Cebu",
      image: "https://images.unsplash.com/photo-1581091870622-4bbefab3c2aa",
      description: "Installed for a residential client to reduce monthly electric bills by 60%.",
    },
    {
      title: "3kW Off-Grid System",
      location: "Balamban, Cebu",
      image: "https://images.unsplash.com/photo-1581090700221-1e78c2b9a8cd",
      description: "Remote home powered completely by solar energy with battery backup.",
    },
    {
      title: "8kW Hybrid System",
      location: "Cebu City",
      image: "https://images.unsplash.com/photo-1581090700000-12e78c2b9b01",
      description: "Combination of grid-tie and storage for uninterrupted business operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-20">
        <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-500 mb-2">{project.location}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

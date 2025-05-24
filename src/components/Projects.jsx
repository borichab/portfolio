import { Card, CardContent } from "./Card";
import { ArrowDownCircle } from "lucide-react";
export default function Projects() {
    const projects = [
    {
      title: "Campus Guide",
      description:
        "Android app that enhances the campus experience with interactive maps, real-time communication via Nearby API, and course catalog access.",
      link: "https://github.com/borichab/CampusGuide",
    },
    {
      title: "Mensa Food Review",
      description:
        "A review platform for Mensa cafeteria food, allowing users to post ratings, photos, and feedback, with Firebase backend.",
      link: "https://github.com/borichab/mensa-food-review",
    },
    {
      title: "Beauty Salon Appointment Booking System",
      description:
        "Laravel-based web app for salon owners and customers with role-based access, service toggling, and appointment booking.",
      link: "https://github.com/borichab/beauty-salon",
    },
  ];
    return (
        <>
       <h2 className="text-2xl font-semibold text-center mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline flex items-center gap-1"
                >
                  View on GitHub <ArrowDownCircle className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        </>
    );
}

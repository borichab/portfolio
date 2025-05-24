import { Card, CardContent } from "./Card";
export default function Experience(){
    const experiences = [
        {
            role: "Software Developer – Working Student",
            company: "wwb Carwash GmbH & Co. KG, Germany",
            duration: "Jan 2025 – Present",
            description: "Developed PLC control modules using C#, JSON-RPC, and modern VueJS frontend.",
        },
        {
            role: "Full Stack Web Developer",
            company: "Code N Deploy Digital Solutions, India",
            duration: "Sep 2020 – Sep 2021",
            description: "Built 10+ Laravel-based applications for client-side projects using PHP, MySQL, and React.",
        },
    ];
    return(
    <>
        <h2 className="text-2xl font-semibold text-center mb-6">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="hover:shadow-xl transition">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{experience.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {experience.company} · {experience.duration}
                </p>
                <p className="text-sm text-black dark:text-white mb-3">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
    </>
    )
}
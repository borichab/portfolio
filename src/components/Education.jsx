import { Card, CardContent } from "./Card";
export default function Education() {
    const educations = [
        {
            degree: "M.Sc. Applied Computer Science",
            institution: "Hochschule Schmalkalden, Germany",
            duration: "Oct 2021 – Present",
        },
        {
            degree: "B.Tech Information Technology",
            institution: "Marwadi University, India",
            duration: "Aug 2016 – Jul 2020",
        },
    ];
    return (
        <>
            <h2 className="text-2xl font-semibold text-center mb-6">Education</h2>
            <div className="grid md:grid-cols-2 gap-6">
            {educations.map((education, index) => (
                <Card key={index} className="hover:shadow-xl transition">
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {education.institution} · {education.duration}
                    </p>
                </CardContent>
                </Card>
            ))}
            </div>
        </>
    );
}
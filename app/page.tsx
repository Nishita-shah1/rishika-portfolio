"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, ExternalLink, Code } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  const navItems = [
    { id: "about", label: "About me" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "My work" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact me" },
  ]

  const experiences = [
    {
      duration: "June 2024 - August 2024",
      company: "IGDTUW",
      position: "Mobile App Development Intern",
      description:
        "Developed cross-platform mobile apps using Flutter and Dart, focused on UI/UX, followed Agile methodology, and used Git for version control to deliver high-quality mobile solutions.",
    },
    {
      duration: "November 2024 - December 2024",
      company: "TSSC",
      position: "Internet Of Things Intern",
      description:
        "Worked on sensor integration, cloud data management, and automation using IoT technologies for real-time decision-making and smart system implementations.",
    },
  ]

  const projects = [
    {
      title: "Weather Application",
      description:
        "Built a weather forecasting app using live API integration, featuring location-based alerts and interactive 7-day forecasts using Flutter.",
      tech: ["Flutter", "API Integration", "Dart"],
      link: "#",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Designed a movie recommendation system using machine learning algorithms for personalized suggestions based on user preferences and viewing history.",
      tech: ["Machine Learning", "Python", "Algorithms"],
      link: "#",
    },
    {
      title: "Appointment Booking App",
      description:
        "Developed a role-based appointment booking system with secure login and interactive scheduling dashboard for seamless user experience.",
      tech: ["React.js", "Node.js", "Authentication"],
      link: "#",
    },
    {
      title: "Digital Wallet System",
      description:
        "Developed a digital wallet system enabling secure transactions, balance tracking, and user authentication with robust security measures.",
      tech: ["Security", "Database", "Authentication"],
      link: "#",
    },
  ]

  const skills = {
    languages: ["Java", "Python", "C++"],
    webDev: ["HTML", "CSS", "Node.js", "React.js"],
    csCore: ["OOPS", "DBMS", "OS", "CN"],
    tools: ["Github", "Firebase", "SQL"],
    softSkills: ["Problem-Solving", "Teamwork", "Analytical Thinking", "Communication"],
  }

  // Effect to handle scroll-based active section updates
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "about";
      const sections = document.querySelectorAll("section[id]");
      const navHeight = 80; // Approximate height of the nav bar

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  rounded-full px-6 py-2 text-sm font-medium transition-all
                  ${activeSection === item.id
                    ? "bg-pink-500 text-white hover:bg-pink-600"
                    : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-pink-200 shadow-lg">
                <img
                  src="/rishikapic.jpg"
                  alt="Rishika Rajora"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl text-gray-700 mb-2">Hi, I am</h2>
              <h1 className="text-6xl font-bold text-pink-500 mb-6" style={{ fontFamily: "cursive" }}>
                Rishika Rajora
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                A passionate Computer Science Engineering student specializing in Artificial Intelligence from IGDTUW.
                I love to learn new things always, so this learning attitude has led me to a situation where I can say
                proudly that I know Machine Learning, Web Development, and Mobile App Development. I am someone who
                thinks that there is no limit to learn and create things to solve problems, so I look around, get some
                ideas to solve the problems and through coding I bring them to life. When I'm not busy perfecting code
                or debugging applications, you'll catch me exploring new technologies, participating in hackathons, or
                mentoring fellow students. Problem-solving, innovation, and a touch of creativity - that's my thing!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="pt-24 pb-16 bg-gradient-to-br from-pink-100 to-rose-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                  <h4 className="text-lg font-semibold text-gray-600 mb-4">{exp.position}</h4>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <Button variant="ghost" size="sm" className="text-pink-500 hover:text-pink-600">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-24 pb-16 bg-gradient-to-br from-pink-100 to-rose-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-pink-200 text-pink-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.webDev.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-pink-200 text-pink-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">CS Core</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.csCore.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-pink-200 text-pink-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-pink-200 text-pink-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg border-0 md:col-span-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.softSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-pink-200 text-pink-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-12">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <Mail className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">rajorarishika52@gmail.com</p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <Phone className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+91 8279529960</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8">
              <Code className="w-5 h-5 mr-2" />
              LeetCode
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
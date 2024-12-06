const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe integration",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features",
    image: "/api/placeholder/600/400",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Weather forecast application using OpenWeather API with location tracking",
    image: "/api/placeholder/600/400",
    tags: ["React", "OpenWeather API", "ChartJS", "TailwindCSS"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project"
  },
]

export default function ProjectsView() {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Page Two</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque voluptate laborum saepe! Enim molestias cupiditate vel quas iste. Fuga facere molestiae et ducimus sequi maiores sunt vel nihil nobis, doloremque, eos, dignissimos illum. Ullam adipisci ipsum rem a, necessitatibus recusandae explicabo possimus repellat! Alias, officiis!
      </p>
    </div>
  )
}
export const realData = {
  about: {
    title: "About Me",
    description: `I started in Mechanical Engineering with a passion for robotics. In my Bachelor's, I built a fully
    autonomous mobile robot; in my Master's, I worked on upper-body control of Surena IV, Iran's national humanoid robot.
    In my Ph.D. at the University of Waterloo, I entered the realm of autonomous vehicles, focusing on multi-sensor fusion
    for perception and localization on the WATonoBus and WATonoTruck platforms. Today, I work at General Motors as an
    AI Developer, building software that spans embedded systems (QNX, RTOS, Safe Linux, Android) and the cloud.`,
    highlights: [
      "AI Developer at General Motors",
      "Ph.D. in Mechatronic Vehicle Systems, University of Waterloo (2021-2024)",
      "Core contributor to WATonoBus & WATonoTruck autonomous shuttle programs",
      "Co-inventor of US Patent 12,125,225 on monocular depth estimation",
    ],
    stats: [
      { label: "Years in Robotics & AI", value: "10+" },
      { label: "Sensor Technologies", value: "8" },
      { label: "Publications", value: "15+" },
      { label: "US Patent", value: "1" }
    ]
  },
  skills: {
    categories: [
      {
        title: "AI & Autonomous Systems",
        skills: ["Machine Learning", "Computer Vision", "LLMs", "Autonomous Vehicles", "Multi-Sensor Fusion", "Perception & Localization"]
      },
      {
        title: "Programming & Tools",
        skills: ["Python", "C/C++", "TypeScript", "ROS / ROS2", "PyTorch", "TensorFlow", "OpenCV", "Azure", "Databricks", "Kubernetes", "Firebase"]
      },
      {
        title: "Embedded & Cloud Platforms",
        skills: ["QNX", "Multi-Process RTOS", "Safe Linux", "Android", "Embedded Firmware", "CAN & Network Protocols"]
      },
      {
        title: "Sensor Technologies",
        skills: ["Radar Systems", "Camera Systems", "LiDAR", "Monocular Depth Estimation", "HD Map Integration", "Sensor Calibration"]
      },
      {
        title: "Academic & Research",
        skills: ["Technical Writing", "Patent Development", "Conference Presentations", "Peer Review", "Course Design & Teaching"]
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "WATonoBus — All-Weather Autonomous Shuttle",
      category: "Autonomous Vehicles",
      description: "Field-tested all-weather autonomous shuttle, the first of its kind in Canada, running daily service on the University of Waterloo Ring Road. I worked on perception and localization across rain, snow, and fog.",
      technologies: ["C++", "Python", "ROS", "Multi-Sensor Fusion", "Radar", "LiDAR", "HD Maps"],
      features: [
        "Multi-modal sensor fusion for object and snow-covered curb detection",
        "GNSS-denied localization in adverse weather",
        "Nearly two years of daily real-world shuttle service"
      ],
      demo: "https://arxiv.org/abs/2312.00938",
      demoLabel: "Paper",
      embedVideo: "f-SZ5iGpIDg",
      videos: [
        { label: "Snow Perception", url: "https://www.youtube.com/watch?v=LEIqpTD-pwQ" }
      ]
    },
    {
      id: 7,
      title: "WATonoTruck — Autonomous Truck Platform",
      category: "Autonomous Vehicles",
      description: "An autonomous truck platform from the Mechatronic Vehicle Systems Lab at the University of Waterloo. I worked on its perception and autonomy stack, including a human-follower mode where the truck detects, tracks, and follows a person in real time.",
      technologies: ["C++", "Python", "ROS", "Computer Vision", "Object Tracking", "Motion Planning"],
      features: [
        "Real-time human detection, tracking, and following",
        "Full autonomy stack on a drive-by-wire truck platform",
        "Field-tested outdoors at the University of Waterloo"
      ],
      embedVideo: "hUTmHuO-wqM",
      videos: [
        { label: "Human Follower", url: "https://www.youtube.com/watch?v=G1DspA44Eps" }
      ]
    },
    {
      id: 2,
      title: "US Patent 12,125,225 — Monocular Depth Estimation",
      category: "Patent",
      description: "Co-invented a monocular camera system performing depth estimation of objects surrounding a vehicle, using temporal frame overlap between front and side cameras to achieve stereo-like depth without LiDAR or radar. Assigned to the University of Waterloo and GM Global Technology Operations.",
      technologies: ["Computer Vision", "Camera Systems", "Depth Estimation", "Algorithm Development"],
      features: [
        "Stereo-like depth from monocular cameras via temporal frame overlap",
        "Eliminates dependence on LiDAR/radar for surround depth",
        "Granted October 2024 (US 12,125,225)"
      ],
      demo: "https://patents.google.com/patent/US12125225B1/en",
      demoLabel: "Patent",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Unified Multi-Frame Perception & Localization",
      category: "Ph.D. Thesis",
      description: "My doctoral thesis: a unified multi-frame strategy for autonomous vehicle perception and localization using radar, camera, LiDAR, and HD map fusion, validated on the WATonoBus platform.",
      technologies: ["Python", "C++", "Machine Learning", "ROS", "Radar", "Camera", "LiDAR", "HD Maps"],
      features: [
        "Robust radar object detection using HD map likelihoods",
        "Multi-sensor localization robust to sensor dropouts",
        "Published across IEEE ITSC and IEEE T-ITS"
      ],
      demo: "https://uwspace.uwaterloo.ca/items/f6459f15-d8b2-4c84-bc0e-1639425e1b0b",
      demoLabel: "Thesis",
      videos: [
        { label: "HD Map Fusion", url: "https://www.youtube.com/watch?v=cNb_OR19BQk" }
      ],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 4,
      title: "Autonomous Mobile Robotics Course",
      category: "Teaching & Open Source",
      description: "Designed a hands-on autonomous mobile robotics stack and course material (ME597, University of Waterloo), taking students from theory to a working TurtleBot4 autonomy stack.",
      technologies: ["Python", "ROS2", "TurtleBot4", "SLAM", "Path Planning"],
      features: [
        "Complete mobile robotics stack built step by step",
        "Used by UWaterloo mechanical engineering students",
        "Companion solution repo and course article"
      ],
      github: "https://github.com/aalghooneh/Autonomous_Mobile_Robotics_Student",
      demo: "https://github.com/aalghooneh/ME597_students",
      demoLabel: "Course Repo",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 5,
      title: "ParticleFilter-ROS2",
      category: "Open Source",
      description: "A straightforward, readable implementation of the particle filter for ROS2 on TurtleBot4 — built as a learning-first reference for probabilistic robot localization.",
      technologies: ["Python", "ROS2", "Probabilistic Robotics", "Localization"],
      features: [
        "Clean particle filter implementation for ROS2",
        "Runs on TurtleBot4 out of the box",
        "Companion to the mobile robotics course"
      ],
      github: "https://github.com/aalghooneh/ParticleFilter-ROS2",
      demo: "https://github.com/aalghooneh/Autonomous_Mobile_Robotics_Student",
      demoLabel: "Course Repo",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 6,
      title: "ARS408-21 Radar CAN Driver (C++)",
      category: "Open Source",
      description: "A C++ CAN driver for the Continental ARS408-21 automotive radar, plus a companion C++ DBSCAN clustering implementation for ROS — low-level sensor tooling from my perception work.",
      technologies: ["C++", "CAN Bus", "Radar", "ROS", "DBSCAN"],
      features: [
        "Direct CAN interface to the Continental ARS408-21",
        "Companion DBSCAN-ROS-CPP clustering package",
        "Battle-tested in autonomous vehicle research"
      ],
      github: "https://github.com/aalghooneh/ARS408-21-DRIVER-CPP",
      demo: "https://github.com/aalghooneh/DBSCAN-ROS-CPP",
      demoLabel: "DBSCAN Repo",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400"
    }
  ],
  experience: [
    {
      id: 1,
      title: "AI Developer",
      company: "General Motors",
      period: "2024 - Present",
      location: "Ontario, Canada",
      description: "Developing AI software spanning embedded and cloud systems, grounded in a strong mathematical foundation — building complex applications in C, C++, and Python across Android, Safe Linux, multi-process RTOS, and QNX.",
      achievements: [
        "AI development across embedded (QNX, RTOS, Safe Linux, Android) and cloud platforms",
        "Network communication protocols and embedded firmware development",
        "Bridging production vehicle software with modern AI tooling"
      ]
    },
    {
      id: 2,
      title: "Ph.D. Researcher - Mechatronic Vehicle Systems Lab",
      company: "University of Waterloo",
      period: "2021 - 2024",
      location: "Waterloo, ON, Canada",
      description: "Doctoral research in autonomous vehicle perception and localization on the WATonoBus and WATonoTruck platforms, focusing on multi-sensor fusion of radar, camera, LiDAR, and high-definition maps.",
      achievements: [
        "Developed a unified multi-frame strategy for AV perception and localization",
        "Core contributor to WATonoBus, Canada's first all-weather autonomous shuttle",
        "Co-invented US Patent 12,125,225 (monocular depth estimation), assigned to UWaterloo & GM",
        "Published in IEEE T-ITS, IEEE ITSC, Sensors, and Automotive Innovation",
        "Designed and taught a hands-on autonomous mobile robotics course (ME597)"
      ]
    },
    {
      id: 3,
      title: "M.Sc. Researcher - Humanoid Robotics",
      company: "University of Tehran",
      period: "2017 - 2020",
      location: "Tehran, Iran",
      description: "Worked on upper-body control of Surena IV, Iran's national humanoid robot, including force and state estimation and control of the robotic hand under limited measurements.",
      achievements: [
        "Force and state estimation for the Surena IV robotic hand",
        "Mathematical modeling of a nylon-based smart force sensor",
        "Published at the International Conference on Robotics and Mechatronics (ICRoM)"
      ]
    }
  ],
  contact: {
    title: "Let's Collaborate on Innovation",
    description: "Whether you're interested in autonomous vehicles, AI and sensor fusion, embedded systems, or full-stack development, I'm excited to discuss potential collaborations and opportunities.",
    email: "a.alghooneh@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahmad-alghooneh-176403169/",
    github: "https://github.com/aalghooneh",
    scholar: "https://scholar.google.com/citations?user=svgG4CQAAAAJ&hl=en",
    availability: "Open to Collaborations & Opportunities"
  }
};

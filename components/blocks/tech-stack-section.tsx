"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { MaterialIcon } from "../ui/material-icon";
import { useState, useEffect } from "react";
import StackIcon from "tech-stack-icons";

// Custom SVG components for missing icons
const CustomIcons = {
  tensorflow: () => (
    <svg viewBox="0 0 24 24" fill="#FF6F00">
      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z" />
    </svg>
  ),
  jupyter: () => (
    <svg viewBox="0 0 24 24">
      <g fill="#F37626">
        <path d="M12 21.99c-5.524 0-10-4.477-10-10s4.476-10 10-10 10 4.477 10 10-4.476 10-10 10zm0-1.5c4.694 0 8.5-3.806 8.5-8.5S16.694 3.49 12 3.49s-8.5 3.806-8.5 8.5 3.806 8.5 8.5 8.5z"/>
        <circle cx="12" cy="12" r="1.5"/>
        <circle cx="7" cy="12" r="1"/>
        <circle cx="17" cy="12" r="1"/>
      </g>
    </svg>
  ),
  mixpanel: () => (
    <svg viewBox="0 0 24 24" fill="#7856FF">
      <path d="M19.7 11.5l-2.9-2.9c-.3-.3-.8-.3-1.1 0L12 12.3 8.3 8.6c-.3-.3-.8-.3-1.1 0l-2.9 2.9c-.3.3-.3.8 0 1.1l6.8 6.8c.3.3.8.3 1.1 0l6.8-6.8c.3-.3.3-.8 0-1.1z"/>
    </svg>
  ),
  ios: () => (
    <svg viewBox="0 0 24 24">
      <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882z" fill="#000000"/>
      <path d="M15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.014.128.019.255.019.381z" fill="#000000"/>
    </svg>
  ),
  expo: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.211 22.988c-3.432-.033-6.428-1.85-8.125-4.56l.002-.006c.841 1.075 6.133 6.609 8.903 3.807.113-.115.214-.23.3-.36.545-.82.604-1.857.144-2.753-.733-1.42-2.439-1.935-3.738-2.37-1.192-.4-2.402-.824-3.425-1.616-.573-.443-1.078-1.006-1.33-1.677-.47-1.276-.056-2.84.874-3.826.788-.84 1.897-1.342 3.001-1.716 1.493-.497 3.008-.85 4.56-1.098 1.427-.235 2.87-.389 4.31-.501.787-.06 1.577-.1 2.366-.128.437-.017.877-.013 1.314-.043.347-.023.695-.059 1.04-.113.539-.087 1.076-.185 1.616-.269.518-.082 1.082-.129 1.514-.443.183-.133.361-.296.429-.517.103-.33-.057-.668-.244-.942-.227-.336-.505-.645-.825-.904-.527-.432-1.092-.786-1.697-1.073-.847-.398-1.775-.636-2.704-.837-.923-.198-1.86-.314-2.798-.402-.938-.088-1.879-.145-2.821-.147-2.293-.004-4.601.344-6.772 1.013-1.923.602-3.782 1.477-5.382 2.723-1.517 1.181-2.818 2.686-3.675 4.433-.89 1.82-1.288 3.861-1.077 5.87.207 1.929.913 3.807 2.014 5.391 1.067 1.537 2.488 2.815 4.112 3.718 1.57.874 3.329 1.411 5.119 1.587.947.093 1.902.099 2.852.05 1.998-.105 3.965-.568 5.748-1.442 1.548-.76 2.945-1.813 4.061-3.148.42-.498.805-1.029 1.134-1.598.363-.628.672-1.295.891-1.995.215-.686.337-1.405.332-2.128-.006-.71-.167-1.417-.44-2.069-.303-.728-.784-1.373-1.391-1.87-.642-.525-1.4-.908-2.189-1.154-.828-.259-1.698-.367-2.561-.419-.966-.056-1.938-.015-2.897.106-.907.117-1.813.273-2.695.531-.602.175-1.206.393-1.719.754-.521.367-.941.898-1.085 1.514-.143.615-.055 1.276.233 1.838.351.685.952 1.188 1.624 1.539.922.481 1.942.745 2.957.943 1.377.271 2.818.357 4.184.068.613-.13 1.233-.347 1.713-.759.435-.374.734-.908.779-1.482.045-.574-.164-1.159-.558-1.578-.518-.552-1.289-.775-2.023-.869-.761-.098-1.538-.099-2.299-.018-.609.065-1.233.203-1.746.545-.319.213-.589.519-.705.881-.121.378-.068.803.138 1.139.246.396.669.629 1.105.751.905.253 1.886.16 2.765-.143.12-.041.24-.088.354-.144.147-.073.287-.16.392-.285.076-.093.134-.204.157-.322.022-.118.007-.245-.047-.35-.089-.175-.287-.255-.467-.283-.186-.027-.376-.013-.559.031-.246.06-.487.143-.736.188-.505.091-1.037.089-1.527-.083-.182-.064-.363-.153-.495-.298-.131-.144-.211-.348-.188-.548.029-.234.199-.432.406-.536.427-.215.91-.26 1.381-.291.635-.041 1.285.012 1.888.193.42.127.839.326 1.129.658.235.27.385.622.381.982-.005.397-.188.776-.467 1.057-.405.408-.947.619-1.498.752-.704.169-1.441.197-2.161.14-.918-.072-1.832-.297-2.674-.685-.466-.214-.918-.475-1.276-.833-.335-.336-.567-.778-.628-1.252-.067-.517.064-1.049.354-1.485.335-.505.811-.895 1.335-1.19.77-.432 1.624-.681 2.485-.859.97-.201 1.962-.304 2.955-.351.984-.047 1.973-.026 2.95.106.857.115 1.712.299 2.527.589.754.269 1.471.645 2.099 1.143.582.461 1.073 1.043 1.423 1.711.375.715.593 1.517.6 2.321.009.791-.162 1.582-.451 2.318-.269.684-.648 1.327-1.085 1.927-1.011 1.384-2.392 2.493-3.942 3.262-1.627.808-3.443 1.277-5.277 1.388" fill="#000000"/>
    </svg>
  ),
  vercel: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 1L24 22H0L12 1Z" fill="#000000"/>
    </svg>
  ),
  huggingface: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a2.824 2.824 0 1 1 0 5.647 2.824 2.824 0 0 1 0-5.647zm-4.235 8.47a2.824 2.824 0 1 1 0 5.648 2.824 2.824 0 0 1 0-5.647zm8.47 0a2.824 2.824 0 1 1 0 5.648 2.824 2.824 0 0 1 0-5.647z" fill="#FFD21E"/>
    </svg>
  ),
  clerk: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c1.853 0 3.36 1.507 3.36 3.36S13.853 11.52 12 11.52 8.64 10.013 8.64 8.16 10.147 4.8 12 4.8zM6 18.24v-1.44c0-1.989 3.977-3.036 6-3.036s6 1.047 6 3.036v1.44H6z" fill="#6C47FF"/>
    </svg>
  ),
  posthog: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm0 15.75a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5z" fill="#F54E00"/>
    </svg>
  ),
  plausible: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5v-9l7.5 4.5-7.5 4.5z" fill="#5850EC"/>
    </svg>
  ),
  ruby: () => (
    <svg viewBox="0 0 24 24">
      <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h-.016c.109-.964 1.689-19.332 1.689-19.332l.857-.143c.003.045.136.489.139.535l.199 3.708 1.497-3.707L24 1.244 20.156.083zm-11.563 14.5l-1.6 2.801h6.405l-1.6-2.801h-3.205zm-5.387 3.358c-.057.112-.477.961-.477.961l7.477.004.926-1.623-7.926.658zm15.581-3.416l-3.526 4.426 4.801-.406.796-4.02h-2.071zm-13.465 4.37l7.608.005-1.892-3.335-5.716 3.33zm10.797.004l4.436-.338-3.843-4.129-2.273 3.451 1.68 1.016zm-4.796-4.37l2.208 3.875 2.208-3.875h-4.416zM7.334 11.821l.455 4.066 1.867-3.283zm6.916 4.066l.455-4.066-2.322.784zM6.733 21.669l-.492-.908L20.4 2.404l.491.908L6.733 21.669zm6.547-12.167c.685-.198 1.512.05 1.512.05.153.044.308.087.463.129l.311-3.287c-.319-.1-.637-.199-.956-.297l.002-.005s-1.967-.557-4.193.201c-2.226.757-3.327 2.339-3.327 2.339s.589-.262 1.544-.525c.957-.261 2.18-.215 2.18-.215l.273 2.889.084-.003c.315-.099.704-.161 1.073-.189l.434-1.087z" fill="#CC342D"/>
    </svg>
  ),
  azure: () => (
    <svg viewBox="0 0 24 24">
      <path d="M13.05 4.24L6.56 18.05.63 20.15a.2.2 0 0 1-.25-.25l2.09-5.93L13.05 4.24zm7.22 14.67l-2.82 4.7a.38.38 0 0 1-.67.06L6.27 8.38l-.06-.09L13.05 4.24l7.22 14.67z" fill="#0089D6"/>
    </svg>
  ),
  gcloud: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm7.5-11c0 4.136-3.364 7.5-7.5 7.5S4.5 16.136 4.5 12 7.864 4.5 12 4.5s7.5 3.364 7.5 7.5zm-7.5-5.5c-3.032 0-5.5 2.468-5.5 5.5s2.468 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5z" fill="#4285F4"/>
    </svg>
  ),
  rails: () => (
    <svg viewBox="0 0 24 24">
      <path d="M20.8848485 15.8107143v1.1635714h1.9818182c.4060606 0 1.1030303-.315 1.1272727-1.19571427v-.45c0-.75214286-.5818182-1.1957143-1.1272727-1.1957143h-.9878788v-.54h1.9575757v-1.17h-1.8787878c-.4848485 0-1.1272728.42428573-1.1272728 1.19571428v.45c0 .75214286.6424243 1.1957143 1.1272728 1.1957143h.9636363v.54h-1.9575757zm-16.50790933.0385714h1.95757575v1.1957143h1.13636364v-1.1957143h.92424242v1.1957143h1.13636364v-3.5871429h-1.13636364v1.1957143h-.92424242v-1.1957143h-1.13636364v1.1957143h-1.95757575v-1.1957143h-1.13636364v3.5871429h1.13636364v-1.1957143zm7.93939393-2.3914286h1.13636364v3.5871429h-1.13636364v-3.5871429zm2.22060606 0h2.4060606c.4848485 0 1.1272728.42428572 1.1272728 1.19571428v2.3914286h-1.1363637v-2.3914286h-2.3969697v2.3914286h-1.1363636v-3.5871429h1.1363636zm4.4787879 0h2.4060606c.4848485 0 1.1272727.42428572 1.1272727 1.19571428v2.3914286h-1.1363636v-2.3914286h-2.3969697v2.3914286h-1.1363636v-3.5871429h1.1363636z" fill="#CC0000"/>
      <path d="M24 18.375v-12.75c0-1.45785714-1.2121212-2.625-2.6666667-2.625h-18.66666663c-1.45454546 0-2.66666667 1.16714286-2.66666667 2.625v12.75c0 1.4578571 1.21212121 2.625 2.66666667 2.625h18.66666663c1.4545455 0 2.6666667-1.1671429 2.6666667-2.625zm-2.6666667 1.5h-18.66666663c-.72727273 0-1.33333334-.5835714-1.33333334-1.5v-12.75c0-.91642857.60606061-1.5 1.33333334-1.5h18.66666663c.7272728 0 1.3333334.58357143 1.3333334 1.5v12.75c0 .9164286-.6060606 1.5-1.3333334 1.5z" fill="#CC0000"/>
    </svg>
  )
};

const TechIcon = ({ name, iconName }: { name: string; iconName: string }) => {
  const CustomIcon = CustomIcons[iconName as keyof typeof CustomIcons];

  if (CustomIcon) {
    return (
      <div className="w-full h-full">
        <CustomIcon />
      </div>
    );
  }

  return (
    <StackIcon 
      name={iconName}
      style={{ width: '100%', height: '100%' }}
      className="object-contain"
    />
  );
};

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("Mobile App Development");
  const rocketControls = useAnimation();
  
  // Animation for the rocket icon
  useEffect(() => {
    const sequence = async () => {
      await rocketControls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 1.5, ease: "easeInOut" }
      });
      setTimeout(sequence, 3000);
    };
    
    sequence();
    
    return () => rocketControls.stop();
  }, [rocketControls]);
  
  const categories = [
    {
      name: "Web App Development",
      technologies: [
        { name: "React", iconName: "reactjs" },
        { name: "Next.js", iconName: "nextjs2" },
        { name: "Ruby", iconName: "ruby" },
        { name: "Rails", iconName: "rails" },
        { name: "Node.js", iconName: "nodejs" },
        { name: "Vue", iconName: "vuejs" },
        { name: "TypeScript", iconName: "typescript" },
        { name: "Python", iconName: "python" }
      ]
    },
    {
      name: "Mobile App Development",
      technologies: [
        { name: "React Native", iconName: "reactjs" },
        { name: "Flutter", iconName: "flutter" },
        { name: "Swift", iconName: "swift" },
        { name: "Kotlin", iconName: "kotlin" },
        { name: "Android", iconName: "android" },
        { name: "iOS", iconName: "ios" },
        { name: "Expo", iconName: "expo" },
        { name: "SwiftUI", iconName: "swift" }
      ]
    },
    {
      name: "AI Development",
      technologies: [
        { name: "Python", iconName: "python" },
        { name: "PyTorch", iconName: "pytorch" },
        { name: "TensorFlow", iconName: "tensorflow" },
        { name: "OpenAI", iconName: "openai" },
        { name: "Streamlit", iconName: "streamlit" },
        { name: "Jupyter", iconName: "jupyter" },
        { name: "Hugging Face", iconName: "huggingface" },
        { name: "LangChain", iconName: "python" }
      ]
    },
    {
      name: "Cloud & DevOps",
      technologies: [
        { name: "AWS", iconName: "aws" },
        { name: "Azure", iconName: "azure" },
        { name: "Google Cloud", iconName: "gcloud" },
        { name: "Docker", iconName: "docker" },
        { name: "Kubernetes", iconName: "kubernetes" },
        { name: "Vercel", iconName: "vercel" },
        { name: "Railway", iconName: "railway" },
        { name: "Cloudflare", iconName: "cloudflare" }
      ]
    },
    {
      name: "Cybersecurity",
      technologies: [
        { name: "Auth0", iconName: "auth0" },
        { name: "Prisma", iconName: "prisma" },
        { name: "Supabase", iconName: "supabase" },
        { name: "Elastic", iconName: "elastic" },
        { name: "Datadog", iconName: "datadog" },
        { name: "Grafana", iconName: "grafana" },
        { name: "Clerk", iconName: "clerk" },
        { name: "NextAuth", iconName: "nextjs2" }
      ]
    },
    {
      name: "Digital Marketing",
      technologies: [
        { name: "Analytics", iconName: "analytics" },
        { name: "Hotjar", iconName: "hotjar" },
        { name: "Meta", iconName: "meta" },
        { name: "Mixpanel", iconName: "mixpanel" },
        { name: "Lokalise", iconName: "lokalise" },
        { name: "LogRocket", iconName: "logrocket" },
        { name: "Posthog", iconName: "posthog" },
        { name: "Plausible", iconName: "plausible" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center gap-2.5 bg-[#D4F6FF] px-6 py-2 rounded-full border border-[#C6E7FF] cursor-default shadow-sm hover:shadow-md transition-all duration-300"
          >
            <motion.span
              animate={rocketControls}
              className="text-gray-800"
            >
              <MaterialIcon 
                name="rocket_launch"
                size="sm"
                className="h-4 w-4 relative -top-px"
              />
            </motion.span>
            <span className="text-sm font-medium text-gray-800 tracking-wide">
              Cutting-Edge Tech Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl mx-auto"
          >
            Technologies that Drive Our Innovation
          </motion.h2>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 pt-10 max-w-4xl mx-auto"
          >
            {categories.map((category, idx) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                whileHover={{ 
                  scale: activeCategory === category.name ? 1.02 : 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.name
                    ? "bg-[#C6E7FF] text-gray-900 shadow-md shadow-[#D4F6FF]/50 border border-[#C6E7FF] font-medium"
                    : "bg-white text-gray-700 hover:bg-[#D4F6FF]/30 border border-gray-100 hover:border-[#C6E7FF] font-normal"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Technologies Grid */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-6"
            >
              {categories
                .find(cat => cat.name === activeCategory)
                ?.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 1,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C6E7FF] via-[#D4F6FF] to-[#FFDDAE]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative flex flex-col items-center gap-4 p-6 rounded-xl border border-gray-100 bg-white hover:border-[#C6E7FF] hover:shadow-xl hover:shadow-[#D4F6FF]/20 transition-all duration-300">
                      <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <TechIcon 
                          name={tech.name}
                          iconName={tech.iconName}
                        />
                      </div>
                      <span className="text-sm md:text-base text-gray-900 font-medium text-center mt-2">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <motion.button 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-gray-700 border border-gray-100 hover:bg-[#D4F6FF] hover:border-[#C6E7FF] hover:text-gray-900 transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05, 
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Technologies
            <MaterialIcon 
              name="arrow_forward" 
              size="sm"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
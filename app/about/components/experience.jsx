"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    startDate: "Mar 2023",
    endDate: "April 2023",
    company: "RMAB GEMA Ramadhan",
    position: "Pengajar Kelompok",
    type: "Kepanitiaan",
    location: "Lhoksukon, Aceh Utara",
    description:
      "Mengajar kelompok belajar shalahuddin al-Ayyubi dalam sejarah Islam, lalu membimbing anggota kelompok untuk mempersiapkan setiap lomba yang diikutinya.",
    skills: ["Sejarah", "Syarhil", "Qiraah Al-Qur'an", "Mentoring"],
  },
  {
    id: 2,
    startDate: "Feb 2024",
    endDate: " Mar 2024",
    company: "KAREEM V",
    position: "Mentor",
    type: "Kepanitiaan",
    location: "Lhokseumawe, Aceh",
    description:
      "fokus untuk membimbing peserta dalam membaca al-qur'an dengan baik dan benar, serta memberikan pemahaman mereka tentang karakteristik dan niai-nilai islami.",
    skills: ["Mentoring", "Qiraah Al-qur'an", "Public Speaking", "Sejarah"],
  },
  {
    id: 3,
    startDate: "Oct 2022",
    endDate: "Nov 2022",
    company: "PSC & HTQ Gontor 8",
    position: "Ketua Panitia",
    type: "Kepanitiaan",
    location: "Seulimum, Aceh Besar",
    description:
      "Menentukan tema, mengatur jadwal acara, mengkoordinasi tim panitia, serta memastikan semua persiapan dan pelaksanaan acara berjalan lancar.",
    skills: ["Leadership", "Coordination", "responsibility", "Teamwork"],
  },
  {
    id: 4,
    startDate: "Mei 2023",
    endDate: "Jun 2023",
    company: "Khutbatul 'Arsy Gontor 8",
    position: "Ketua Panitia",
    type: "Kepanitiaan",
    location: "Seulimuem, Aceh Besar",
    description:
      "Mengkoordinasi seluruh rangkaian acara mulai dari persiapan hingga pelaksanaan, memastikan semuanya berjalan lancar dan sesuai rencana.",
    skills: ["Leadership", "Coordination", "responsibility", "Teamwork"],
  },
  {
    id: 5,
    startDate: "Apr 2023",
    endDate: "Sep 2023",
    company: "OPPM 598",
    position: "Ketua Pengajaran",
    type: "Organisasi Sekolah",
    location: "Seulimuem, Aceh Besar",
    description:
      "Mengemban tanggung jawab dalam mengatur kegiatan pengajaran siang dan muhadharah  di OPPM 2023, termasuk menyusun daftar pelajaran, mengkoordinasi pengajar, dan memastikan kualitas pengajaran yang diberikan.",
    skills: ["Leadership", "Coordination", "responsibility", "Teamwork"],
  },
  {
    id: 6,
    startDate: "Mei 2022",
    endDate: "Jan 2023",
    company: "Kepengurusan Harian",
    position: "Pengurus Santri Baru",
    type: "Organisasi ",
    location: "Seulimuem, Aceh Besar",
    description:
      "Developed and maintained web applications using React, Next.js, and Laravel. Focused on creating responsive and user-friendly interfaces while ensuring backend functionality.",
    skills: [
      "React",
      "Next.js",
      "Laravel",
      "MySQL",
      "JavaScript",
      "TypeScript",
      "Teamwork",
    ],
  },
  {
    id: 7,
    startDate: "Mar 2024",
    endDate: "Sekarang",
    company: "Freelance",
    position: "Buat Web & Design Grafis",
    type: "Jual Jasa",
    location: "Cairo, Egypt",
    description:
      "Aktif membuka jasa pembuatan website dan design grafis untuk berbagai kebutuhan klien, mulai dari website pribadi hingga bisnis kecil.",
    skills: [
      "WordPress",
      "Elementor",
      "Canva",
      "Photoshop",
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "React",
      "Notion",
    ],
  },
];

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr variant="long"></Hr>
        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
        >
          Pengalaman Organisasi
        </motion.h1>
      </div>
    </div>
  );
}

function TimelineCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`flex ps-10 md:ps-0 ${
        isEven
          ? "md:justify-center md:translate-x-68"
          : "md:justify-center md:-translate-x-68"
      } justify-center mb-4`}
    >
      <div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-sm font-bold">{experience.startDate}</div>
            <div className="text-xs text-gray-300">Start</div>
          </div>
          <div className="w-px h-8 bg-gray-500"></div>
          <div className="text-center">
            <div className="text-sm font-bold">{experience.endDate}</div>
            <div className="text-xs text-gray-300">End</div>
          </div>{" "}
          <div className="w-px h-8 bg-gray-500"></div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400">
              {experience.location}
            </div>
            <div className="text-xs text-gray-300">Location</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative group ${
        isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
      } md:w-1/2`}
    >
      {" "}
      {/* Card */}
      <div
        className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0`}
      >
        {/* Company & Position */}
        <div className="mb-4">
          <h3 className="font-bold text-xl text-black mb-1">
            {experience.company}
          </h3>
          <h4 className="font-medium text-lg text-gray-700">
            {experience.position}
            <span className="text-sm font-normal text-gray-500 ml-2">
              • {experience.type}
            </span>
          </h4>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-justify leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="mx-auto container px-6 py-10">
      <div className="flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <>
      <Title />
      <Wrapper>
        {" "}
        <div className="relative w-full max-w-6xl mx-auto">
          {" "}
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>{" "}
          {/* Experience cards */}
          <div className="space-y-12 md:space-y-16 relative">
            <AnimatePresence>
              {displayedExperiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Timeline period card - flows naturally above content */}
                  <TimelineCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />

                  {/* Timeline dot - positioned at the start of the experience card */}
                  <div
                    className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
                  />

                  {/* Experience content card */}
                  <ExperienceCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
          {/* Expand/Collapse button */}
          {experiences.length > 3 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    Show Less
                    <svg
                      className="w-4 h-4 transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    View More Experience
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </motion.div>
          )}{" "}
          {/* Gradient fade effect at bottom */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
          )}
        </div>
      </Wrapper>
    </>
  );
}

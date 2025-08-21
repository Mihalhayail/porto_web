import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faBook,
  faGraduationCap,
  faTrophy,
  faAward,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/me4.jpg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";
import Me7 from "@/public/image/me7.jpg";
import Me8 from "@/public/image/me8.jpg";
import Me9 from "@/public/image/me9.jpg";
import Me10 from "@/public/image/me10.jpg";
import Me11 from "@/public/image/me11.jpg";
import Me12 from "@/public/image/me12.jpg";
import Small1 from "@/public/image/small1.jpg";
import Small2 from "@/public/image/small2.jpg";
import Misbah from "@/public/image/misbah.JPG";

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      <motion.div
        className="flex justify-center items-start flex-col mb-5"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false);

  const achievementsByYear = {
    2016: [
      {
        icon: faTrophy,
        title: "Juara 2 Pidato Bahasa Indonesia",
        subtitle: "Personi Kabupaten Aceh Utara",
        date: "Juli 2016",
        color: "from-yellow-400 to-orange-500",
      },
    ],
    2017: [
      {
        icon: faBook,
        title: "Story Teller ",
        subtitle: "Strory Telling Competition Kearsipan Aceh Utara",
        date: "Juni 2017",
        color: "from-yellow-400 to-orange-500",
      },
    ],
    2019: [
      {
        icon: faAward,
        title: "Finalis Muhadatsah Bahasa Arab",
        subtitle: "Language Cup Al-Muslimun",
        date: "November 2019",
        color: "from-yellow-400 to-orange-500",
      },
      {
        icon: faBook,
        title: "Finalis Stroy Telling Bahasa Arab",
        subtitle: "Language Cup Al-Muslimun",
        date: "November 2019",
        color: "from-yellow-400 to-orange-500",
      },
    ],
    2021: [
      {
        icon: faTrophy,
        title: "Harapan 2 Fahmil Qur'an | Prov. Aceh",
        subtitle: "Musabaqah Tunas Ramadhan 2021",
        date: "April 2024",
        color: "from-yellow-400 to-orange-500",
      },
      {
        icon: faAward,
        title: "Juara Umum 1 | Semester 1",
        subtitle: "PMD Gontor Kampus 8",
        date: "November 2021",
        color: "from-blue-500 to-purple-600",
      },
    ],
    2022: [
      {
        icon: faTrophy,
        title: "Juara 1 Pidato Bahasa Arab",
        subtitle: "PSC & HTQ PMD Gontor Kampus 8",
        date: "Januari 2022",
        color: "from-amber-600 to-yellow-600",
      },

      {
        icon: faMedal,
        title: "Adika Teladan | Penegak Pramuka",
        subtitle: "GT-05 Red Eagle",
        date: "November 2022",
        color: "from-amber-600 to-yellow-600",
      },
    ],
    2023: [
      {
        icon: faGraduationCap,
        title: "Ketua Pantia PSC & HTQ",
        subtitle: "PSC & HTQ PMD Gontor Kampus 8",
        date: "Januari 2023",
        color: "from-green-500 to-teal-500",
      },
      {
        icon: faGraduationCap,
        title: "Ketua Panitia Khutbatul Arsy",
        subtitle: "PMD Gontor Kampus 8",
        date: "Juni 2023",
        color: "from-green-500 to-teal-500",
      },
    ],
  };

  // Flatten all achievements into a single array for easier limiting
  const allAchievements = Object.entries(achievementsByYear)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .flatMap(([year, achievements]) =>
      achievements.map((achievement) => ({ ...achievement, year }))
    );

  const visibleAchievements = isExpanded
    ? allAchievements
    : allAchievements.slice(0, 6);
  const hasMoreAchievements = allAchievements.length > 6;

  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        {" "}
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Pendidikan
          </h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Mari cari tau latar belakang pendidikan dan prestasi yang telah aku
            capai selama perjalanan studiku.
          </p>
        </motion.div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section - Left */}
          <motion.div
            className="px-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <br />
            {/* MIN Section */}
            <div className="font-medium text-lg mb-4">2012 - 2018</div>
            <div>
              <h2 className="font-semibold text-xl">MIN 6 Aceh Utara</h2>
              <h3 className="text-md font-normal mb-3">
                MIN | Madrasah Ibtidaiyah Negeri
              </h3>
              <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Small1}
                    width={400}
                    height={225}
                    alt="smp"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Small2}
                    width={400}
                    height={225}
                    alt="smp"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Misbah}
                    width={400}
                    height={225}
                    alt="smp"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-justify title text-lg">
                  Di MIN 6 Aceh Utara, saya memulai perjalanan pendidikan saya
                  dengan fokus pada dasar-dasar ilmu pengetahuan umum dan agama.
                  Saya belajar membaca, menulis, dan berhitung, serta mulai
                  memahami nilai-nilai moral dan etika yang penting dalam
                  kehidupan.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                  Nilai : Istimewa
                </div>
              </div>
            </div>
            <br />
            <br />
            {/* MTSs Section */}
            <div className="font-medium text-lg mb-4">2018 - 2021</div>
            <div>
              <h2 className="font-semibold text-xl">
                Dayah Terpadu Al-Muslimun, Aceh Utara
              </h2>
              <h3 className="text-md font-normal mb-3">
                MTSs | Program Tahfidzul Qur'an
              </h3>
              <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me7}
                    width={400}
                    height={225}
                    alt="smp"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me11}
                    width={400}
                    height={225}
                    alt="smp"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me12}
                    width={400}
                    height={225}
                    alt="smp"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-justify title text-lg">
                  Di Dayah Terpadu Al-Muslimun, saya lebih fokus pada
                  pembalajaran agama Islam, terutama pada hafalan Al-Qur'an.
                  Saya membangun fondasi sayapada nilai-nilai Islam yang kuat,
                  yang membentuk karakter saya hingga saat ini.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                  Status : Alumni
                </div>
              </div>
            </div>
            <br />
            <br />
            {/* SMA Section */}
            <div className="font-medium text-lg mb-4">2021 - 2023</div>
            <div>
              <h2 className="font-semibold text-xl">
                PMD Gontor Kampus 8, Darul Amien, Aceh
              </h2>
              <h3 className="text-md font-normal mb-3">
                Program Intensif | 2,5 Tahun
              </h3>
              <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me8}
                    width={400}
                    height={225}
                    alt="sma"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me10}
                    width={400}
                    height={225}
                    alt="sma"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me9}
                    width={400}
                    height={225}
                    alt="sma"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-justify title text-lg">
                  Di PMD Gontor, saya menjalani pendidikan intensif selama 2,5
                  tahun, di mana saya belajar{" "}
                  <span className="text-black font-medium">
                    bahasa Arab dan bahasa Inggris,
                  </span>{" "}
                  saya fokus pada pengembangan soft skills seperti kepemimpinan,
                  komunikasi, dan organisasi.
                  <br />
                  <br />
                  Di sini, saya juga aktif dalam berbagai kegiatan
                  ekstrakurikuler seperti pramuka, dan public speaking, dan juga
                  berkecimpung sebagai ketua dalam berbagai kepanitiaan seperti
                  Khutbatul Arsy dan PSC &amp; HTQ.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                  Status : Alumnus
                </div>
              </div>
            </div>

            <br />
            <br />
            {/* Kuliah Section */}
            <div className="font-medium text-lg mb-4">2024 - Sekarang</div>
            <div>
              <h2 className="font-semibold text-xl">
                Universitas Al-Azhar, Mesir
              </h2>
              <h3 className="text-md font-normal mb-3">
                S1 Prodi Umum | Fakultas Bahasa Arab
              </h3>
              <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me4}
                    width={400}
                    height={225}
                    alt="Universitas"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me5}
                    width={400}
                    height={225}
                    alt="Universitas"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me6}
                    width={400}
                    height={225}
                    alt="Universitas"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-justify title text-lg">
                  Bercita-cita menjadi seorang Sastrawan sekaligus yang ahli
                  dalam Teknologi, saya saat ini sedang menempuh pendidikan{" "}
                  <span className="text-black font-medium">S1 Bahasa Arab</span>{" "}
                  di{" "}
                  <span className="text-black font-medium">
                    Universitas Al-Azhar Mesir
                  </span>
                  . Perjalanan saya di bidang sastra arab sekaligus teknologi
                  digital didorong oleh ambisi saya untuk memajukan dunia sastra
                  diantara gempuran modernisasi yang membara.
                  <br />
                  <br />
                  Selain menekuni bidang Akademik yang berminat terhadap membaca
                  dan menelaah buku sastra klasik, saya juga aktif dalam
                  pengembangan teknologi yang sering dianggap bertolak belakang.
                  Saya memiliki ambisi dengan memiliki pengalaman men uai
                  berbagai organisasi dan kepanitiaan, saya dapat memajukan
                  dunia sastra arab dengan teknologi yang saya kuasai.{" "}
                  {/* <span className="text-black font-medium">
                    national or international technology competitions
                  </span>
                  , earning recognition through awards such as{" "}
                  <span className="text-black font-medium">
                    PIMNAS Finalist, Indonesia Inventor Day Gold Medalist, Top 3
                    at LIDM 2024
                  </span>
                  , and more. */}
                  <br />
                  <br />
                  Saya yakin dengan menggabungkan{" "}
                  <span className="text-black font-medium">
                    filsafat, sastra arab, dan teknologi
                  </span>{" "}
                  dalam diri saya. saya akan tumbuh dengan nilai-nilai zaman
                  dahulu sembari mengikuti realita zaman. Dengan terus belajar,
                  produktif, dan berkolaborasi—saya bersemangat untuk terus
                  berkembang dan berkontribusi dalam dunia yang berlari ke masa
                  depan.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                  نتيجة : مقبول
                </div>
              </div>
            </div>
          </motion.div>{" "}
          {/* Achievements Section - Right */}
          <motion.div
            className="flex flex-col justify-start px-5 md:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-semibold text-xl mt-7">Prestasi</h2>
            <p className="text-md font-normal mb-3 md:mb-6">
              Beberapa prestasi yang telah aku raih selama perjalanan studiku.
            </p>

            {/* Achievements Container with transparent bottom effect */}
            <div className="relative">
              <div className="space-y-4">
                {/* Show visible achievements */}
                <AnimatePresence>
                  {visibleAchievements.map((achievement, index) => (
                    <motion.div
                      key={`${achievement.year}-${index}`}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      {/* Year indicator for first achievement of each year */}
                      {index === 0 ||
                      visibleAchievements[index - 1]?.year !==
                        achievement.year ? (
                        <div className="flex items-center gap-3 mb-3 mt-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-600">
                              {achievement.year}
                            </span>
                          </div>
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                        </div>
                      ) : null}

                      {/* Glassmorphism achievement card with monochrome to color effect */}
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
                        <div className="flex items-center gap-4">
                          <div
                            className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}
                          >
                            <FontAwesomeIcon
                              icon={achievement.icon}
                              className="text-white h-5 w-5"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{achievement.title}</h3>
                            <p className="text-sm">{achievement.subtitle}</p>
                            <div className="text-xs text-gray-500 mt-1">
                              {achievement.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Transparent bottom overlay when not expanded */}
              {!isExpanded && hasMoreAchievements && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
              )}

              {/* Expand/Collapse Button */}
              {hasMoreAchievements && (
                <motion.div
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                  >
                    <span>
                      {isExpanded
                        ? `Show Less`
                        : `Show ${allAchievements.length - 4} More`}
                    </span>
                    <FontAwesomeIcon
                      icon={isExpanded ? faChevronUp : faChevronDown}
                      className="h-3 w-3 transition-transform duration-300"
                    />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}

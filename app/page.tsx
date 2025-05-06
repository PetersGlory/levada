"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      {/* Header */}
      <header className="w-full py-4 bg-neutral-900">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-24 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-3 items-center">
            {/* Main Content - Takes 2/3 on large screens */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Hero Image (Mobile: top, Desktop: left) */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden bg-neutral-800">
                    <Image
                      src="/img/hero-user-1.png"
                      width={400}
                      height={400}
                      alt="Hero Image"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Hero Text */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-stone-300 leading-tight">
                    Discover <br />
                    Your Potential
                  </h1>
                  <p className="mt-6 text-lg text-neutral-400 max-w-md">
                    Talent meets boundless opportunities. Connecting exceptional African talent with reputable
                    organizations worldwide, Levada is your gateway to a thriving career.
                  </p>
                </div>
              </div>

              {/* Email Signup */}
              <div className="flex justify-center md:justify-start w-full max-w-xl mx-auto md:mx-0">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full py-4 px-6 pr-36 text-base bg-neutral-800 rounded-full text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 py-3 px-6 text-base font-medium bg-violet-500 rounded-full text-stone-950 shadow-lg hover:bg-violet-400 transition-colors">
                    Try Levada
                  </button>
                </div>
              </div>

              {/* Additional Content */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="rounded-2xl overflow-hidden bg-neutral-800">
                  <Image
                    src="/img/hero-user-3.png"
                    width={500}
                    height={300}
                    alt="Additional Content"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden bg-neutral-800">
                  <Image
                    src="/img/hero-user-5.png"
                    width={500}
                    height={300}
                    alt="Additional Content"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Testimonials - Takes 1/3 on large screens */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-800">
                <Image
                  src="/img/hero-user-4.png"
                  width={400}
                  height={500}
                  alt="Felicia Akerele"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-medium">Felicia Akerele</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-800">
                <Image
                  src="/img/hero-user-2.png"
                  width={400}
                  height={300}
                  alt="Mark Gabriel"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-medium">Mark Gabriel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16 bg-neutral-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-neutral-400 mb-8">Organizations hiring on Levada</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center w-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-12 w-24 bg-neutral-700/50 rounded-md flex items-center justify-center">
                  <span className="text-neutral-400 text-xs">LOGO</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 text-violet-400 font-medium">
              <div className="w-6 h-6 rounded-full bg-violet-400/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-violet-400" />
              </div>
              <span>WHAT DO WE DO?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-300">
              Global Impact, African Roots
            </h2>

            <p className="text-lg text-neutral-400">
              Levada connects reputable organizations with top verified talents from Africa. We are not just a platform;
              we are the architects of a movement, committed to showcasing and propelling African talent to new heights
              of recognition and success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hire-talent"
                className="px-8 py-3 bg-violet-500 text-white font-medium rounded-full hover:bg-violet-400 transition-colors"
              >
                Hire Talent
              </Link>
              <Link
                href="/jobs"
                className="px-8 py-3 bg-neutral-800 text-white font-medium rounded-full hover:bg-neutral-700 transition-colors"
              >
                Current Jobs
              </Link>
            </div>
          </div>

          <div className="mt-24 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-stone-300 mb-6">Discover Levada</h2>
            <p className="text-lg text-neutral-400">
              We are on a journey of transforming the way African talent and global organizations interact. Delve into
              the transformative experience of recruiting African talent. Explore a world where possibilities are
              boundless, and success is just a connection away.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-neutral-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 text-violet-400 font-medium">
              <div className="w-6 h-6 rounded-full bg-violet-400/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-violet-400" />
              </div>
              <span>HOW IT WORKS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-300">
              Ready to try Levada? Let's show you how to join our talent pool
            </h2>

            <p className="text-lg text-neutral-400">
              We are on a journey of transforming the way African talent and global organizations interact. Delve into
              the transformative experience of recruiting African talent.
            </p>
          </div>

          {/* Process Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-neutral-900 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8">
                <div className="aspect-video bg-neutral-800 rounded-xl mb-8 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-violet-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Pass the Aptitude Test</h3>
                <p className="text-neutral-400">
                  You will take an aptitude test & also prove you can cut it in a real-world work setting.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-900 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8">
                <div className="aspect-video bg-neutral-800 rounded-xl mb-8 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Interview Process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Undergo Levada Interview</h3>
                <p className="text-neutral-400">
                  Our team will interview you — where you get to wow us, then you get approved and verified.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-900 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8">
                <div className="aspect-video bg-neutral-800 rounded-xl mb-8 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-violet-500 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">$45</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Get Matched & Elevated</h3>
                <p className="text-neutral-400">
                  Levada opens you to pool of jobs and get matched to a project of your choice. Start earning!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Levada Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 text-violet-400 font-medium">
              <div className="w-6 h-6 rounded-full bg-violet-400/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-violet-400" />
              </div>
              <span>LEVADA TALENT</span>
            </div>

            <p className="text-lg text-neutral-400">
              We're on a journey to disrupt the traditional job-seeking process and explore new opportunities. Connect,
              collaborate, and create with top talent across Africa.
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-300">Why Join Levada?</h2>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-neutral-800 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center mb-8">
                  <CheckCircle size={32} className="text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Effortless Connection</h3>
                <p className="text-neutral-400 flex-grow">
                  Say goodbye to tedious job hunting. Levada streamlines the process, presenting you with tailored
                  opportunities that match your expertise and career goals.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-800 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center mb-8">
                  <CheckCircle size={32} className="text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Transparent and Fair</h3>
                <p className="text-neutral-400 flex-grow">
                  Experience transparency and fairness in every interaction. Levada values integrity, ensuring a
                  platform where your talent is recognized and rewarded based on merit.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-800 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center mb-8">
                  <CheckCircle size={32} className="text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Verified and Approved Pool</h3>
                <p className="text-neutral-400 flex-grow">
                  Join a community of verified professionals. Levada ensures that organizations have access to a pool of
                  top talents, and talents, in turn, connect with reputable employers.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Career Growth Support */}
            <div className="bg-neutral-800 rounded-3xl border border-neutral-700 overflow-hidden p-8">
              <h3 className="text-2xl font-bold text-stone-300 mb-4">Career Growth Support</h3>
              <p className="text-neutral-400 mb-6">
                Levada is more than just a platform; it's your partner in career growth. Access resources, training, and
                mentorship opportunities to enhance your skills and navigate your career path with confidence.
              </p>
              <div className="aspect-video bg-neutral-900 rounded-xl flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-violet-500 flex items-center justify-center">
                  <ArrowRight size={24} className="text-white" />
                </div>
              </div>
            </div>

            {/* Collaborate in real-time */}
            <div className="bg-neutral-800 rounded-3xl border border-neutral-700 overflow-hidden p-8">
              <h3 className="text-2xl font-bold text-stone-300 mb-4">Collaborate in real-time</h3>
              <p className="text-neutral-400 mb-6">
                Boost your career by connecting with global top-tier organizations. Gain exposure to diverse industries
                and projects aligned with your skills and goals.
              </p>
              <div className="aspect-video bg-neutral-900 rounded-xl flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-500"></div>
                <div className="w-12 h-12 rounded-full bg-violet-400"></div>
                <div className="w-12 h-12 rounded-full bg-violet-300"></div>
              </div>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Product Designer",
              "Data Analyst",
              "Back & Front-end Engineer",
              "Product Management",
              "Digital Marketer",
              "Data Engineer",
              "Mobile Dev Engineer",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full border border-neutral-700"
              >
                <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                <span className="text-neutral-300 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Africa's Finest Talent Section */}
      <section className="py-24 bg-neutral-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 text-violet-400 font-medium">
              <div className="w-6 h-6 rounded-full bg-violet-400/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-violet-400" />
              </div>
              <span>LEVADA CLIENT</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-300">
              Access Africa's Finest Talent
            </h2>

            <p className="text-lg text-neutral-400">
              Tap into the immense talent reservoir that Africa has to offer. As a visionary organization, you're not
              just hiring; you're forming partnerships with some of the finest professionals across the continent.
            </p>

            <Link
              href="/hire-talent"
              className="inline-flex items-center gap-2 px-8 py-3 bg-violet-500 text-white font-medium rounded-full hover:bg-violet-400 transition-colors"
            >
              Hire on Levada
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-stone-300 mb-6">
              Elite Professionals at Your Fingertips
            </h2>
            <p className="text-lg text-neutral-400">
              We are on a journey of transforming the way African talent and global organizations interact. Delve into
              the transformative experience of recruiting African talent.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-neutral-900 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center mb-8">
                  <CheckCircle size={32} className="text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Efficiency Redefined</h3>
                <p className="text-neutral-400 flex-grow">
                  Levada takes the hassle out of talent discovery saving you time and resources. Our platform is
                  designed for efficiency, ensuring that your organization can access top-tier talent seamlessly.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-900 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center mb-8">
                  <CheckCircle size={32} className="text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Tailored Matches for Project Success</h3>
                <p className="text-neutral-400 flex-grow">
                  Build project teams strategically with Levada's intelligent matching and personalized recommendations
                  that synergize and drive project success.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-900 rounded-3xl border border-neutral-700 overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center mb-8">
                  <CheckCircle size={32} className="text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-stone-300 mb-4">Verified Quality</h3>
                <p className="text-neutral-400 flex-grow">
                  Rest easy knowing that every professional on Levada undergoes a rigorous verification process. Your
                  team deserves the best, and we ensure quality at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 text-violet-400 font-medium">
              <div className="w-6 h-6 rounded-full bg-violet-400/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-violet-400" />
              </div>
              <span>SUCCESS STORIES</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-300">
              Don't just take our word for it
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Tosin Adeniyi"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-400 text-center mb-8">
                "In the design world, my journey with Levada was a perfect match. Their smart system linked me with
                ideal job opportunities worldwide, making job hunting easy and stress-free. Levada isn't just a job
                site; it's a friendly guide to finding success your way."
              </p>
              <div className="text-center">
                <h4 className="text-xl font-bold text-stone-300">Tosin Adeniyi</h4>
                <p className="text-neutral-400">Data Analyst - PushUp Design Agency</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Martin Loeppky"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-400 text-center mb-8">
                "Finding Levada was a real game-changer for our company. As a customer, it helped our business a lot.
                Levada connected us with the best talent from Africa, making hiring way easier. The people we hired
                through Levada brought awesome skills to our team, helping our business grow."
              </p>
              <div className="text-center">
                <h4 className="text-xl font-bold text-stone-300">Martin Loeppky</h4>
                <p className="text-neutral-400">CTO - Gate</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-2xl p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-violet-400 mb-4">20+</div>
              <div className="text-neutral-300">Happy Clients</div>
            </div>
            <div className="bg-neutral-800 rounded-2xl p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-violet-400 mb-4">5k+</div>
              <div className="text-neutral-300">Verified Talents</div>
            </div>
            <div className="bg-neutral-800 rounded-2xl p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-violet-400 mb-4">4.8</div>
              <div className="text-neutral-300">Review Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-neutral-900 rounded-3xl p-8 md:p-16">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-300">
                Connecting Africa's tech talent to global opportunities
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Levada empowers individuals to discover tech jobs, access embedded finance, and enjoy exclusive
                community benefits
              </p>
              <div className="relative max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full py-4 px-6 pr-36 text-base bg-neutral-800 rounded-full text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 py-3 px-6 text-base font-medium bg-violet-500 rounded-full text-stone-950 shadow-lg hover:bg-violet-400 transition-colors">
                  Try Levada
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

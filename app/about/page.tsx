import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden mb-16">
        <Image
          src="/our-journey.jpeg"
          alt="About Funcy Fabric"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            OUR STORY
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Redefining comfort and style through premium oversized t-shirts
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At Funcy Fabric, our mission is to create clothing that empowers
            individuals to express themselves confidently and comfortably. We
            believe that fashion should be accessible, sustainable, and
            inclusive.
          </p>
          <p className="text-gray-700 mb-6">
            We're dedicated to crafting premium oversized t-shirts that combine
            exceptional quality, thoughtful design, and responsible
            manufacturing practices. Our goal is to redefine casual wear by
            offering pieces that are versatile, durable, and timeless.
          </p>
          <p className="text-gray-700">
            Through our commitment to sustainability and ethical production, we
            strive to make a positive impact on both our customers and the
            planet.
          </p>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/our-mission.jpeg"
            alt="Our Mission"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-gray-100 p-8 md:p-16 rounded-lg mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-black/20 mb-4">01</div>
            <h3 className="text-xl font-bold mb-4">The Beginning</h3>
            <p className="text-gray-700">
              Funcy Fabric was born in 2025, driven by a passion for fashion and
              a vision to create timeless, stylish, and comfortable clothing.
              What started as an idea quickly turned into a movement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-black/20 mb-4">02</div>
            <h3 className="text-xl font-bold mb-4">Growth & Innovation</h3>
            <p className="text-gray-700">
              With a growing community, we embraced innovation, expanding our
              collections while staying committed to quality, sustainability,
              and customer satisfaction. Every piece we create reflects our
              dedication to excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-black/20 mb-4">03</div>
            <h3 className="text-xl font-bold mb-4">Today & Beyond</h3>
            <p className="text-gray-700">
              Funcy Fabric is more than just a brand—it’s a lifestyle. As we
              continue to push the boundaries of sustainable fashion, our
              mission remains the same: to offer high-quality, stylish clothing
              that defines the future of fashion.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      {/* <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative aspect-square overflow-hidden rounded-full mb-4 mx-auto max-w-[250px]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Founder</h2>
        <div className="text-center">
          <div className="relative aspect-square overflow-hidden rounded-full mb-4 mx-auto max-w-[250px]">
            <Image
              src={team[0]?.image || "/placeholder.svg"}
              alt={team[0]?.name || "Team Member"}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-1">
            {team[0]?.name || "Team Member"}
          </h3>
          <p className="text-gray-500 mb-2">{team[0]?.role || "Role"}</p>
          <p className="text-gray-700 text-sm">
            {team[0]?.bio || "Bio goes here..."}
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative aspect-square md:order-last">
          <Image
            src="/our-values.jpeg"
            alt="Our Values"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-700">
                We use only the finest materials and work with skilled
                craftspeople to create products that are built to last.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to reducing our environmental impact through
                responsible sourcing, ethical manufacturing, and eco-friendly
                packaging.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p className="text-gray-700">
                We design for everybody, celebrating diversity and creating
                products that make people feel confident and comfortable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously explore new techniques, materials, and designs
                to push the boundaries of what's possible in fashion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="bg-black text-white p-8 md:p-16 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Join the Funcy Fabric Family</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Be part of our journey as we continue to redefine comfort and style.
          Follow us on social media, subscribe to our newsletter, or reach out
          to collaborate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            SHOP NOW
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-black hover:bg-white/90"
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "Shubham Vishwakarma",
    role: "Founder & CEO",
    bio: "Fashion enthusiast with a background in sustainable textiles. Shubham founded Funcy Fabric with a vision to create comfortable, stylish clothing that lasts.",
    image: "/ceo-image.jpeg",
  },
  {
    name: "Sam Rivera",
    role: "Creative Director",
    bio: "With over 10 years in fashion design, Sam brings creative vision and innovative thinking to every collection we create.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Jordan Lee",
    role: "Head of Production",
    bio: "Jordan ensures our manufacturing processes meet the highest standards of quality and sustainability.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Taylor Kim",
    role: "Marketing Director",
    bio: "Taylor leads our marketing efforts with a focus on authentic storytelling and community building.",
    image: "/placeholder.svg?height=400&width=400",
  },
];

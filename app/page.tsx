import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin } from "lucide-react"
import FoodCarousel from "@/components/food-carousel"
import SpecialOffers from "@/components/special-offers"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/70 z-10"></div>
        <Image
          src="/images/hero-image.jpeg"
          alt="HALL12Canteen.in"
          width={1200}
          height={500}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Open to all students of NIT</h1>
          <p className="text-xl text-white/90 mb-6 max-w-xl">
            Currently serving with limited menu, full menu will be available soon.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Link href="/feedback">Give Feedback</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Food Carousel */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">Most Ordered</h2>
        <FoodCarousel />
      </section>

      {/* Special Offers */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-amber-900">Combo Offers</h2>
          <Link href="/offers" className="text-amber-700 hover:text-amber-800 flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <SpecialOffers />
      </section>

      {/* Quick Links */}
      {/* <section>
        <h2 className="text-3xl font-bold text-amber-900 mb-6">Quick Links</h2>
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-amber-100">
            <TabsTrigger value="menu" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Menu
            </TabsTrigger>
            <TabsTrigger value="offers" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Offers
            </TabsTrigger>
            <TabsTrigger value="feedback" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Feedback
            </TabsTrigger>
          </TabsList>
          <TabsContent value="menu" className="bg-white p-6 rounded-b-lg border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Our Menu</h3>
            <p className="mb-4 text-amber-800">
              Explore the diverse menu offering food at affordable prices.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </TabsContent>
          <TabsContent value="offers" className="bg-white p-6 rounded-b-lg border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Current Offers</h3>
            <p className="mb-4 text-amber-800">
              Check out the discounts on combo offers.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/offers">View All Offers</Link>
            </Button>
          </TabsContent>
          <TabsContent value="feedback" className="bg-white p-6 rounded-b-lg border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Your Opinion Matters</h3>
            <p className="mb-4 text-amber-800">Feedback is taken seriously, take a moment to share your thoughts.</p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/feedback">Give Feedback</Link>
            </Button>
          </TabsContent>
        </Tabs>
      </section> */}
       {/* Google Maps Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="h-6 w-6 text-amber-700" />
          <h2 className="text-3xl font-bold text-amber-900">Location</h2>
        </div>
        <div className="rounded-xl overflow-hidden border border-amber-200 shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.4639673423036!2d87.28879729999999!3d23.5461264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f773002c336315%3A0xff96523f47bbe966!2sHall-12%20(%20Dr.%20APJ%20Abdul%20Kalam%20International%20Hostel)!5e0!3m2!1sen!2sin!4v1713118164!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HALL-12 Location"
            className="w-full"
          ></iframe>
        </div>
        <div className="mt-4 bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-start gap-3">
          <MapPin className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
          <p className="text-amber-800">
            <strong>HALL-12 Canteen</strong> is located inside Hall-12,Ground Floor. Open daily from 7:00 AM to 10:30 PM.
          </p>
        </div>
      </section>
    </div>
  )
}

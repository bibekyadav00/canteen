import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function SpecialOffers() {
  const offers = [
    {
      id: 1,
      title: "Chinese Combo",
      description: "Chilli Panner with Fried Rice",
      originalPrice: "₹120",
      offerPrice: "₹100",
      image: "/images/paneer-fried.jpg",
      // validUntil: "May 15, 2025",
      isNew: true,
    },
    {
      id: 2,
      title: "Dinner Combo",
      description: "Chicken Kasa(Full) with 7 parathas ",
      originalPrice: "₹160",
      offerPrice: "₹150",
      image: "/images/chicken-combo.jpg",
      // validUntil: "April 30, 2025",
      isNew: true,
    },
   
    // {
    //   id: 3,
    //   title: "Evening Snack Deal",
    //   description: "Buy any 2 snacks and get a free cold drink",
    //   originalPrice: "Varies",
    //   offerPrice: "Free Drink",
    //   image: "/images/snack-deal.jpg",
    //   validUntil: "Ongoing",
    //   isNew: false,
    // },
    {
      id: 4,
      title: "Chinese Combo",
      description: "Hakka Noodles with Chilli Chicken",
      originalPrice: "130",
      offerPrice: "100",
      image: "/images/hakka-chilli.jpg",
      // validUntil: "Every Saturday & Sunday",
      isNew: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {offers.map((offer) => (
        <Link key={offer.id} href="/offers" className="transition-transform hover:scale-[1.02]">
          <Card className="overflow-hidden border-amber-200 h-full">
            <div className="relative h-48">
              <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
              {offer.isNew && <Badge className="absolute top-2 right-2 bg-amber-600">New</Badge>}
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg text-amber-900 mb-1">{offer.title}</h3>
              <p className="text-sm text-amber-800 mb-2">{offer.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-amber-700 line-through">{offer.originalPrice}</span>
                <span className="font-bold text-amber-900">{offer.offerPrice}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

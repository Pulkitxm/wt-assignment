import { Link } from "react-router-dom"
import { PRODUCT } from "../types/product"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function ProductCard({ product }: { product: PRODUCT }) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-2 right-2">{product.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold line-clamp-2 mb-2">{product.title}</CardTitle>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          {product.rating && (
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400 mr-1" />
              <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={product.link}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
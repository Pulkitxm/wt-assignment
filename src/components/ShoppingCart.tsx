import { useRecoilValue } from "recoil";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getCartCount } from "@/atoms/cart";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const cartItemsCount = useRecoilValue(getCartCount);

  return (
    <div className="absolute top-4 right-4 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to={"/cart"}>
              <Button
                variant="outline"
                size="icon"
                aria-label={`Shopping cart with ${cartItemsCount} items`}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartItemsCount > 99 ? "99+" : cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {cartItemsCount === 1 ? "1 item" : `${cartItemsCount} items`} in
              cart
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

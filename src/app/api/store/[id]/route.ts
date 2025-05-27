import { NextResponse } from "next/server";

const allStores = [
  {
    _id: "682f15427cfc1089d72e6cef",
    name: "Nike",
    image: {
      url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/1747916093598-0a733947-70e1-4500-bf80-6e62dc5b2df1-olle.png",
      alt: "Nike Store Image",
    },
    coupons: [
      {
        _id: "coupon-nike-1",
        offerDetails: "Get 10% Off Sitewide",
        code: "has23",
        active: false,
        isValid: true,
      },
      {
        _id: "coupon-nike-2",
        offerDetails: "Sale Items! Get Up To 50% Off",
        code: "",
        active: true,
        isValid: true,
      },
        
       {
        _id: "coupon-nike-3",
        offerDetails: "Buy 1 Get 1 Free on Select Items",
        code: "BOGO",
        active: true,
        isValid: true,
      },
      {
        _id: "coupon-nike-4",
        offerDetails: "Extra 15% Off for Members",
        code: "MEMBER15",
        active: true,
        isValid: true,
      },
      {
        _id: "coupon-nike-5",
        offerDetails: "Flat 25% Off on Shoes",
        code: "SHOES25",
        active: true,
        isValid: true,
      },
    ],
  },


  {
    _id: "6831014bc4ee2827acd01c60",
    name: "Anlan",
    image: {
      url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/1748042059219-703808fe-a13f-4808-97ed-a6940af7d27b-anlan.png",
      alt: "Anlan Store Image",
    },
    coupons: [
      {
        _id: "coupon-anlan-1",
        offerDetails: "Free Shipping on Orders Over $50",
        code: "FREE50",
        active: true,
        isValid: true,
      },
      {
        _id: "coupon-anlan-2",
        offerDetails: "20% Off Electronics",
        code: "ANLAN20",
        active: true,
        isValid: true,
      },
   {
        _id: "coupon-anlan-3",
        offerDetails: "30% Off Skincare Devices",
        code: "SKIN30",
        active: true,
        isValid: true,
      },
      {
        _id: "coupon-anlan-4",
        offerDetails: "Buy 2 Get 1 Free",
        code: "B2G1FREE",
        active: true,
        isValid: true,
      },
      {
        _id: "coupon-anlan-5",
        offerDetails: "Limited Time Flash Sale 40% Off",
        code: "FLASH40",
        active: true,
        isValid: true,
      },
    ],
  },
];


export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const store = allStores.find((store) => store._id === id);

  if (!store) {
    return NextResponse.json({ message: "Store not found" }, { status: 404 });
  }

  return NextResponse.json(store);
}

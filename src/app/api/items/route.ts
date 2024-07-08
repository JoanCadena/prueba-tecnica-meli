import { ItemSearchResponse } from "@/interfaces/items";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    if (req.method !== "GET") {
      throw new Error("Method Not Allowed");
    }

    if (!req.nextUrl.searchParams.has("search")) {
      throw new Error("Bad request");
    }

    const query = req?.nextUrl?.searchParams?.get("search");
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    const mappedResponse = mapResponse(data);
    return NextResponse.json({ mappedResponse });
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server error", e },
      { status: 500 }
    );
  }
};

const mapResponse = (response: any): ItemSearchResponse => {
  const mappedItems = response?.results?.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.sale_price.currency_id,
        amount: item.sale_price.amount,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      seller: item.seller.nickname,
    };
  });

  return {
    author: {
      name: "Joan",
      lastname: "Cadena",
    },
    items: mappedItems,
  };
};

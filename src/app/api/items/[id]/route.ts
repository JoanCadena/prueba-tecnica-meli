import { ItemDetailResponse } from "@/interfaces/items";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    if (req.method !== "GET") {
      throw new Error("Method Not Allowed");
    }

    if (req.nextUrl.pathname.length == 0) {
      throw new Error("Bad request");
    }

    const id = req?.nextUrl?.pathname?.split("/").slice(-1)[0];
    const itemResponse = await fetch(
      `https://api.mercadolibre.com/items/${id}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const itemDescriptionResponse = await fetch(
      ` https://api.mercadolibre.com/items/${id}/description`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const itemData = await itemResponse.json();
    const itemDescriptionData = await itemDescriptionResponse.json();

    const mappedResponse = mapResponse({ itemData, itemDescriptionData });

    return NextResponse.json({ mappedResponse });
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server error" },
      { status: 500 }
    );
  }
};

const mapResponse = (response: any): ItemDetailResponse => {
  const mappedItem = {
    id: response?.itemData?.id,
    title: response?.itemData?.title,
    price: {
      currency: response?.itemData?.currency_id,
      amount: response?.itemData?.price,
    },
    picture: response?.itemData?.pictures[0]?.url,
    condition: response?.itemData?.condition,
    free_shipping: response?.itemData?.shipping?.free_shipping,
    sold_quantity: response?.itemData?.initial_quantity,
    description: response?.itemDescriptionData?.plain_text,
    itemLink: response?.itemData?.permalink,
  };

  return {
    author: {
      name: "Joan",
      lastname: "Cadena",
    },
    item: mappedItem,
  };
};

export const config = {
  api: {
    bodyParser: true,
  },
};

import { NextApiRequest, NextApiResponse } from "next";
import { StoreProduct } from "../../../../../type.d";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      if (res) {
        res.status(405).end(); // Método não permitido
      }
      return;
    }
    console.log("Request Body Before:", req.body);
    const { items, email } = req.body || {};
    console.log("Request Body Before:", req.body);

    if (!items || !Array.isArray(items) || !email) {
      console.error("Dados inválidos para o checkout");
      res.status(400).json({ error: "Dados inválidos para o checkout" });
      return;
    }
    console.log("Items:", items);
    console.log("Request Body:", req.body);

    const modifiedItems = items.map((item: StoreProduct) => ({
      quantity: item.quantity,
      price_data: {
        currency: "BRL",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          image: [item.image],
        },
      },
    }));

    const session = await stripe.checkout.session.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["BD", "US", "OM", "BRL", "CA", "GB"],
      },
      line_items: modifiedItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item: any) => item.image)),
      },
    });
    res.status(200).json({
      id: session.id,
    });
  } catch (error) {
    console.error(error);
  }
}

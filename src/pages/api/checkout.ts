import { NextApiRequest, NextApiResponse } from "next";
import { StoreProduct } from "../../../type.d";
import { metadata } from "@/app/layout";
import stripeLib from "stripe";
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error("Erro: Chave secreta do Stripe não está definida.");
  throw new Error("Chave secreta do Stripe não está definida.");
}

const stripe = new stripeLib(stripeSecretKey);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("Erro: Chave secreta do Stripe não está definida.");
    return res.status(500).json({ error: "Erro interno do servidor" });
  }

  try {
    console.log("Full Request Body:", req);
    console.log("Request Body Before:", req.body);

    // Verifica se req.body existe e tem a propriedade 'items'
    if (!req.body) {
      console.error("O corpo da requisição está vazio");
      res.status(400).json({
        error: "O corpo da requisição está vazio",
      });
      return;
    }

    if (!req.body.items) {
      console.error("O corpo da requisição não contém a propriedade 'items'");
      res.status(400).json({
        error: "O corpo da requisição não contém a propriedade 'items'",
      });
      return;
    }

    console.log("Request Body Before:", req.body);
    const { items, email } = req.body;

    console.log("Items:", items);
    console.log("Email:", email);
    if (!Array.isArray(items)) {
      console.error("Items não é um array válido");
      res.status(400).json({ error: "Items não é um array válido" });
      return;
    }

    const modifiedItems = items.map((item: StoreProduct) => ({
      quantity: item.quantity,
      price_data: {
        currency: "brl",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));
    console.log("Modified Items:", modifiedItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["BD", "US", "OM", "CA", "GB"],
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
    console.log("Stripe Session:", session);
    res.status(200).json({
      id: session.id,
    });
  } catch (error) {
    console.error("Erro durante a criação da sessão Stripe:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

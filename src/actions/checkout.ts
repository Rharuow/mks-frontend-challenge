"use server";

import Stripe from "stripe";
import { ProductCart } from "@/components/providers/CartProvider";

const createCheckout = async (products: Array<ProductCart>) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,
    line_items: products.map((product) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          images: [product.photo],
          description: product.description,
        },
        unit_amount: Number(product.price) * 100,
      },
      quantity: product.quantity,
    })),
  });

  return checkout;
};

export { createCheckout };

"use server";

import { stripe } from "@/src/lib/stripe";
import { CartItem } from "@/store/cart-store";
import { redirect } from "next/navigation";

export const checkoutAction = async (formData: FormData): Promise<void> => {
  const itemsJson = formData.get("items") as string;
  const frete = Number(formData.get("frete")) * 100; // Convertendo para centavos

  const items = JSON.parse(itemsJson);
  if (!items || items.length === 0) {
    return;
  }

  const line_items = items.map((item: CartItem) => ({
    price_data: {
      currency: "cad",
      product_data: { name: item.name },
      unit_amount: item.price, // Certifique-se de que `item.price` já esteja em centavos
    },
    quantity: item.quantity,
  }));

  // Opcional: adicionar um item representando o valor total
  line_items.push({
    price_data: {
      currency: "cad",
      product_data: { name: "Frete" },
      unit_amount: frete,
    },
    quantity: 1,
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_API_URL}/sucess`,
    cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
  });

  redirect(session.url!);
};

"use client";
import { useEffect, useState } from "react";
import { StoreProduct } from "../../../../type.d";
const Products = () => {
  const [products, setProducts] = useState<StoreProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
        const data = await res.json();
        setProducts(data);
        console.log(products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  });

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.title}</p>
          {/* Adicione mais detalhes do produto conforme necessário */}
        </div>
      ))}
    </div>
  );
};

export default Products;

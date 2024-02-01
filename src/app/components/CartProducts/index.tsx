import Image from "next/image";
import styles from "./styles.module.css";

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: string;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

interface CartProductsProps {
  item: Item;
}

export function CartProducts({ item }: CartProductsProps) {
  return (
    <div className={styles.divCartProducts}>
      <Image
        className="object-cover"
        width="150"
        height="150"
        src={item.image}
        alt="foto do produto"
      />
      <div className={styles.allproducts}>
        <div className={styles.products}>
          <p className={styles.titleproduct}>{item.title} </p>
        </div>
      </div>
    </div>
  );
}

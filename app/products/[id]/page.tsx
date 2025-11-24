interface Params {
  params: Promise<{
    id: string;
  }>;
}
import Image from "next/image";
export default async function ProductPage({ params }: Params) {
  const { id } = await params;   // <-- unwrap the promise

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <main>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* <Image
      src={product.images[0]}
      alt={product.title}
       width={800}
        height={800}
      /> */}
      
      {/* <img src={product.images} alt="" /> */}
    </main>
  );
}

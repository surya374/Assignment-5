import ProductList from "../components/ProductList";

const sampleProducts = [
  {
    id: 1,
    name: "SAMSUNG",
    image:
      "https://images.samsung.com/is/image/samsung/assets/us/2401/pcd/smartphones/01102024/S_smartphones-PCD_benefits-01-s24ultra_mob.jpg?$FB_TYPE_B_JPG$",
    description: "Full HD Display Phone",
    price: 100,
  },
  {
    id: 2,
    name: "I PHONE",
    image:
      "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_avail__en-in-removebg-preview.png",
    description: "Full HD Display Phone",
    price: 400,
  },
  {
    id: 3,
    name: "ONE PLUS",
    image:
      "https://www.reliancedigital.in/medias/One-Plus-Nord2T-Mobile-Phone-492850716-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3ODU3NnxpbWFnZS9qcGVnfGltYWdlcy9oN2UvaGUzLzk4NzQ2NDgwNzIyMjIuanBnfDExMGYwYTIwMDlkOTI0ZTY2MmY3NmJhNmVhNzUwY2YwMTRjNmY2OWRkMDA4NTc5YzE3NGY5NTg5OTA2ODg4YWY",
    description: "Full HD Display Phone",
    price: 300,
  },
  {
    id: 4,
    name: "REALME",
    image:
      "https://image01.realme.net/general/20230608/1686196034266e84391de43944a599cdec535212ef4f6.png?width=1440&height=1440&size=710277",
    description: "Full HD+ Display Phone",
    price: 200,
  },
];

function Products({ addToCart }) {
  return <ProductList products={sampleProducts} addToCart={addToCart} />;
}

export default Products;

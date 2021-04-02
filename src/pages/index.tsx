import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Ttile } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      })
    })
  }, []);

  return (
    <div>


      <section>
        <Ttile>Products</Ttile>
        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id}>
                {recommendedProduct.title}
              </li>
            );
          })}
        </ul>

      </section>
    </div>
  )
}

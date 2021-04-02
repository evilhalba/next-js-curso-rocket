import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Ttile } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {


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


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/recommended')
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }

}
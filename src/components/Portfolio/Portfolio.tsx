import React from 'react';
import { client } from '@/utils/configSanity';
import { PortableText } from '@portabletext/react';

interface IPortfolio {
  _id: string;
  title: string;
  description: any;
  _createdAt: string;
}
async function getData() {
  const query = "*[_type=='portfolio']";
  const data = await client.fetch(query);
  return data as IPortfolio[];
}

const Portfolio = async () => {
  const data = (await getData()) as IPortfolio[];
  console.log(data);
  return (
    <div>
      {data.map((item, _id) => (
        <div key={_id}>
          <h3>{item.title}</h3>
          <PortableText value={item?.description}></PortableText>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

import { client } from '@/app/lib/sanity';
import GadgetCategories from '@/components/GadgetCategories';

const getData = async () => {
  const query = `*[_type == 'product'] {
    _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[] -> {name}
}`;
  const data = await client.fetch(query);
  return data;
};

const OurGadgets = async () => {
  const gadgets = await getData();
  console.log(gadgets);

  return (
    <div>
      <GadgetCategories gadgets={gadgets} />
    </div>
  );
};

export default OurGadgets;

import { client } from '@/app/lib/sanity';
import Link from 'next/link';
import PopularGadgetsCarousel from './PopularGadgetsCarousel';

// Get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
    _id,
      name,
      description,
      images,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[] -> {
      name
      }
  }`;
  const data = await client.fetch(query);
  return data;
};

const PopularGadgets = async () => {
  const gadgets = await getData();
  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <h2 className='text-center'>Most Popular Gadgets</h2>
        <p className='text-center mb-[30px]'>The World's Premium Brands In One Destination.</p>
        <PopularGadgetsCarousel gadgets={gadgets} />
        <Link href='/our-gadgets'>
          <button className='btn btn-accent mx-auto'>See all gadgets</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularGadgets;

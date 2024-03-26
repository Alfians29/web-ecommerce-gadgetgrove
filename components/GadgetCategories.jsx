'use client';
import { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import Gadget from './Gadget';

const GadgetCategories = ({ gadgets }) => {
  const [category, setCategory] = useState('all');
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  const [price, setPrice] = useState(2000);

  useEffect(() => {
    const filtered = gadgets.filter((gadget) => {
      const categoryMatch = category === 'all' ? gadgets : gadget.categories.some((categ) => categ.name === category);
      const priceMatch = gadget.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredGadgets(filtered);
  }, [category, price, gadgets]);

  console.log(filteredGadgets);

  return (
    <section className='min-h-[1200px] py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col'>
          {/* sidebar */}
          <aside className='w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed'>
            <RadioGroup defaultValue='all' className='flex flex-col gap-6 mb-12'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='all' id='all' onClick={() => setCategory('all')} />
                <label htmlFor='all'>All</label>
              </div>

              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='smartphone' id='smartphone' onClick={() => setCategory('smartphone')} />
                <label htmlFor='smartphone'>Smartphone</label>
              </div>

              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='tablet' id='tablet' onClick={() => setCategory('tablet')} />
                <label htmlFor='tablet'>Tablet</label>
              </div>

              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='laptop' id='laptop' onClick={() => setCategory('laptop')} />
                <label htmlFor='laptop'>Laptop</label>
              </div>

              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='computer' id='computer' onClick={() => setCategory('computer')} />
                <label htmlFor='computer'>Computer</label>
              </div>
            </RadioGroup>

            {/* price slider */}
            <div className='max-w-56'>
              <div className='text-lg mb-4 font-medium'>
                Max Price: <span className='text-accent font-semibold ml-2'>${price}</span>
                <span className='ml-2'>
                  (
                  {filteredGadgets.length > 1
                    ? `${filteredGadgets.length} items`
                    : filteredGadgets === 0
                    ? `${filteredGadgets.length} items`
                    : `${filteredGadgets.length} item`}
                  )
                </span>
              </div>
              <Slider defaultValue={[2000]} max={2000} step={1} onValueChange={(val) => setPrice(val[0])} />
            </div>
          </aside>
          {/* gadget list */}
          <div className='w-full xl:w-[1050px] ml-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
              {filteredGadgets.map((gadget) => {
                return <Gadget gadget={gadget} key={gadget.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GadgetCategories;

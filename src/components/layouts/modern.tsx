import Banner from '@/components/banners/banner';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import ProductGridHome from '@/components/products/grids/home';
import FilterBar from './filter-bar';
import type { HomePageProps } from '@/types';
import TopManufacturersGrid from '@/components/manufacturer/top-manufacturers-grid';
import CallToAction from '@/components/cta/call-to-action';
import { isMobile } from 'react-device-detect';
import BestSellingProductsGrid from '@/components/products/best-selling-products';
import PopularProductsGrid from '@/components/products/popular-products';
import SectionBlock from '@/components/ui/section-block';

export default function Modern({ variables }: HomePageProps) {
  return (
    <div className="flex flex-1 bg-gray-100 sm:ml-0 sm:mr-0 lg:ml-16 lg:mr-16">
  <main className="block w-full lg:pt-20 xl:mt-8 xl:overflow-hidden ltr:xl:pl-0 ltr:xl:pr-5 rtl:xl:pr-0 rtl:xl:pl-5 2xl:mt-6">
    
    
       <div className="flex space-x-0 sm:ml-0 sm:mr-0 lg:ml-16 lg:mr-16"> {/* Apply margin here */}
       {/* Categories on the left */}
      
       <div className="bg-gray-100 flex-1">
         <Categories layout="default" variables={variables.categories} />
       </div>
     
       {/* Banner on the right */}
       <div className="w-2/3 border border-border-200">
       <div className="relative h-full"> {/* Ensure the container has a height */}
      <Banner layout="modern" variables={variables.types} />
    </div>
       </div>
     </div> 
      


    <div className="mt-5 sm:ml-0 sm:mr-0 lg:ml-16 lg:mr-16"> {/* Apply margin here for content below */}
      <FilterBar variables={variables.categories} />
      <SectionBlock title={"New Arrivals"}>
      <Element name="grid" className="px-4 xl:px-0">
        <ProductGridHome 
          className="pt-2 pb-10 lg:py-2"
          variables={{
            ...variables.products,
            sortedBy: 'DESC',
            orderBy: 'created_at',
          }}
        />
      </Element>
      </SectionBlock>
      <BestSellingProductsGrid variables={variables?.bestSellingProducts} />
      <PopularProductsGrid variables={variables.popularProducts} />
      <TopManufacturersGrid />
      <CallToAction />
    </div>
  </main>
</div>


  );
}

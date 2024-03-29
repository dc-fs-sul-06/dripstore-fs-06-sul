import { SmallHighlightItem } from "../SmallHighlightItem/SmallHighlightItem"
import { TShirtIcon } from "../SmallHighlightIcons/TShirtIcon"
import { PantsIcon } from "../SmallHighlightIcons/PantsIcon"
import { HeadphoneIcon } from "../SmallHighlightIcons/HeadphoneIcon"
import { TenisIcon } from "../SmallHighlightIcons/TenisIcon"

export const SmallHighlightSection = ({ title }) => {
  return (
    <div className="font-Inter py-10 bg-gray-50 md:bg-purple-50">
      <div>
        <h1 className="text-dark-gray-2 font-bold md:text-2xl md:text-center px-5">{title}</h1>
      </div>
      <div className="pb-[50px] md:pb-[9px]">
        <div  className="flex justify-start md:justify-center items-center gap-5 md:gap-10 p-5 overflow-x-auto">
          <SmallHighlightItem
            image={<TShirtIcon />}
            name={'Camisetas'}
            ctaLink={'#'}
          />
          <SmallHighlightItem
            image={<PantsIcon />}
            name={'Calças'}
            ctaLink={'#'}
          />
          <SmallHighlightItem
            image={<PantsIcon />}
            name={'Bonés'}
            ctaLink={'#'}
          />
          <SmallHighlightItem
            image={<HeadphoneIcon />}
            name={'Headphones'}
            ctaLink={'#'}
          />
          <SmallHighlightItem
            image={<TenisIcon />}
            name={'Tênis'}
            ctaLink={'#'}
          />
        </div>
      </div>
    </div>
  )
}

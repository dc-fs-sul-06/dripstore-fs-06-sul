export const SmallHighlightItem = ({image, name, ctaLink}) => {
  return (
    <div>
        <a href={ctaLink}>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-5 rounded-full shadow">
              <div className="min-w-[56px] aspect-square hover:text-Primary">{image}</div>
            </div>
            <p className="text-dark-gray-2 text-xs md:text:sm font-bold leading-[22px] mt-3 tracking-[1px] md:tracking-tighter[.75px]">{name}</p>
          </div>
        </a>
      </div>
  )
}

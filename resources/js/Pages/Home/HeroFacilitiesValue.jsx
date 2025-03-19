import { usePage } from "@inertiajs/react";

const HeroFacilitiesValue = () => {
  const { props } = usePage();
  const { dataHeroFacilitiesValue } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-7xl p-4 sm:p-6">
        {/* Title Section */}
        <h1 className="mx-auto mb-8 rounded-xl bg-custom-yellow p-4 text-center font-lexend text-2xl font-bold text-black sm:text-3xl md:text-4xl">
          {dataHeroFacilitiesValue?.title || "No title available."}
        </h1>

        {/* Content Section */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* First Section */}
          <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">
            {dataHeroFacilitiesValue?.image_url1 ? (
              <img
                src={dataHeroFacilitiesValue.image_url1}
                loading="lazy"
                className="mb-4 w-full max-w-md rounded-2xl object-cover sm:max-w-lg md:max-w-xl"
                alt={dataHeroFacilitiesValue?.heading1}
              />
            ) : (
              <p className="font-lexend font-medium text-red-500">
                No images available.
              </p>
            )}
            <h6 className="mb-2 text-center font-lexend text-xl font-medium text-black sm:text-2xl md:text-3xl lg:text-left">
              {dataHeroFacilitiesValue?.heading1 || "No heading available."}
            </h6>
            <p className="font-regular mb-4 text-center font-lexend text-sm text-gray-600 sm:text-base md:text-lg lg:text-left">
              {dataHeroFacilitiesValue?.content1 || "No content available."}
            </p>
          </div>

          {/* Second Section */}
          <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">
            {dataHeroFacilitiesValue?.image_url2 ? (
              <img
                src={dataHeroFacilitiesValue.image_url2}
                loading="lazy"
                className="mb-4 w-full max-w-md rounded-2xl object-cover sm:max-w-lg md:max-w-xl"
                alt={dataHeroFacilitiesValue?.heading2}
              />
            ) : (
              <p className="font-lexend font-medium text-red-500">
                No images available.
              </p>
            )}
            <h6 className="mb-2 text-center font-lexend text-xl font-medium text-black sm:text-2xl md:text-3xl lg:text-left">
              {dataHeroFacilitiesValue?.heading2 || "No heading available."}
            </h6>
            <p className="font-regular mb-4 text-center font-lexend text-sm text-gray-600 sm:text-base md:text-lg lg:text-left">
              {dataHeroFacilitiesValue?.content2 || "No content available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFacilitiesValue;

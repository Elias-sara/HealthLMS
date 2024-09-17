import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SideBanners() {
  const [sideBannerList, setSideBannerList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSideBanners = async () => {
      try {
        const resp = await GlobalApi.getSideBanner();
        console.log("API Response:", resp); // Log the full response

        // Directly check if the response is an array or handle it appropriately
        if (Array.isArray(resp)) {
          setSideBannerList(resp);
        } else if (Array.isArray(resp.sideBanners)) {
          setSideBannerList(resp.sideBanners);
        } else {
          console.warn("Expected an array of sideBanners, but got:", resp);
        }
      } catch (error) {
        console.error("Error fetching side banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSideBanners();
  }, []);

  if (loading) {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div
            key={index}
            className="p-1 bg-white shadow-sm border rounded-lg mb-2"
          >
            <div className="w-full h-[240px] rounded-xl bg-slate-200 animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {sideBannerList.length > 0 ? (
        sideBannerList.map((item, index) => (
          <div
            key={index}
            className="p-1 bg-white shadow-sm border rounded-lg mb-4"
          >
            <Image
              src={item.banner?.url || "/default-image.jpg"} // Fallback image
              alt={item.name || "Banner"}
              width={500}
              height={300}
              className="rounded-xl cursor-pointer"
              onClick={() => window.open(item.url)}
              priority
            />
          </div>
        ))
      ) : (
        <p>No banners available.</p>
      )}
    </div>
  );
}

export default SideBanners;

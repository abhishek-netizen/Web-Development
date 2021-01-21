import React from "react";
import Carders from "./Carders";
import Sdata from "./Sdata";

const Amazon = () => {
  return (
    <>
      <Carders
        key={Sdata[4].id}
        showName={Sdata[4].showNames}
        imgSrc={Sdata[4].imgSrcs}
        zoner={Sdata[4].zoners}
        watchLink={Sdata[4].watchLinks}
      />

      <Carders
        key={Sdata[5].id}
        showName={Sdata[5].showNames}
        imgSrc={Sdata[5].imgSrcs}
        zoner={Sdata[5].zoners}
        watchLink={Sdata[5].watchLinks}
      />

      <Carders
        key={Sdata[6].id}
        showName={Sdata[6].showNames}
        imgSrc={Sdata[6].imgSrcs}
        zoner={Sdata[6].zoners}
        watchLink={Sdata[6].watchLinks}
      />
      <Carders
        key={Sdata[7].id}
        showName={Sdata[7].showNames}
        imgSrc={Sdata[7].imgSrcs}
        zoner={Sdata[7].zoners}
        watchLink={Sdata[7].watchLinks}
      />
    </>
  );
};

export default Amazon;

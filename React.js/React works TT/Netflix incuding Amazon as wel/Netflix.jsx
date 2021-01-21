import React from "react";
import Carders from "./Carders";
import Sdata from "./Sdata";

const Netflix = () => {
  return (
    <>
      <Carders
        key={Sdata[0].id}
        showName={Sdata[0].showNames}
        imgSrc={Sdata[0].imgSrcs}
        zoner={Sdata[0].zoners}
        watchLink={Sdata[0].watchLinks}
      />

      <Carders
        key={Sdata[1].id}
        showName={Sdata[1].showNames}
        imgSrc={Sdata[1].imgSrcs}
        zoner={Sdata[1].zoners}
        watchLink={Sdata[1].watchLinks}
      />

      <Carders
        key={Sdata[2].id}
        showName={Sdata[2].showNames}
        imgSrc={Sdata[2].imgSrcs}
        zoner={Sdata[2].zoners}
        watchLink={Sdata[2].watchLinks}
      />

      <Carders
        key={Sdata[3].id}
        showName={Sdata[3].showNames}
        imgSrc={Sdata[3].imgSrcs}
        zoner={Sdata[3].zoners}
        watchLink={Sdata[3].watchLinks}
      />
    </>
  );
};

export default Netflix;

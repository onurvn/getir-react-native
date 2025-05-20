import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  ViewToken,
} from "react-native";

const { width, height } = Dimensions.get("window");

function index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
  ]);

  const onViewRef = React.useRef(
    (info: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => {
      if (info.viewableItems.length > 0) {
        setActiveIndex(info.viewableItems[0].index || 0);
      }
    }
  );

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <FlatList
      data={banners}
      renderItem={(item) => (
        <Image
          source={{ uri: item.item }}
          style={{ width: width, height: height * 0.26, resizeMode: "none" }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
      viewabilityConfig={viewConfigRef.current}
      onViewableItemsChanged={onViewRef.current}
      testID="banner-carousel"
      keyExtractor={(_, idx) => idx.toString()}
    />
  );
}

export default index;

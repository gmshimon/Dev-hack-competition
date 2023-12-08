import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { View, Text, Dimensions } from "react-native";

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0.0,
  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.8,
  fillShadowGradient: 'rgba(26, 255, 1, 0.5)',
  fillShadowGradientOpacity: 1,
  propsForBackgroundLines: {
    strokeDasharray: "", // background line dashed setting
  },
  propsForLabels: {
    fontSize: 12,
    fontWeight: "bold",
    color:"black"
  },
  useShadowColorFromDataset: false, // optional
  colorScale: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

export default function ExpenseChart() {
  const data = {
    labels: ["Water", "Gas", "sewerage"], // optional
    data: [0.4, 0.6, 0.8],
  };
  return (
    <View>
      <ProgressChart
        data={data}
        style={{paddingRight:12}}
        width={Dimensions.get("window").width-15}
        height={220}
        strokeWidth={15}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </View>
  );
}

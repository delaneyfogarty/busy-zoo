import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';

export default function MyCharts() {
  return (
    <div>
      <VictoryChart domainPadding={40}>
        <VictoryBar
          width={500}
          data={[
            { quarter: 1, earnings: 50000 },
            { quarter: 2, earnings: 16500 },
            { quarter: 3, earnings: 14250 },
            { quarter: 4, earnings: 19000 },
          ]}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>

      <VictoryPie
        className="pie"
        width={300}
        colorScale={['lightpink', 'teal', 'rebeccapurple', 'magenta']}
        data={[
          { quarter: 'Nice Neighbors', earnings: 50000 },
          { quarter: 'Mean Neighbors', earnings: 16500 },
          { quarter: 'Funny Neighbors', earnings: 14250 },
          { quarter: 'Sad Neighbors', earnings: 19000 },
        ]}
        x="quarter"
        y="earnings"
      />
    </div>
  );
}

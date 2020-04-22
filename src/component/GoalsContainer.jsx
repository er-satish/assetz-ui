import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { XYPlot, VerticalBarSeries, RadialChart } from 'react-vis';

class GoalsContainer extends Component {
  render() {
    return (
      <Carousel>

        <Carousel.Item>
          <div className="d-block w-100">
            <XYPlot width={400} height={400}>
              <VerticalBarSeries
                data={[
                  {
                    x: 0,
                    y: 10
                  },
                  {
                    x: 1,
                    y: 11.507810136292905
                  },
                  {
                    x: 2,
                    y: 12.493612234728635
                  },
                  {
                    x: 3,
                    y: 13.502813125311858
                  },
                  {
                    x: 4,
                    y: 14.554032485216092
                  },
                  {
                    x: 5,
                    y: 13.773857671089827
                  },
                  {
                    x: 6,
                    y: 11.239716263728285
                  },
                  {
                    x: 7,
                    y: 8.948022900174642
                  },
                  {
                    x: 8,
                    y: 8.517948406608731
                  }
                ]}
                style={{}}
              />
              <VerticalBarSeries
                data={[
                  {
                    x: 0,
                    y: 10
                  },
                  {
                    x: 1,
                    y: 10.281615215329216
                  },
                  {
                    x: 2,
                    y: 10.840878011599687
                  },
                  {
                    x: 3,
                    y: 12.013941566315289
                  },
                  {
                    x: 4,
                    y: 11.301690607863296
                  },
                  {
                    x: 5,
                    y: 11.296645145291928
                  },
                  {
                    x: 6,
                    y: 11.652037864946728
                  },
                  {
                    x: 7,
                    y: 13.197339560152074
                  },
                  {
                    x: 8,
                    y: 15.431327532905383
                  }
                ]}
                style={{}}
              />
              <VerticalBarSeries
                data={[
                  {
                    x: 0,
                    y: 10
                  },
                  {
                    x: 1,
                    y: 9.179331634166662
                  },
                  {
                    x: 2,
                    y: 9.028932048130011
                  },
                  {
                    x: 3,
                    y: 9.711331794655933
                  },
                  {
                    x: 4,
                    y: 7.542145993627418
                  },
                  {
                    x: 5,
                    y: 6.157402515773144
                  },
                  {
                    x: 6,
                    y: 7.1261356874041635
                  },
                  {
                    x: 7,
                    y: 7.896174981927018
                  },
                  {
                    x: 8,
                    y: 8.299596320084198
                  }
                ]}
                style={{}}
              />
            </XYPlot>
          </div>
        </Carousel.Item>
        <Carousel.Item className="d-block w-100">
          <div>
            <RadialChart width={400} height={400}
              data={[
                {
                  angle: 15,
                  label: 'deck.gl'
                },
                {
                  angle: 22,
                  label: 'math.gl'
                },
                {
                  angle: 24,
                  label: 'probe.gl'
                },
                {
                  angle: 10,
                  label: 'vis.gl'
                },
                {
                  angle: 24,
                  label: 'react-map-gl'
                }
              ]}
              labelsRadiusMultiplier={1.1}
              labelsStyle={{
                fontSize: 12
              }}
              showLabels
            />
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default GoalsContainer;
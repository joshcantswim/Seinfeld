let chartData = [];
let linesPerEpisode;
let count = 0;
let dataMap, jerryData, georgeData, elaineData, kramerData, newmanData, mortyData, helenData, frankData;

d3.csv('data/scripts_updated.csv')
  .then(data => {
    data.forEach(d => {
      _data = data;
      count += 1;
    })



    for (let i = 0; i < count; i++) {
      chartData[i] = data[i];
    };

    chartData.shift();

    // cardData.shift();
    let aggregatedData = d3.rollups(chartData, v => v.length, d => d.Character, d => d.SEID);
    dataMap = aggregatedData;

    jerryData = dataMap[0];
    georgeData = dataMap[1];
    elaineData = dataMap[2];
    kramerData = dataMap[3];
    newmanData = dataMap[4];
    mortyData = dataMap[5];
    helenData = dataMap[6];
    frankData = dataMap[7];

    console.log(jerryData);
    console.log(georgeData);




    const orderedKeys = ['JERRY', 'GEORGE', 'ELAINE', 'KRAMER', 'NEWMAN', 'MORTY', 'HELEN', 'FRANK'];


    let aggregatedDataMap = Array.from(aggregatedData, ([key, count]) => ({ key, count }));
    aggregatedDataMap = aggregatedDataMap.filter(d => orderedKeys.includes(d.key));
    console.log(aggregatedDataMap);

    // for( let i = 0; i < aggregatedDataMap.length; i++) {
    //     var actorElement = document.createElement('option');
    //     actorElement.value = aggregatedDataMap[i][0];
    //     actorElement.innerHTML = aggregatedDataMap[i][0];

    //     actorContainer.appendChild(actorElement);
    // }




    const postcontainer = document.querySelector('.c-container');

    const cardMethods = () => {
      aggregatedDataMap.map((postData) => {
        const postElement = document.createElement('div');
        postElement.classList.add('character-container');
        postElement.setAttribute('data-character', postData.key);
        if (postData.key == "JERRY") {
          postElement.innerHTML = `
        <svg id="linesPerEpisodeJerry">
        </svg>
                `
        }
        else if (postData.key == "GEORGE") {
          postElement.innerHTML = `
          <svg id="linesPerEpisodeGeorge">
          </svg>
                  `
        }
        else if (postData.key == "KRAMER") {
          postElement.innerHTML = `
          <svg id="linesPerEpisodeKramer">
          </svg>
                  `
        }
        else if (postData.key == "ELAINE") {
          postElement.innerHTML = `
          <svg id="linesPerEpisodeElaine">
          </svg>
                  `
        }
        else if (postData.key == "MORTY") {
          postElement.innerHTML = `
          <svg id="linesPerEpisodeMorty">
          </svg>
                  `
        }
        else if (postData.key == "NEWMAN") {
          postElement.innerHTML = `
          <svg id="linesPerEpisodeNewman">
          </svg>
                  `
        }
        postcontainer.appendChild(postElement);
      })
    }
    cardMethods();

  })
  .catch(error => console.error(error));






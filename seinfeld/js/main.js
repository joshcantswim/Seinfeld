let Character = [];
let Dialogue = [];
let SEID = [];
let lineCount;

d3.csv('data/scripts.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            count += 1;
        })


        lineCount = new LineCount({ parentElement: '#linecount' }, data);
        wordcloud = new Wordcloud({ parentElement: '#wordcloud' }, data);
        linesperseason = new linesperseason({parentElement: '#linesperseason'}, data);

        lineCount.updateVis();
        wordcloud.updateVis();
    });
const iceCreamFlavors = ['vanilla', 'chocolate', 'strawberry', 'cookies and cream', 'cookie dough'];

 // Append paragraphs and highlight one element
let p = d3.select('body').selectAll('p')
    .data(iceCreamFlavors)
    .enter()
  .append('p') //now we have a paragraph for each element in the array
    .text(d => d) //text is set to the element
    .attr('class', 'custom-paragraph') //a class label allows you to define styles in css, or select these elements later
    .style('font-weight', 'bold') 
    .style('color', d => {
      if(d == 'strawberry')
        return 'red';
      else
        return 'black';
    });
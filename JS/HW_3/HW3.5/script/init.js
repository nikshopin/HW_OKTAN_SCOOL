let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')

    for (let item in listOfItems) {
        document.write('<li>' + listOfItems[item] + '</li>');
    }
document.write('</ul>');
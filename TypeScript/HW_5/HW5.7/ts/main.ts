let unorder = (text: string, count: number): void => {
    document.write('<ul>');
    for (let i: number = 0; i < count; i++) {
        document.write('<li>' + text + '</li>');
    }
    document.write('</ul>');
}

unorder('test text', 50);